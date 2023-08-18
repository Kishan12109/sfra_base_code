/* eslint-disable linebreak-style */
/* eslint-disable no-continue */
/* eslint-disable require-jsdoc */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable no-undef */
'use strict';

var File = require('dw/io/File');
var Logger = require('dw/system/Logger');
var Transaction = require('dw/system/Transaction');
var XMLStreamReader = require('dw/io/XMLStreamReader');
var OrderMgr = require('dw/order/OrderMgr');
var Status = require('dw/system/Status');

function RunimpXML(args) {
    var folderPath = args.Folder;
    var folder = new File(File.IMPEX + File.SEPARATOR + folderPath);
    var regex = args.FilePattern ? new RegExp(args.FilePattern) : /\S+.xml/;
    var files;
    function sortFileName(file1, file2) {
        return file1.getName().localeCompare(file2.getName());
    }
    if (!empty(folder.listFiles())) {
        files = folder.listFiles(function (file) {
            return regex.test(file.getName());
        });
        files.sort(sortFileName);
    }

    function readOrderStatus(XMLStreamReader) {
        try {
            var orderObject = {
                count_status: null,
                order_no: null
            };
            while (XMLStreamReader.hasNext()) {
                if (XMLStreamReader.next() === XMLStreamReader.START_ELEMENT) {
                    if (!XMLStreamReader.hasName()) {
                        continue;
                    }
                    var kountStatus = XMLStreamReader.getLocalName();
                    switch (kountStatus) {
                        case 'count_status':
                            orderObject.count_status = XMLStreamReader.getElementText();
                            break;
                        case 'OrderNumber':
                            orderObject.order_no = XMLStreamReader.getElementText();
                            break;
                        default:
                            continue;
                    }
                } else if (
                    XMLStreamReader.isEndElement() &&
                    XMLStreamReader.hasName() &&
                    XMLStreamReader.getLocalName() === 'count_status'
                ) {
                    break;
                }
            }
            return orderObject;
        } catch (e) {
            Logger.error(
                '[Exception] Error during read count status' +
                    '|' +
                    e.message +
                    '' +
                    e.fileName +
                    '#' +
                    e.lineNumber
            );
            return null;
        }
    }

    function generateJsonObjectData(XMLStreamReader) {
        var JSONData = {
            kountStatusList: []
        };
        while (XMLStreamReader.hasNext()) {
            if (XMLStreamReader.next() === XMLStreamReader.START_ELEMENT) {
                var kountStatus = XMLStreamReader.getLocalName();
                if (kountStatus === 'count_status') {
                    var orderStatus = readOrderStatus(XMLStreamReader);
                    if (orderStatus) {
                        JSONData.kountStatusList.push(orderStatus);
                    }
                }
            }
        }
        return JSONData;
    }

    function readFile(file) {
        if (file) {
            Logger.info('File processing: {0}', file.getName());
            var xmlStreamReader = new XMLStreamReader(file);
            var orderObject = generateJsonObjectData(xmlStreamReader);
            xmlStreamReader.close();
            return orderObject;
        }
    }


    function updateOrderData(JsonAdp) {
        JsonAdp.kountStatusList.forEach(function (orderStatus) {
            Transaction.wrap(function () {
                var order = OrderMgr.getOrder(orderStatus.order_no);
                if (!order) {
                    Logger.error('Unknown order: ' + orderStatus.order_no);
                } else {
                    Logger.info('Processing order: ' + orderStatus.order_no);
                    order.custom.kount_status = orderStatus.count_status;
                }
            });
        });
    }

    var filesCount = 0;
    var fileList = files.toArray();

    if (fileList.length > 0) {
        fileList.sort(sortFileName);
        fileList.slice(0, 19999).forEach(function (file) {
            try {
                var JsonAdp = readFile(file);
                if (JsonAdp) {
                    updateOrderData(JsonAdp);
                } else {
                    Logger.error('File is empty');
                }
                filesCount++;
            } catch (error) {
                Logger.error(
                    'An error occurred when importing order data: {0} - {1}',
                    error.message,
                    error.stack
                );
            }
        });
    }

    if (!files || files.length === 0 || filesCount === files.length) {
        return new Status(Status.OK, 'OK');
    } else if (filesCount < files.length) {
        return new Status(Status.ERROR, 'ERROR');
    }

    return new Status(Status.ERROR, 'ERROR');
}

module.exports = { RunimpXML: RunimpXML };

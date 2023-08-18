'use strict';

var OrderMgr = require('dw/order/OrderMgr');
var Order = require('dw/order/Order');
var Resource = require('dw/web/Resource');
var Transaction = require('dw/system/Transaction');
var Logger = require('dw/system/Logger');
var ArrayList = require('dw/util/ArrayList');
var File = require('dw/io/File');
var FileWriter = require('dw/io/FileWriter');
var Calendar = require('dw/util/Calendar');
var StringUtils = require('dw/util/StringUtils');
var EnumValue = require('dw/value/EnumValue');


const CSV_SEPARATOR = ';';
const CSV_LINESEPARATOR = '\n';
const CSV_INLINE_LINESEPARATOR = '|';
const DATE_FORMAT = 'dd/mm/yyyy HH:mm:ss';
const FILE_DATE_FORMAT = 'YYYYMMddHHmm';

var orderData = {
    OrderId: {
        name: 'SFCC Order ID',
        attribute: 'orderNo',
        type: 'string'
    },
    OrderDate: {
        name: 'Order Date',
        attribute: 'creationDate',
        type: 'date'
    },
    kountStatus: {
        name: 'kountStatus',
        attribute: 'custom.kount_status',
        type: 'enum'
    }
};

function Runexp(args) {
    var orderFileWriter;
    var error = false;
    try {
        orderFileWriter = getExportFile(args.OutputFileName || 'Orders', args.DestinationFolder);
        orderFileWriter.writeLine(writeHeaderLine(CSV_SEPARATOR, orderData));
        var count = 0;
        function callback(order) {
            orderFileWriter.writeLine(writeOrderLine(order));
            count++;
        }
        let request = 'status!={0} AND status!={1}';
        OrderMgr.processOrders(callback, request, Order.ORDER_STATUS_FAILED, Order.ORDER_STATUS_CANCELLED, true);

    } catch (e) {
        error = true;
        Logger.debug('Error occured during the Orders csv creation : {0}', e.message);

    } finally {
        if (orderFileWriter) {
            orderFileWriter.flush();
            orderFileWriter.close();
        }
    }
}

function writeOrderLine(order) {
    var linesArr = [];
    for (let valueToExport in orderData) {
        var data = orderData[valueToExport];
        var value = '';
        if (!empty(data.attribute)) {
            var attribute = data.attribute.split('.');
            var value1 = order;
            try {
                for (var a in attribute) {
                    value1 = value1[attribute[a]];
                }
                value = value1;
            } catch (error) {
                Logger.warn('unable to get {0} value : {1}', data.attribute, error);
            }
        }
        linesArr.push(valueToString(value, data.type));
    }
    return linesArr.join(CSV_SEPARATOR);
}

function valueToString(value, type) {
    try {
        switch (type) {
            case 'string':
                return writeString(value);
            case 'setOfStrings':
                return setOfStringToString(value);
            case 'date':
                return dateToString(value, DATE_FORMAT);
            case 'enum':
                return writeString(value);

            default:
                Logger.debug('Unknown type: {0}', type);
                break;
        }
    } catch (e) {
        const Logger = dw.system.Logger.getLogger('export');
        Logger.debug('Error while reading value: {0}', e);
        return '';
    }
    return '';
}

function dateToString(date, format) {
    let result = '';
    if (!empty(date)) {
        let dateObj = new Date(date);
        if (!empty(dateObj)) {
            if (!empty(format)) {
                result = StringUtils.formatCalendar(new Calendar(dateObj), format);
            } else {
                result = dateObj.toISOString();
            }
        }

    }
    return result;
}

function writeString(str) {
    if (empty(str)) {
        return '';
    }
    var modifiedStr = String(str.toString());
    if (modifiedStr.indexOf(';') !== -1) {
        modifiedStr = modifiedStr.split(';').join('|');
    }
    modifiedStr = modifiedStr.replace(/[\n\r]/g, '');
    return modifiedStr;
}

function enumToString(enumvalue) {
    return !empty(enumvalue) && enumvalue.hasOwnProperty('value') && !empty(enumvalue.value) ? enumvalue.join(CSV_INLINE_SEPARATOR) : '';
}

function getExportFile(prefix, DestinationFolder) {
    let fileName = createFileName(prefix + '-[name]-[date]', {
        name: 'Kishan',
        date: StringUtils.formatCalendar(new Calendar(), FILE_DATE_FORMAT)
    });
    //Checking Folder is exists in source folder
    let Folder = new File(File.IMPEX + File.SEPARATOR + DestinationFolder);
    Folder.mkdirs();

    let targetFile = new File(File.IMPEX + File.SEPARATOR + DestinationFolder + File.SEPARATOR + fileName + '.' + 'csv');

    if (targetFile.exists() == false) {
        targetFile.createNewFile();
    } else {
        targetFile.delete();
        targetFile.createNewFile();
    };

    return new FileWriter(targetFile, 'UTF-8');
}

function createFileName(pattern, patternArgs) {
    let fileName = pattern;
    for (let key in patternArgs) {
        fileName = fileName.replace('[' + key + ']', patternArgs[key]);
    }
    return fileName;
}

function writeHeaderLine(SEPARATOR, data) {
    return Object.keys(data).join(SEPARATOR);
}

module.exports = { Runexp: Runexp };
'use strict';

var FileReader = require('dw/io/FileReader');
var File = require('dw/io/File');
var Logger = require('dw/system/Logger');
var Transaction = require('dw/system/Transaction');
var Resource = require('dw/web/Resource');
var CSVStreamReader = require('dw/io/CSVStreamReader');
var OrderMgr = require('dw/order/OrderMgr');
var Status = require('dw/system/Status');

function Runimp(args) {
        var folderPath = args.Folder;
        var folder = new File(File.IMPEX + File.SEPARATOR + folderPath);
        var regex = args.FilePattern ? new RegExp(args.FilePattern) : /\S+.csv/;
        var files;
        if (!empty(folder.listFiles())) {
            files = folder.listFiles(function (file) {
                return regex.test(file.getName());
            });
            files.sort(sortFileName);
        }
        let filesCount = 0;
        let linesCount = 0;
        if (files) {
            files.slice(0, 19999).toArray().forEach(function (file) {
                var success = true;
                Logger.info('File processing8 : {0}', file.getName());
                var fileReader = new FileReader(file, 'UTF-8');
                var line = fileReader.readLine();
                var seperator = ';';
                if (line.indexOf(';') == -1) {
                    seperator = ';';
                }
                var headers = line.split(seperator);
                line = fileReader.readLine();
                while (line !== null) {
                    linesCount++;
                    try {
                        var value = line.split(seperator);
                        var orderNO = value[0];
                        var order = OrderMgr.getOrder(orderNO);
                        var abc =   order.custom.count_status.getValue();
                                 
                        Transaction.wrap(function () {
                            if (order) {
                                order.custom.status_new = value[2];
                                order.custom.kount_status = value[2];
                            }
                        });
                    } catch (error) {
                        Logger.error('Error occured in line :' + linesCount + ':' + error.message);
                        success = false;
                    }
                    line = fileReader.readLine();
                }
                filesCount++;
            });
            Logger.info('{0}/{1} processed file(s)', filesCount, files.size());
        } else {
            Logger.info('No file found');
        }
    if (!files || files.length === 0 || filesCount === files.length) {
        return new Status(Status.OK, 'OK');
    } else if (filesCount < files.length) {
        return new Status(Status.OK, 'WARN');
    }
    return new Status(Status.ERROR, 'ERROR');
    function sortFileName(file1, file2) {
        return file1.getName().localeCompare(file2.getName());
    }

}

module.exports = { Runimp: Runimp };




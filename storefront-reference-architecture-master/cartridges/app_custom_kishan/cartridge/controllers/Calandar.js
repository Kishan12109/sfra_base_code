/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
'use strict';
var server = require('server');
var Calendar = require('dw/util/Calendar');
var StringUtils = require('dw/util/StringUtils');

server.get('Show', function (req, res, next) {
    var today = new Calendar();
    var currentDate = today.getTime();
    var currentDateFormat = StringUtils.formatCalendar(new Calendar(currentDate));
    var months = today.get(Calendar.MONTH);
    var year = today.get(Calendar.YEAR);
    var dateString = months + ' ' + year;

    var currentDates = new Date();

    // Create a Calendar object with the current date
    var calendar = new Calendar(currentDates);

    // Get the month and year
    var month = StringUtils.formatCalendar(calendar, 'MMM');
    var date = StringUtils.formatCalendar(calendar, 'dd');

    // Print the month and year
    var formattedDate = month + ' ' + date;
    res.render('samplecalendar', {
        currentDateFormat: currentDateFormat,
        currentDate: currentDate,
        dateString: dateString,
        formattedDate: formattedDate
    });
    next();
});

module.exports = server.exports();

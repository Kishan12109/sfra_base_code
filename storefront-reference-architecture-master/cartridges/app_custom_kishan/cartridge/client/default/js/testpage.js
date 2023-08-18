/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
'use strict';


$(document).ready(function () {
    $('.js-lastupdates').on('click', function () {
        var url = $('.js-search-country').val();
        var country = $('.js-country').val();
        //$('.js-click-msg').text('The button was clicked');
        $.ajax({
            url: url,
            data: {
                country: country
            }
        }).done(function (data) {
            $('.js-click-msg').text(data.countryObj);

            //Remove the msg after 15 seconds
            setTimeout(function () {
                $('.js-click-msg').text('');
            }, 15000);
        });
    });

    // Pop up declaring a welcome message
    // eslint-disable-next-line no-alert
    alert('Welcome to Country Finder');
});

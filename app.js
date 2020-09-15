"use strict";

// window.alert("JS効いてる？");

$(function() {
    $('.is-toggleBtn').on( 'click', function() {
        $('.contents').find('.flex-container').toggleClass('add-style-flex');
    });
});
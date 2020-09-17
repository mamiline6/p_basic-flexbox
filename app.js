"use strict";

// window.alert("JS効いてる？");

$(function() {
    $('.is-toggleBtn').on( 'click', function() {
        $('.flex-container').toggleClass('add-container-flex');
    });
});
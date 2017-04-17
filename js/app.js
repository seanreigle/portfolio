'use strict';

$('.hamburger').click(function() {
  $(this).hide();
  $('.cross').show();
  $('.menu').slideToggle();
});

$('.cross').click(function() {
  $(this).hide();
  $('.hamburger').show();
  $('.menu').slideToggle();
});

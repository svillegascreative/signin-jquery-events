$(document).ready(function() {

  $('.signin').on('click', function() {
    $('.modal').fadeIn();
  });

  $('.modal').on('click', '.close', function() {
    $('.modal').fadeOut()
  });

  $('.modal').on('click', function() {
    $(this).fadeOut()
  });

  $('.submit').on('click', function(event) {
    event.stopPropagation();
    $('.getstarted>input').addClass('error');
  });

  $('.getstarted>input').on('click', function() {
    event.stopPropagation();
    $(this).removeClass('error');
  });

});

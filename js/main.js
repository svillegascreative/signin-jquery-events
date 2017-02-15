$(document).ready(function() {

  $('.signin').on('click', function() {
    $('.modal').fadeIn();
  });

  $('.modal').on('click', '.close', function() {
    $('.modal').fadeOut()
  });

  $('.submit').on('click', function() {
    $('.getstarted>input').addClass('error');
  });

  $('.getstarted>input').on('click', function() {
    $(this).removeClass('error');
  });

});

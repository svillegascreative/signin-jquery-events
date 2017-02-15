$(document).ready(function() {

  $('.signin').on('click', function() {
    $('.modal').fadeIn().css('display', 'block');
  });

  $('.modal').on('click', '.close', function() {
    $('.modal').fadeOut()
  });

  $('.submit').on('click', function() {
    $('.getstarted>input').addClass('error');
  });

});

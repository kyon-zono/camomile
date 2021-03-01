$(function() {
  /* ハンバーガーメニュー */
  $('.hamburger').click(function() {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
  });

  /* フェードイン */
  $(window).scroll(function() {
    $('.fadein').each(function() {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200) {
        $(this).addClass('scrollin');
      }
    });
  });

  /* アコーディオン */
  $('.faq-item').click(function() {
    var $answer = $(this).find('.answer');
    if ($answer.hasClass('open')) {
      $answer.removeClass('open');
      $answer.slideUp();
      $(this).find('span').attr('class', 'fas fa-plus');
    }
    else {
      $answer.addClass('open');
      $answer.slideDown();
      $(this).find('span').attr('class', 'fas fa-minus');
    }
  });

}); 
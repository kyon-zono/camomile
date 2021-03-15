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
  /* 自動スクロール機能(スマホ対応) */
  $('header a').click(function() {
    var id = $(this).attr('href');
    var scrollPosition = $(id).offset().top;
    $('html,body').animate({
      'scrollTop': scrollPosition
    }, 500);
  });

  /* box */
    var h3Height = $('h3').outerHeight();
    var boxTitlePosition = h3Height / 2 * -1 - 2; /* -1 はboxのborder分を計算に含めるため */
    $('.box-title').css('top', boxTitlePosition);
    var boxContentTop = h3Height / 2 - 2;
    $('.box-content').css('margin-top', boxContentTop);
  
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
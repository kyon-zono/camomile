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

    /* boxタイトル(h3)の高さを取得 */
    var h3Height = $('h3').outerHeight();
    /* boxタイトル(h3)の位置を枠線上に配置する数値を代入 */
    var boxTitlePosition = h3Height / 2 * -1 - 2; /* -1 はboxのborder分を計算に含めるため */
    /* sectionタイトルをborder上にする */
    $('.box-title').css('top', boxTitlePosition);
    /* ボックスの中身: h3底辺〜box底辺で上下中央寄せする */
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
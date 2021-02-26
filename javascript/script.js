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

  /* test-box */

    /* boxタイトル(h3)の高さを取得 */
    var h3Height = $('h3').outerHeight();
    /* boxタイトル(h3)の位置を枠線上に配置 */
    var boxTitlePosition = h3Height / 2 * -1 - 2; /* 後ろの -1 はboxのborder分を挿れるため */
    $('.box-content').css('top', boxTitlePosition);
    /* box-text を上下中央 */
    var boxText = h3Height/ 2;
    $('.box-text').css('margin-top', boxText);

    /* position: relative;に高さを与える */
      /* introduction */
      var boxHeight = $("#introduction").find('.box-content').outerHeight();
      $('#introduction').css('height', boxHeight);
      /* support */
      var boxHeight = $("#support").find('.box-content').outerHeight();
      $('#support').css('height', boxHeight);
      /* about */
      var boxHeight = $("#about").find('.box-content').outerHeight();
      $('#about').css('height', boxHeight);
      /* sns */
      var boxHeight = $("#sns").find('.box-content').outerHeight();
      $('#sns').css('height', boxHeight);
      /* faq */
      var boxHeight = $("#faq").find('.box-content').outerHeight();
      $('#faq').css('height', boxHeight);
      
  /* ここまで */
  

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
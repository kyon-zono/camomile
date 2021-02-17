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

  /* ページ内スクロール */
  $('#introduction-btn').click(function() {
    $('#introduction').scrollTop();
  });

}); 
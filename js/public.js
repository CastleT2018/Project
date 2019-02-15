$(function () {

  $("#top_banner").css({
    height: $(window).height()
  }).find("> div").imgLiquid();


  var _top_banner_ctrl_now = 2;
  $('#top_banner_ctrl_count').text($('#top_banner > div').length);
  //#top_banner_ctrl_count 顯示 #top_banner > div 長度(length)
  $('#top_banner_ctrl_now').text(_top_banner_ctrl_now);
  //#top_banner_ctrl_now


  $('#top_banner_next').click(function () {
    // console.error ('xxxx');
    var $tmp = $('#top_banner > div').first().clone(true); 
    //第一張複製
    $('#top_banner').append($tmp); 
    //複製後放置最後
    $('#top_banner > div').first().remove();
    //移除第一張

    _top_banner_ctrl_now = _top_banner_ctrl_now + 1;
    //變數_top_banner_ctrl_now + 1
    if (_top_banner_ctrl_now > $('#top_banner > div').length)
      //當_top_banner_ctrl_now > #top_banner > div 的長度(length)
      _top_banner_ctrl_now = 1
    //_top_banner_ctrl_now就等於1
    $('#top_banner_ctrl_now').text(_top_banner_ctrl_now);
    //#top_banner_ctrl_now 顯示 
  });


  $('#top_banner_prev').click(function () {
    // console.error ('xxxx');
    var $tmp = $('#top_banner > div').last().clone(true); 
    //第最後一張複製
    $('#top_banner').prepend($tmp); 
    //複製後放置最前面
    $('#top_banner > div').last().remove();
    //移除最後一張

    _top_banner_ctrl_now = _top_banner_ctrl_now - 1;
    //變數_top_banner_ctrl_now - 1
    if (_top_banner_ctrl_now < 1)
    //當_top_banner_ctrl_now < 1
      _top_banner_ctrl_now = $('#top_banner > div').length;
      //_top_banner_ctrl_now 等於 #top_banner > div 的長度(length)
    $('#top_banner_ctrl_now').text(_top_banner_ctrl_now);
    //#top_banner_ctrl_now 顯示
  }).click(); 
  //載入後先點擊1次（預設第1張）


  setTimeout(function () {
    $('#top_banner').addClass('transi');
  }, 1000); 
  //延遲class效果


});

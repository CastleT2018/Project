$(function () {
  
  $("#top_banner").css ({
    height: $(window).height ()
  }).find ("> div").imgLiquid ();

  $('#top_banner_next').click (function () {
    // console.error ('xxxx');
    var $tmp = $('#top_banner > div').first ().clone (true);//第一章複製
    $('#top_banner').append ($tmp);//複製後放置最後
    $('#top_banner > div').first ().remove ();
  });

  $('#top_banner_prev').click(function () {
    // console.error ('xxxx');
    var $tmp = $('#top_banner > div').last().clone(true);//第最後一章複製
    $('#top_banner').prepend($tmp);//複製後放置最前面
    $('#top_banner > div').last().remove();
  });

});

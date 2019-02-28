// // $(셀렉터).이벤트(function(){}); on해준이유는 섞일까봐
// $('#tabMenu li > a').on('click', function(){
//   console.log($(this));
//   var id = $(this).attr('href');
//   $('#tabMenu li').removeClass('on');
//   $(this).parent().addClass('on');
//
//   $("#tabCont li").removeClass('on');
//   $(id).addClass('on');
//
//   return false;
});

//siblings
$(this).parent().addClass('on').siblings().removeClass('on');
$(id).addClass('on').siblings().removeClass('on');

// $(function() {
//   $("#tabMenu li").click(function() {
//     var list = $(this).index();
//     $("#tabMenu li").removeClass("on");
//     $(this).addClass("on");
//
//     $("#tabCont > li").hide();
//     $("#tabCont > li").eq(list).show();
//   });
// });
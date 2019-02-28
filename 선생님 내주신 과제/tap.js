// 선생님이 짜주신 것
$(셀렉터).이벤트(function(){}); on해준이유는 섞일까봐
$('.tabMenu li > a').on('click', function(){
  console.log($(this));
  var id = $(this).attr('href');
  $('.tabMenu li').removeClass('on');
  $(this).parent().addClass('on');

  $(".tabCont li").removeClass('on');
  $(id).addClass('on');

  return false;
});

// 내가 만든 것 1

  // $('.tabMenu li > a').click(function() {
  //
  //   // var id = $(this).index();
  //
  //   $(this).removeClass('on');
  //   // $(this).addClass('on');
  //
  //   return false
  // });

// $('.tabMenu li > a').on('click', function(){
//     var id = $(this).parent().index()
//     console.log(id);
//     $(this).parent().siblings().removeClass('on');
//     $(this).parent().addClass('on');
//
//     $(".tabCont > li").hide();
//     $(".tabCont > li").eq(id).show();
//     return false
// });
//
//
// $('.tabMenu2 li > a').on('click', function(){
//     var id = $(this).parent().index()
//     console.log(id);
//     $(this).parent().siblings().removeClass('on');
//     $(this).parent().addClass('on');
//
//     $(".tabCont2 > li").hide();
//     $(".tabCont2 > li").eq(id).show();
//     return false
// });




$('.tabMenu li > a').on('click', function(){
  console.log($(this));
  // var id = $(this).attr('href');
  // $(this).parent().siblings().removeClass('on');
  // $(this).parent().addClass('on');
  //
  // $(id).siblings().removeClass('on');
  // $(id).addClass('on');

  return false;
});


//siblings
// $(this).parent().addClass('on').siblings().removeClass('on');
// $(id).addClass('on').siblings().removeClass('on');
// $(셀렉터).이벤트(function(){}); on해준이유는 섞일까봐
$('#tabMenu > li a').on('click', function(){
  $('#tabMenu li > a').removeClass('on');
  $(this).addClass('on');

  $("#tabMenu li > div").removeClass('on');
  $(this).next().addClass('on');
});

// $('#tabMenu < li a').on('click', function() {
//   $('#tabMenu li > a').removeClass('on');
//   $(this).addClass('on');

//   $("#tabMenu li > div").removeClass('on');
//   $(this).next().addClass('on');
// })


$('.tabMenu li > a').on('click', function(){
    var id = $(this).parent().index()
    console.log(id);
    $(this).parent().siblings().removeClass('on');
    $(this).parent().addClass('on');

    $(".tabCont > li").hide();
    $(".tabCont > li").eq(id).show();
    return false
});


$('.tabMenu2 li > a').on('click', function(){
    var id = $(this).parent().index()
    console.log(id);
    $(this).parent().siblings().removeClass('on');
    $(this).parent().addClass('on');

    $(".tabCont2 > li").hide();
    $(".tabCont2 > li").eq(id).show();
    return false
});
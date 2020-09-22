// #nav_sp
$(function () {
  var s;
  var i = $("#nav_trigger");
  i.on("click", function () {
    i.hasClass("active") ? (i.removeClass("active"),
    $("body").removeClass("active"),
    $("#nav_sp").stop().animate({
      opacity: 0
    }, 200, function () {
      $(this).css({
        visibility: "hidden",
        "z-index": "-1"
      })
    }), 
    window.scrollTo(0, s)) : (s = $(window).scrollTop(), 
                              
    $("#nav_sp").stop().css({
      visibility: "visible",
      "z-index": "100"
    }).animate({
      opacity: 1
    }, 200), i.addClass("active"), 
    
    $("body").addClass("active"), $("body").css({
      top: -1 * s
    }))
  })
});



// fv_parallax
$(document).ready(function () {
  var fv = $('.fv_sec');
  $(window).scroll(function () {
    fv.toggleClass('step1', $(this).scrollTop() > 10);
  });
});  



// 【PC only】
if(!navigator.userAgent.match(/(iPhone|iPod|Android)/)){
  // header
  $(function(){
    var pos = 0;
    var header = $('header');  
    $(window).on('scroll', function(){
      if($(this).scrollTop() < pos ){
        header.removeClass('hide');
      }else{
        header.addClass('hide');
      }
      pos = $(this).scrollTop();
    });
  });
}

// JS Accordion
// 【SP only】
if(navigator.userAgent.match(/(iPhone|iPod|Android)/)){
  $(function(){
    $('.acc_sp .acc-head').click(function(){
      $(this).next('.acc-body').slideToggle();
      $(this).toggleClass('open');
    });
  });
}


// 【tb only】
if(navigator.userAgent.match(/(iPad)/)){
    $("html").addClass("ipad");
}

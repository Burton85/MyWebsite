//navbar 下滑隱藏
$(window).scroll(function() {
  let winHeight = $(window).scrollTop();
  if (winHeight > 100) {
    $(".nav-top").animate(
      {
        top: "-100px"
      },
      5
    );
  } else {
    $(".nav-top").animate(
      {
        top: "0px"
      },
      5
    );
  }
});
//簡介卡片動畫
$(document).ready(function($) {
  $("ul.cards").on("click", function() {
    $(this).toggleClass("transition");
  });
  $("ul.card-stacks").on("click", function() {
    $(this).toggleClass("transition");
  });
  $("ul.cards-split").on("click", function() {
    $(this).toggleClass("transition");
  });
  $("ul.cards-split-delay").on("click", function() {
    $(this).toggleClass("transition");
  });
});

//一般呼叫
$(function() {
  AOS.init();
});
//自定參數呼叫
$(function() {
  AOS.init({
    offset: 200,
    easing: "ease-in-sine"
  });
});

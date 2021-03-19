$(document).ready(function () {
  $("#icon").click(function () {
    $("nav").toggleClass("show");
  });
  $(".cerita").click(function () {
    $("nav").toggleClass("show");
  });
  $(".kegiatan").click(function () {
    $("nav").toggleClass("show");
  });
});

$(window).scroll(function () {
  let wScroll = $(this).scrollTop();

  $(".jumbotron h1").css({
    transform: "translate(0px," + wScroll / 4 + "%)",
  });
});
$(window).scroll(function () {
  let wScroll = $(this).scrollTop();

  $(".jumbotron h3").css({
    transform: "translate(0px," + wScroll / 1.3 + "%)",
  });
});
$(window).scroll(function () {
  let wScroll = $(this).scrollTop();

  $(".jumbotron .button-hero").css({
    transform: "translate(0px," + wScroll / 1.3 + "%)",
  });
});

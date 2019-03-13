const $window = $(window);
const vHeight = window.innerHeight;

$window.on("scroll", function() {
  // console.log(vHeight);
  if ($window.scrollTop() > vHeight) {
    $(".nav").css("background-color", "#fff");
  }
  if ($window.scrollTop() < vHeight) {
    $(".nav").css("background-color", "transparent");
  }
});

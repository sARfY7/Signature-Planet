$(function() {
  var sideNavOut = false;
  $(".destination").on("click", function() {
    if (sideNavOut) {
      anime({
        targets: ".sn-logo .title-cover",
        translateX: "0",
        easing: "easeOutQuint"
      });
      anime({
        targets: ".side-nav",
        translateX: "-100%",
        easing: "easeOutQuint"
      });
      $(".slider").css("filter", "blur(0)");
      anime({
        targets: ".slider",
        translateX: "0",
        scale: "1",
        easing: "easeOutQuint"
      });
      $(".arrow-1").css("transform", "rotate(45deg)");
      $(".arrow-2").css("transform", "rotate(-45deg)");
      $(".scroll").css("opacity", "1");
      sideNavOut = false;
    } else {
      anime({
        targets: ".side-nav",
        translateX: ["-100%", "0"],
        easing: "easeOutQuint"
      });
      anime({
        targets: ".slider",
        translateX: "30%",
        filter: "blur(2px)",
        scale: "1.01",
        easing: "easeOutQuint"
      });
      anime({
        targets: ".sn-logo .title-cover",
        translateX: "100%",
        easing: "easeOutQuint",
        delay: 350
      });
      $(".arrow-1").css("transform", "rotate(135deg)");
      $(".arrow-2").css("transform", "rotate(-135deg)");
      $(".scroll").css("opacity", "0");
      sideNavOut = true;
    }
  });

  $(".destination").on("mouseover", function() {
    if (sideNavOut) {
      $(".arrow-1").css("transform", "rotate(135deg)");
      $(".arrow-2").css("transform", "rotate(-135deg)");
    } else {
      $(".arrow-1").css("transform", "rotate(45deg)");
      $(".arrow-2").css("transform", "rotate(-45deg)");
    }
  });
  $(".destination").on("mouseout", function() {
    if (sideNavOut) {
      $(".arrow-1").css("transform", "rotate(135deg)");
      $(".arrow-2").css("transform", "rotate(-135deg)");
    } else {
      $(".arrow-1").css("transform", "rotate(0)");
      $(".arrow-2").css("transform", "rotate(0)");
    }
  });
});

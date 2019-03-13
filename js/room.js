$(function() {
  $(".book-now").on("click", function(e) {
    e.preventDefault();
    anime({
      targets: ".booking-container",
      translateX: ["100%", "0"],
      easing: "easeOutQuint"
    });
    anime({
      targets: ".sidebar",
      translateX: "-100%",
      easing: "easeOutQuint"
    });
    anime({
      targets: ".body-content",
      translateX: "-40%",
      filter: "blur(2px)",
      easing: "easeOutQuint"
    });
    $("body").css("overflow-y", "hidden");
  });

  $(".close").on("click", function() {
    anime({
      targets: ".booking-container",
      translateX: "100%",
      easing: "easeOutQuint"
    });
    anime({
      targets: ".sidebar",
      translateX: "0",
      easing: "easeOutQuint"
    });
    $(".body-content").css("filter", "blur(0)");
    anime({
      targets: ".body-content",
      translateX: "0",
      easing: "easeOutQuint"
    });
    $("body").css("overflow-y", "auto");
  });

  // Rooms Slider
});

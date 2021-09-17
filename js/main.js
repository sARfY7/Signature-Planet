$(function() {
  $(window).on("scroll resize", function() {
    var $window = $(window);
    var vHeight = window.innerHeight;
    if ($window.scrollTop() > vHeight) {
      $(".sidebar").css("color", "#000");
      $(".v-line").css("background-color", "#000");
    } else {
      $(".sidebar").css("color", "#fff");
      $(".v-line").css("background-color", "#fff");
    }
  });

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

  $(".r-type").click(function(e) {
    e.preventDefault();
    console.log();
    if ($(this).children()[0].checked) {
      $(this).removeClass("checked");
      $(this).children()[0].checked = false;
    } else {
      $(this).addClass("checked");
      $(this).children()[0].checked = true;
    }
  });
});

$(function() {
  var sideNavOut = false;
  $(".menu-outer-container").on("click", function() {
    if (sideNavOut) {
      $("body").css("overflow-y", "auto");
      anime({
        targets: ".side-nav",
        translateX: "-100%",
        easing: "easeOutQuint"
      });
      $(".body-content").css("filter", "blur(0)");
      anime({
        targets: ".body-content",
        translateX: "0",
        scaleX: "1",
        easing: "easeOutQuint"
      });
      anime({
        targets: ".bar-1",
        rotateZ: "0deg",
        easing: "easeInQuad",
        duration: 400
      });
      anime({
        targets: ".bar-3",
        rotateZ: "0deg",
        easing: "easeInQuad",
        duration: 400
      });
      anime({
        targets: ".bar-2",
        translateX: "0%",
        easing: "easeInQuad",
        duration: 400
      });
      // $(".nav-slider-container").css("transform", "translateY(0)");
      $(".menu-text p").text("MENU");
      $(".arrow-1").css("transform", "rotate(45deg)");
      $(".arrow-2").css("transform", "rotate(-45deg)");
      $(".scroll").css("opacity", "1");
      sideNavOut = false;
    } else {
      $("body").css("overflow-y", "hidden");
      anime({
        targets: ".side-nav",
        translateX: ["-100%", "0"],
        easing: "easeOutQuint"
      });
      anime({
        targets: ".body-content",
        translateX: "30%",
        filter: "blur(2px)",
        scaleX: "1.01",
        easing: "easeOutQuint"
      });
      anime({
        targets: ".bar-1",
        rotateZ: "45deg",
        easing: "easeInQuad",
        duration: 400
      });
      anime({
        targets: ".bar-3",
        rotateZ: "-45deg",
        easing: "easeInQuad",
        duration: 400
      });
      anime({
        targets: ".bar-2",
        translateX: "-105%",
        easing: "easeInQuad",
        duration: 400
      });
      // $(".nav-slider-container").css("transform", "translateY(6%)");
      $(".menu-text p").text("CLOSE");
      $(".arrow-1").css("transform", "rotate(135deg)");
      $(".arrow-2").css("transform", "rotate(-135deg)");
      $(".scroll").css("opacity", "0");
      sideNavOut = true;
    }
  });

  $(window).on("scroll resize", function() {
    var $window = $(window);
    var vHeight = window.innerHeight;
    // console.log(window.innerHeight);
    if ($window.scrollTop() > vHeight) {
      // console.log($window.scrollTop());
      $(".sidebar").css("color", "#000");
      $(".arrow-1, .arrow-2").css("background-color", "#000");
      $(".v-line").css("background-color", "#000");
      $(".colored-logo").css("opacity", "1");
    } else {
      $(".sidebar").css("color", "#fff");
      $(".arrow-1, .arrow-2").css("background-color", "#fff");
      $(".v-line").css("background-color", "#fff");
      $(".colored-logo").css("opacity", "0");
    }

    // $(".menu").on("click", function() {
    //   if (sideNavOut) {
    //   } else {
    //     anime({
    //       targets: ".bar",
    //       translateX: ["0%", "-100%"],
    //       delay: "-=100"
    //     });
    //   }
    // });

    // if ($window.scrollTop() == 1128) {
    //   var tl = anime.timeline({
    //     easing: "easeOutQuint",
    //     duration: 750
    //   });
    //   tl.add({
    //     targets: ".cover-img-cover",
    //     translateX: ["-100%", "0"]
    //   });
    // }
  });

  // $(".more-info-btn").on("mouseover", function(e) {
  //   var element = this;
  //   var elementUnder = element.children[0];
  //   var elementText = element.children[1];
  //   var tlOver = anime.timeline({
  //     easing: "easeInQuad",
  //     duration: 200
  //   });

  //   tlOver
  //     .add({
  //       targets: [element, elementUnder],
  //       scaleX: ["1", "1.2"]
  //     })
  //     .add(
  //       {
  //         targets: elementText,
  //         translateX: ["0", "5%"]
  //       },
  //       "+=100"
  //     )
  //     .add({
  //       targets: elementUnder,
  //       translateY: ["96%", "0"]
  //     });
  // });

  // $(".more-info-btn").on("mouseout", function(e) {
  //   var element = this;
  //   var elementUnder = element.children[0];
  //   var elementText = element.children[1];
  //   var tlOut = anime.timeline({
  //     easing: "easeInQuad",
  //     duration: 200
  //   });

  //   tlOut
  //     .add({
  //       targets: elementUnder,
  //       translateY: ["0", "96%"]
  //     })
  //     .add({
  //       targets: elementText,
  //       translateX: ["5%", "0"]
  //     })
  //     .add(
  //       {
  //         targets: [element, elementUnder],
  //         scaleX: ["1.2", "1"]
  //       },
  //       "+=100"
  //     );
  // });

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
});

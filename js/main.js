$(window).on("load", function () {
  //preloader
  $(".pre-loader").fadeOut("500", function () {
    $("body").removeClass("overflow");
    $(this).remove();
  });

  if ($(".pre-loader").length == 0) {
    $("body").removeClass("overflow");
  }

  // animate on scroll

  AOS.init({
    duration: 700,
    mirror: true,
    once: true,
    disable: function () {
      var maxWidth = 992;
      return window.innerWidth < maxWidth;
    },
    easing: "ease-in-out",
  });

  //nava toggle
  $("#nava-icon").click(function (e) {
    $("#nava").toggleClass("nava-active");
    $("html").toggleClass("overflow");
  });

  $("#nava").click(function (e) {
    if (
      e.target.id == "nava" ||
      e.target.id == "close-nava" ||
      e.target.parentNode.id == "close-nava"
    ) {
      $(this).removeClass("nava-active");
      $("html").removeClass("overflow");
    }
  });

  $(".slide").on("click", function (e) {
    if (
      (e.target.classList.contains("drop") &&
        e.target.parentNode.classList.contains("slide")) ||
      e.target.classList.contains("slide")
    ) {
      e.stopPropagation();
      $(this).toggleClass("slide-active");
      $(this).children(".top-dropDown").slideToggle();
    }
  });

  function changeSlide() {
    if (window.innerWidth <= 992) {
      $(".sm-slide").removeClass("top-setting");
      $(".sm-slide").addClass("slide");
      $(".sm-slide .top-dropDown").css("display", "none");

      // add swipers
      $(".swiper-container-here").addClass("s-swiper-container");
      $(".swiper-container-here .swiper-wrapper-here").addClass(
        "swiper-wrapper"
      );
      $(".swiper-container-here .swiper-slide-here").addClass("swiper-slide");
    } else {
      $(".sm-slide").addClass("top-setting");
      $(".sm-slide").removeClass("slide");
      $(".sm-slide .top-dropDown").css("display", "flex");

      // remove swipers
      $(".swiper-container-here").removeClass("s-swiper-container");
      $(".swiper-container-here .swiper-wrapper-here").removeClass(
        "swiper-wrapper"
      );
      $(".swiper-container-here .swiper-slide-here").removeClass(
        "swiper-slide"
      );
    }
  }

  changeSlide();

  window.addEventListener("resize", changeSlide);

  // add footer collabse
  function addCollapse() {
    if (window.innerWidth <= 992) {
      $(".footer-list").attr("data-toggle", "collapse");
      $(".footer-list ul").addClass("collapse");
    } else {
      $(".footer-list").attr("data-toggle", "none");
      $(".footer-list ul").removeClass("collapse");
      $(".footer-list ul").css("height", "auto");
    }
  }

  addCollapse();
  window.addEventListener("resize", addCollapse);

  $(".footer-list").on("click", function (e) {
    if (window.innerWidth <= 992) {
      e.preventDefault();
      $(this).toggleClass("footer-list-active");
    }
  });

  var mySwiper = new Swiper("header .swiper-container", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    updateOnWindowResize: true,
    effect: "fade",
    autoplay: {
      delay: 5000,
    },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var mySwiper2 = new Swiper(".s-swiper-container", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    updateOnWindowResize: true,
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var mySwiper4 = new Swiper(".brands-swiper-container", {
    direction: "horizontal",
    loop: true,
    updateOnWindowResize: true,
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
    },

    breakpoints: {
      1200: {
        slidesPerView: 5,
      },
      992: {
        slidesPerView: 4,
      },
      576: {
        slidesPerView: 3,
      },
      0: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var mySwiper4 = new Swiper(".services-swiper-container", {
    direction: "horizontal",
    loop: true,
    updateOnWindowResize: true,
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
    },

    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  window.addEventListener("scroll", scrolled);

  function scrolled() {
    let up = document.getElementById("up");
    if (this.scrollY > 200) {
      up.classList.add("active-up");
    } else {
      up.classList.remove("active-up");
    }
  }

  startTicker("ticker-box", { speed: 7, delay: 1000 });
});

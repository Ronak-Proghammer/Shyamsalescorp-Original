window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });

  // Activate SimpleLightbox plugin for portfolio items
  new SimpleLightbox({
    elements: "#portfolio a.portfolio-box",
  });

  /*--------------*/

  // Main/Product image slider for product page
  $("#detail .main-img-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 300,
    lazyLoad: "ondemand",
    asNavFor: ".thumb-nav",
    prevArrow:
      '<div class="slick-prev"><i class="i-prev"></i><span class="sr-only sr-only-focusable">Previous</span></div>',
    nextArrow:
      '<div class="slick-next"><i class="i-next"></i><span class="sr-only sr-only-focusable">Next</span></div>',
  });
  // Thumbnail/alternates slider for product page
  $(".thumb-nav").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    centerPadding: "0px",
    asNavFor: ".main-img-slider",
    dots: false,
    centerMode: false,
    draggable: true,
    speed: 200,
    focusOnSelect: true,
    prevArrow:
      '<div class="slick-prev"><i class="i-prev"></i><span class="sr-only sr-only-focusable">Previous</span></div>',
    nextArrow:
      '<div class="slick-next"><i class="i-next"></i><span class="sr-only sr-only-focusable">Next</span></div>',
  });

  //keeps thumbnails active when changing main image, via mouse/touch drag/swipe
  $(".main-img-slider").on(
    "afterChange",
    function (event, slick, currentSlide, nextSlide) {
      //remove all active class
      $(".thumb-nav .slick-slide").removeClass("slick-current");
      //set active class for current slide
      $(".thumb-nav .slick-slide:not(.slick-cloned)")
        .eq(currentSlide)
        .addClass("slick-current");
    }
  );

  $(".brand-carousel").owlCarousel({
    loop: true,
    margin: 15,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});

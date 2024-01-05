$(document).ready(function () {
  var currentDir = $("a").css("direction");
  console.log(currentDir);

  if ($(".header-slider").length) {
    $(".header-slider").slick({
      arrows: true,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      // rtl: true,
      fade: true,
    });
  }

  if ($(".custom_input_file").length) {
    $("body").on("change", "#pills-home #inputfile", function (e) {
      let file_name = e.target.files[0].name;
      console.log(this.files[0].mozFullPath);
      console.log(e.target.files[0]);
      let catditem = $(this)
        .closest(".moda_images")
        .find(".card-img:last")
        .clone();
      // $(this).closest(".moda_images .images_file").append(catditem);
      $(catditem).insertBefore(".custom_input_file");
      $(catditem)
        .find(".img-parent img")
        .attr("src", `./assets/images/${file_name}`);
    });
  }

  if ($(".custom_input_file").length) {
    $("body").on("change", "#pills-profile #inputfile", function (e) {
      let file_name = e.target.files[0].name;
      console.log(this.files[0].mozFullPath);
      console.log(e.target.files[0]);
      let catditem = $(this)
        .closest(".moda_images")
        .find(".card-img:last")
        .clone();
      // $(this).closest(".moda_images .images_file").append(catditem);
      $(catditem).insertBefore(".custom_input_file");
      $(catditem)
        .find(".img-parent img")
        .attr("src", `./assets/images/${file_name}`);
    });
  }

  if ($(".custom-select").length) {
    $(".custom-select").niceSelect();
  }

  $(".custom-navbar #nav-icon1").click(function () {
    $(".side-nav").addClass("side-nav-open");
    $("html").addClass("side-active");
  });

  if ($(".side-nav").length) {
    $(".side-nav .close-nav").click(function () {
      $(".side-nav").removeClass("side-nav-open");
      $("html").removeClass("side-active");
    });
  }

  if ($(".bg-side-open").length) {
    $(".bg-side-open").on("click", function () {
      $(".side-nav").removeClass("side-nav-open");
      $("html").removeClass("side-active");
      $(".profile-sidebar").removeClass("profile-sidebar-active");
    });
  }

  if ($(".advanced-search-box").length) {
    $(".btn-advanced-search .btn-style").on("click", function (e) {
      e.preventDefault();
      $(this).parent().find(".advanced-search-box").slideToggle();
    });
  }

  if ($(".departments-slider").length) {
    $(".departments-slider").slick({
      slidesToShow: 9,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      speed: 300,
      infinite: true,
      autoplaySpeed: 5000,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 7,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    });
  }

  if ($("#today").length) {
    const ar = new Intl.DateTimeFormat("ar-TN-u-ca-islamic", {
      day: "numeric",
      month: "long",
      weekday: "long",
      year: "numeric",
    }).format(Date.now());

    const en = new Intl.DateTimeFormat("ar", {
      day: "numeric",
      month: "long",
      weekday: "long",
      year: "numeric",
    }).format(Date.now());

    document.getElementById("today").innerHTML = `${en} / ${ar}`;
  }

  if ($(".announsment-wrapper-filter").length) {
    $(".announsment-wrapper-filter li").on("click", function () {
      $(this).addClass("active").siblings().removeClass("active");
      var gridType = $(this).attr("data-type");
      if (gridType == "box") {
        var coulmns = $(this)
          .closest(".announsment-wrapper")
          .find(".announcment-cards-wrap .col-lg-12");

        $(coulmns).map((index, item) => {
          $(item).removeClass("col-lg-12");
          $(item).addClass("col-lg-6");
        });
      } else if (gridType == "grid") {
        var coulmns = $(this)
          .closest(".announsment-wrapper")
          .find(".announcment-cards-wrap .col-lg-6");

        $(coulmns).map((index, item) => {
          $(item).removeClass("col-lg-6");
          $(item).addClass("col-lg-12");
        });
      }
    });
  }

  if ($(".profile-left-data").length) {
    $(".profile-left-data .announsment-wrapper-filter li").on(
      "click",
      function () {
        $(this).addClass("active").siblings().removeClass("active");
        var gridType = $(this).attr("data-type");
        if (gridType == "box") {
          var coulmns = $(this)
            .closest(".profile-left-data")
            .find(".col-lg-12");

          $(coulmns).map((index, item) => {
            $(item).removeClass("col-lg-12");
            $(item).addClass("col-lg-6");
          });
        } else if (gridType == "grid") {
          var coulmns = $(this)
            .closest(".profile-left-data")
            .find(".col-lg-6");

          $(coulmns).map((index, item) => {
            $(item).removeClass("col-lg-6");
            $(item).addClass("col-lg-12");
          });
        }
      }
    );
  }

  AOS.init();

  $("html").addClass("splash-active");
});

$(window).on("load", function () {
  $(".splashscreen").addClass("splashscreen_none");
});

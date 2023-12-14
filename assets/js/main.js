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
    $("#inputfile").on("change", function (e) {
      let file_name = e.target.files[0].name;
      console.log(this.files[0].mozFullPath);
      console.log(e.target.files[0])
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


  AOS.init();

  $("html").addClass("splash-active");
});

$(window).on("load", function () {
  $(".splashscreen").addClass("splashscreen_none");
});

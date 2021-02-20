$(window).scroll(function() {
    if ($("#menu").offset().top > 0) {
        $("#menu").removeClass("bg-primario");
        $("#menu").addClass("bg-personalizado");
    } else {
        $("#menu").removeClass("bg-personalizado");
        $("#menu").addClass("bg-primario");
    }
  });
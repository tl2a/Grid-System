$(document).ready(function() {
  // Handler for .ready() called.
  var tab = 2;

  $(".wrapper").on("click", ".gd", function() {
    if (tab > 2) {
      console.log(tab);
      tab--;
      $(".wrapper").css("grid-template-columns", "repeat(" + tab + ", 1fr)");
      $(this).remove();
    }
  });

  $(".icon-plus").click(function() {
    if (tab < 5) {
      tab++;
      $(".wrapper").css("grid-template-columns", "repeat(" + tab + ", 1fr)");
      $(".wrapper").append('<div class="gd"></div>');
      console.log(tab);
    }
  });
});

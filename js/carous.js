function onResize() {
   var slide = {
      width: 708,
      height: 444
   }
 
   var original = {
      width: 780,
      height: 721,
   }
 
   var current = {
      width: $(".carousel img.display").width(),
      height: $(".carousel img.display").height()
   } 
 
   var s = 100 / original.width * current.width;
 
   $(".carousel-inner .item").each( function() {
      $(this).width( slide.width / 100 * s );
      $(this).height( slide.height / 100 * s );
 
      $(this).css('margin-top', 37 / 100 * s);
      $(this).css('margin-left', 38 / 100 * s);
   } );
 
   $(".carousel").css("min-height", current.height);
      $(".carousel-inner").css("height", current.height);
   }
}
 
$(document).ready( function() {
   $(window).resize( onResize );
}
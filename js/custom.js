	jQuery(document).ready(function(){
    $(".dropdown").hover(
        function() { $('.dropdown-menu', this).stop().fadeIn("fast");
        },
        function() { $('.dropdown-menu', this).stop().fadeOut("fast");
    });
});


$(document).ready(function(){
    $("#pane1").click(function(){
        $("#tabs1").addClass("active");
        $("#tabs2").removeClass("active");
        $("#tabs3").removeClass("active");
        $("#tabs4").removeClass("active");
        $("#tabs5").removeClass("active");
        $("#tabs6").removeClass("active");
    });
    $("#pane2").click(function(){
        $("#tabs2").addClass("active");
         $("#tabs1").removeClass("active");
        $("#tabs3").removeClass("active");
        $("#tabs4").removeClass("active");
        $("#tabs5").removeClass("active");
        $("#tabs6").removeClass("active");
    });
    $("#pane3").click(function(){
        $("#tabs3").addClass("active");
         $("#tabs2").removeClass("active");
        $("#tabs1").removeClass("active");
        $("#tabs4").removeClass("active");
        $("#tabs5").removeClass("active");
        $("#tabs6").removeClass("active");
    });
    $("#pane4").click(function(){
        $("#tabs4").addClass("active");
         $("#tabs2").removeClass("active");
        $("#tabs3").removeClass("active");
        $("#tabs1").removeClass("active");
        $("#tabs5").removeClass("active");
        $("#tabs6").removeClass("active");
    });
    $("#pane5").click(function(){
        $("#tabs5").addClass("active");
         $("#tabs2").removeClass("active");
        $("#tabs3").removeClass("active");
        $("#tabs4").removeClass("active");
        $("#tabs1").removeClass("active");
        $("#tabs6").removeClass("active");
    });
    $("#pane6").click(function(){
        $("#tabs6").addClass("active");
         $("#tabs2").removeClass("active");
        $("#tabs3").removeClass("active");
        $("#tabs4").removeClass("active");
        $("#tabs5").removeClass("active");
        $("#tabs1").removeClass("active");
    });
});

//mobile side menu
$(document).ready(function () {
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();      
    });

    function hamburger_cross() {

      if (isClosed == true) {          
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }
  
  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });  
});
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
        $("#tabs7").removeClass("active");
        $("#tabs8").removeClass("active");
        $("#tabs9").removeClass("active");
    });
    $("#pane2").click(function(){
        $("#tabs2").addClass("active");
         $("#tabs1").removeClass("active");
        $("#tabs3").removeClass("active");
        $("#tabs4").removeClass("active");
        $("#tabs5").removeClass("active");
        $("#tabs6").removeClass("active");
        $("#tabs7").removeClass("active");
        $("#tabs8").removeClass("active");
        $("#tabs9").removeClass("active");
    });
    $("#pane3").click(function(){
        $("#tabs3").addClass("active");
         $("#tabs2").removeClass("active");
        $("#tabs1").removeClass("active");
        $("#tabs4").removeClass("active");
        $("#tabs5").removeClass("active");
        $("#tabs6").removeClass("active");
        $("#tabs7").removeClass("active");
        $("#tabs8").removeClass("active");
        $("#tabs9").removeClass("active");
    });
    $("#pane4").click(function(){
        $("#tabs4").addClass("active");
         $("#tabs2").removeClass("active");
        $("#tabs3").removeClass("active");
        $("#tabs1").removeClass("active");
        $("#tabs5").removeClass("active");
        $("#tabs6").removeClass("active");
        $("#tabs7").removeClass("active");
        $("#tabs8").removeClass("active");
        $("#tabs9").removeClass("active");
    });
    $("#pane5").click(function(){
        $("#tabs5").addClass("active");
         $("#tabs2").removeClass("active");
        $("#tabs3").removeClass("active");
        $("#tabs4").removeClass("active");
        $("#tabs1").removeClass("active");
        $("#tabs6").removeClass("active");
        $("#tabs7").removeClass("active");
        $("#tabs8").removeClass("active");
        $("#tabs9").removeClass("active");
    });
    $("#pane6").click(function(){
        $("#tabs6").addClass("active");
         $("#tabs2").removeClass("active");
        $("#tabs3").removeClass("active");
        $("#tabs4").removeClass("active");
        $("#tabs5").removeClass("active");
        $("#tabs1").removeClass("active");
        $("#tabs7").removeClass("active");
        $("#tabs8").removeClass("active");
        $("#tabs9").removeClass("active");
    });
    $("#pane7").click(function(){
        $("#tabs7").addClass("active");
         $("#tabs2").removeClass("active");
        $("#tabs3").removeClass("active");
        $("#tabs4").removeClass("active");
        $("#tabs1").removeClass("active");
        $("#tabs5").removeClass("active");
        $("#tabs6").removeClass("active");
        $("#tabs8").removeClass("active");
        $("#tabs9").removeClass("active");
    });
    $("#pane8").click(function(){
        $("#tabs8").addClass("active");
         $("#tabs2").removeClass("active");
        $("#tabs3").removeClass("active");
        $("#tabs4").removeClass("active");
        $("#tabs1").removeClass("active");
        $("#tabs6").removeClass("active");
        $("#tabs7").removeClass("active");
        $("#tabs5").removeClass("active");
        $("#tabs9").removeClass("active");
    });
    $("#pane9").click(function(){
        $("#tabs9").addClass("active");
         $("#tabs2").removeClass("active");
        $("#tabs3").removeClass("active");
        $("#tabs4").removeClass("active");
        $("#tabs1").removeClass("active");
        $("#tabs6").removeClass("active");
        $("#tabs7").removeClass("active");
        $("#tabs8").removeClass("active");
        $("#tabs5").removeClass("active");
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


function readRequirement() {
 var x= document.getElementsByClassName("minus");
 x[0].style.display = "block";
 var y= document.getElementsByClassName("plus")
 y[0].style.display = "none";
}

function hideRequirement() {
 var x= document.getElementsByClassName("minus");
 x[0].style.display = "none";
 var y= document.getElementsByClassName("plus")
 y[0].style.display = "block";
}

function readRequirement1() {
 var x= document.getElementsByClassName("minus1");
 x[0].style.display = "block";
 var y= document.getElementsByClassName("plus1")
 y[0].style.display = "none";
}

function hideRequirement1() {
 var x= document.getElementsByClassName("minus1");
 x[0].style.display = "none";
 var y= document.getElementsByClassName("plus1")
 y[0].style.display = "block";
}

function readRequirement2() {
 var x= document.getElementsByClassName("minus2");
 x[0].style.display = "block";
 var y= document.getElementsByClassName("plus2")
 y[0].style.display = "none";
}

function hideRequirement2() {
 var x= document.getElementsByClassName("minus2");
 x[0].style.display = "none";
 var y= document.getElementsByClassName("plus2")
 y[0].style.display = "block";
}

function readRequirement3() {
 var x= document.getElementsByClassName("minus3");
 x[0].style.display = "block";
 var y= document.getElementsByClassName("plus3")
 y[0].style.display = "none";
}

function hideRequirement3() {
 var x= document.getElementsByClassName("minus3");
 x[0].style.display = "none";
 var y= document.getElementsByClassName("plus3")
 y[0].style.display = "block";
}



/***************************************popup form********************************/
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");
var btn5 = document.getElementById("myBtn5");
var btn6 = document.getElementById("myBtn6");
var btn7 = document.getElementById("myBtn7");
var btn8 = document.getElementById("myBtn8");
var btn9 = document.getElementById("myBtn9");
var btn10 = document.getElementById("myBtn10");
var btn11 = document.getElementById("myBtn11");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}
btn1.onclick = function() {
    modal.style.display = "block";
}
btn2.onclick = function() {
    modal.style.display = "block";
}
btn3.onclick = function() {
    modal.style.display = "block";
}
btn4.onclick = function() {
    modal.style.display = "block";
}
btn5.onclick = function() {
    modal.style.display = "block";
}
btn6.onclick = function() {
    modal.style.display = "block";
}
btn7.onclick = function() {
    modal.style.display = "block";
}
btn8.onclick = function() {
    modal.style.display = "block";
}
btn9.onclick = function() {
    modal.style.display = "block";
}
btn10.onclick = function() {
    modal.style.display = "block";
}
btn11.onclick = function() {
    modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




function readm() {
 var x= document.getElementsByClassName("read_less");
 x[0].style.display = "block";
 var y= document.getElementsByClassName("read_more")
 y[0].style.display = "none";
}

function readl() {
 var x= document.getElementsByClassName("read_less");
 x[0].style.display = "none";
 var y= document.getElementsByClassName("read_more")
 y[0].style.display = "block";
}

function readm1() {
 var x= document.getElementsByClassName("read_less1");
 x[0].style.display = "block";
 var y= document.getElementsByClassName("read_more1")
 y[0].style.display = "none";
}

function readl1() {
 var x= document.getElementsByClassName("read_less1");
 x[0].style.display = "none";
 var y= document.getElementsByClassName("read_more1")
 y[0].style.display = "block";
}

function readm2() {
 var x= document.getElementsByClassName("read_less2");
 x[0].style.display = "block";
 var y= document.getElementsByClassName("read_more2")
 y[0].style.display = "none";
}

function readl2() {
 var x= document.getElementsByClassName("read_less2");
 x[0].style.display = "none";
 var y= document.getElementsByClassName("read_more2")
 y[0].style.display = "block";
}
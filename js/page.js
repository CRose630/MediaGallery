function navToggle() {
  var x = document.getElementById("main-nav");
    if (x.className === "topnav") {
      x.className += " responsive";
    }
  else {
    x.className = "topnav";
  }
}

//slideshow function

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

$(".button").on("click", function() { // when item with class of button is clicked, fire function
  var modal = $(this).data("modal"); // sets modal var equal to data attribute
  $(modal).show(); // opens up modal (much code hidden here by jQuery)
});
$(".modal").on("click", function(e) { // sets up click function
  var className = e.target.className; // var className set to event target
  if(className === "modal" || className === "close"){ // if conditions are met...
    $(this).closest(".modal").hide(); // then hide the modal
  } // closes if-statement
});

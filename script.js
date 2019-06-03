var slideIndex = 1;

showSlides(slideIndex);

function swipeSound(){
  var swipe = document.getElementById("swipe");
  swipe.play();
  swipe.currentTime = 0;
}
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
  var slides = document.getElementsByClassName("mySlides");
  var character = document.getElementsByClassName("character-container");
  let randomAngle= Math.round(Math.random() * 20 - 10);
  let characterAngle= Math.round(Math.random() * 10 - 5);
  let picture = document.getElementsByClassName("character-picture");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  slides[slideIndex-1].style.display = "block";

  for(var i=0, len=picture.length; i<len; i++)
    {
        picture[i].style["transform"] = "rotate(" + characterAngle + "deg)";;
    }
    for(var i=0, len=character.length; i<len; i++)
    {
        character[i].style["transform"] = "rotate(" + characterAngle + "deg)";;
    }
}
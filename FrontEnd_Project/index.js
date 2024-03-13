window.onscroll = function(){fixedHeader()};
var header = document.getElementsByClassName("header");
var sticky = header.offsetTop;

function fixedHeader(){
    if (window.scrollY > sticky) {
        header.classList.add("sticky");
    }else{
        header.classList.remove("sticky");
    }
}


var slideIndex = 0;
showSlides();
var slides,dots;

function showSlides() {
    var i;
    slides = document.getElementsByClassName("banner-slides");
    dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000); 
}

function plusSlides(position) {
  slideIndex +=position;
  if (slideIndex> slides.length) {slideIndex = 1}
  else if(slideIndex<1){slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function currentSlide(index) {
  if (index> slides.length) {index = 1}
  else if(index<1){index = slides.length}
  for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[index-1].style.display = "block";  
  dots[index-1].className += " active";
}

const prevCategorybtn = document.querySelector(".prev-category-btn");
const nextCategorybtn = document.querySelector(".next-category-btn");


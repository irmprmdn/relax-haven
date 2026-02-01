"use strict";

const slider = document.querySelector(".imageSlider");
const slides = slider.querySelector(".sliderTools");
const images = slides.querySelectorAll("img");

let currentIndex = 0;

function slideNext() {
  const slideWidth = slider.clientWidth;
  currentIndex = (currentIndex + 1) % images.length;
  slides.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}

setInterval(slideNext, 5000);

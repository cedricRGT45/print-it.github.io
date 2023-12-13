const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
let index = 0;

const imgSlide = document.querySelector(".slider-img");
const nextButton = document.querySelector(".arrow_right");
const prevButton = document.querySelector(".arrow_left");
const imgTarget = `assets/images/slideshow/`;
const dotContainer = document.querySelector("#dots");
const dots = document.querySelector(".dot");
const slider = document.getElementById("#slider");
//Image slide-in

function ChangeSlide() {
  index++;
  if (index < 0) index = slides.length; // Allows to change slide
  if (index > slides.length - 1) index = 0; //Allows the slider to loop
  imgSlide.src = imgTarget + slides[index].image;

  //Allows to change the text according to the slides variable

  const tagLine = slides[index].tagLine; //Select the tag according to the slide
  document.querySelector("p").innerHTML = tagLine;
}

//creating dot elements

slides.forEach((slide, index) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (index === 0) {
    dot.classList.add("dot_selected");
  }
  dotContainer.appendChild(dot);
});

nextButton.addEventListener("click", (event) => {
  ChangeSlide(1);
});

prevButton.addEventListener("click", (event) => {
  ChangeSlide(-1);
});

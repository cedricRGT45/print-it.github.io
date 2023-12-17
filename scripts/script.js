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
const slider = document.getElementById("slider");

// Function to change slide
function ChangeSlide(direction) {
  index += direction;
  if (index < 0) index = slides.length - 1; // Allows to change slide
  if (index > slides.length - 1) index = 0; // Allows the slider to loop

  imgSlide.src = imgTarget + slides[index].image;
  const tagLine = slides[index].tagLine;

  // Create or get the title element
  let title = document.getElementById("titleContent");

  if (!title) {
    title = document.createElement("p");
    title.setAttribute("id", "titleContent");
    slider.appendChild(title);
  }

  // Update the content of the title
  title.innerHTML = tagLine;
}

// Create or get the title element initially
let title = document.getElementById("titleContent");

if (!title) {
  title = document.createElement("p");
  title.setAttribute("id", "titleContent");
  slider.appendChild(title);
}

// Initial update of the title content
title.innerHTML = slides[index].tagLine;

// Create dot elements
slides.forEach((slide, i) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (i === 0) {
    dot.classList.add("dot_selected");
  }
  dotContainer.appendChild(dot);

  // add a click event to the dot
  dot.addEventListener("click", () => {
    ChangeSlideToIndex(i);
  });
});

// Function to update dots
function updateDots(index) {
  const allDots = document.querySelectorAll(".dot");
  allDots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}

//*******To link the dot to the slide*******//

// Function to change slide to a specific index
function ChangeSlideToIndex(newIndex) {
  // upDating the slide index
  index = newIndex;

  // Change slide on a click
  imgSlide.src = imgTarget + slides[index].image;
  const tagLine = slides[index].tagLine;
  document.querySelector("#titleContent").innerHTML = tagLine;

  // Updating the dot's class to dot_selected
  updateDots(index);
}

// Event listeners for next and previous buttons

nextButton.addEventListener("click", (event) => {
  ChangeSlide(1);
  updateDots(index);
});

prevButton.addEventListener("click", (event) => {
  ChangeSlide(-1);
  updateDots(index);
});

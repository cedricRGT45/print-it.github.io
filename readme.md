<picture>
<source srcset="assets/images/logo.png">
 <img alt="Logo de print-it" src="assets/images/logo.png">
</picture>

# Print It Carousel Project - Readme

## Table of Contents

1. [Project Context](#project-context)
2. [Project Steps](#project-steps)
    - [Step 1: Update HTML Code](#step-1-update-html-code)
    - [Step 2: Add Event Listeners to Arrows](#step-2-add-event-listeners-to-arrows)
    - [Step 3: Add Bullet Points to the Slider](#step-3-add-bullet-points-to-the-slider)
    - [Step 4: Modify Slide on Button Click](#step-4-modify-slide-on-button-click)
    - [Step 5: Implement Infinite Scrolling](#step-5-implement-infinite-scrolling)
    - [Explanation of JavaScript Code](#explanation-of-javascript-code)
        - [1. Declaration of Slides and Initialization of Index](#1-declaration-of-slides-and-initialization-of-index)
        - [2. Selection of DOM Elements](#2-selection-of-dom-elements)
        - [3. Function to Change Slide](#3-function-to-change-slide)
        - [4. Creation of Title Element](#4-creation-of-title-element)
        - [5. Initialization of Title on Page Load](#5-initialization-of-title-on-page-load)
        - [6. Creation of Bullet Points](#6-creation-of-bullet-points)
        - [7. Function to Update Bullet Points](#7-function-to-update-bullet-points)
        - [8. Event Handling for Next/Previous Buttons](#8-event-handling-for-nextprevious-buttons)


Visit the live version here: [GitHub Pages](https://cedricrgt45.github.io/print-it.github.io/)

---

## Project Context

As a freelance front-end developer, you've landed a contract to enhance the static website of the family-owned printing shop, "Print It." Lucien Gerodo, the director, has provided instructions to create an interactive carousel. This project is designed to guide you through JavaScript step by step.

## Project Steps

### Step 1: Update HTML Code

- Analyze the existing HTML and CSS code.
- Add arrow images (`arrow_left.png` and `arrow_right.png`) to enable carousel navigation.
- Refer to the chapter "Explore other layout techniques" in the course "Build your website with HTML5 and CSS3" for guidance.

### Step 2: Add Event Listeners to Arrows

- Add event listeners to the arrows to handle image changes.
- Test event listeners with `console.log` or `alert`.
- Ensure differentiation between clicks on the left and right arrows.
- Refer to the chapters "Retrieve an element from a web page" and "Modify an element of a web page" in the course "Learn to program with JavaScript" for assistance.

### Step 3: Add Bullet Points to the Slider

- Add bullet points at the bottom of the slider, one for each image.
- Differentiate the bullet point for the currently viewed slide using a specific class.
- Use the MDN documentation on arrays to count the number of elements in the "slides" array in the `script.js` file.
- Consult the chapter "Modify an element of a web page" in the course "Learn to program with JavaScript."

### Step 4: Modify Slide on Button Click

- On clicking the right arrow, change the active bullet point, image, and corresponding text.
- On clicking the left arrow, make similar changes for the previous elements.
- Build the path for the new image carefully.
- Use the `innerHTML` property to insert the slide's tagline text.
- Work with array indices.
- Refer to the chapter "Modify an element of a web page" in the course "Learn to program with Javascript."

### Step 5: Implement Infinite Scrolling

- Add conditions to manage infinite scrolling.
- If on the last image and clicking right, display the first image; the selected point is the first.
- If on the first image and clicking left, display the last image; the selected point is the last.
- In all cases, update the text to match the shown image.
- Consult the chapter "Control code with conditions" in the course "Learn to program with Javascript."

### Explanation of JavaScript Code

#### 1. Declaration of Slides and Initialization of Index

```javascript
const slides = [
  // ... (array of objects representing slides)
];

let index = 0;
```

**Explanation:** The variable `slides` is an array of objects, each representing a slide with an image and an associated tagline. The index is initialized to 0 to point to the first slide.

#### 2. Selection of DOM Elements

```javascript
const imgSlide = document.querySelector(".slider-img");
const nextButton = document.querySelector(".arrow_right");
const prevButton = document.querySelector(".arrow_left");
const imgTarget = "assets/images/slideshow/";
const dotContainer = document.querySelector("#dots");
const slider = document.getElementById("slider");
```

**Explanation:** These lines of code select HTML elements using class or ID selectors. They represent the carousel image, next/previous buttons, image path, bullet container, and the main slider container.

#### 3. Function to Change Slide

```javascript
function ChangeSlide(direction) {
  // ...
}
```

**Explanation:** This function takes the direction of slide change (1 for next, -1 for previous) as a parameter and updates the index accordingly. It manages image changes and updates the slide's title.

#### 4. Creation of Title Element

```javascript
let title = document.getElementById("titleContent");
title = document.createElement("p");
title.setAttribute("id", "titleContent");
slider.appendChild(title);
```

**Explanation:** A paragraph element (<p>) is created and added as a child of the slider element. This title element represents the slide's text.

#### 5. Initialization of Title on Page Load

```javascript
title.innerHTML = slides[index].tagLine;
```

**Explanation:** The text of the first slide is set as the initial content of the title element.

#### 6. Creation of Bullet Points

```javascript
slides.forEach((slide, i) => {
  // ...
});
```

**Explanation:** A forEach loop iterates over each slide, creating a bullet point element (<span>) for each slide. The points are added to the dotContainer and associated with a click event.

#### 7. Function to Update Bullet Points

```javascript
function updateDots(index) {
  // ...
}
```

**Explanation:** This function updates the class of bullet point elements to reflect the currently selected slide.

#### 8. Event Handling for Next/Previous Buttons

```javascript
nextButton.addEventListener("click", () => {
  ChangeSlide(1);
  updateDots(index);
});

prevButton.addEventListener("click", () => {
  ChangeSlide(-1);
  updateDots(index);
});
```

**Explanation:** Event listeners are added to the next/previous buttons, triggering the corresponding slide change and updating the bullet points.

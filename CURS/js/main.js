// Rating
let stars = document.querySelectorAll(".header__star");
let output = document.getElementById("output");
let selectedRating = 0;

stars.forEach((star, index) => {
  star.addEventListener("mousemove", (e) => {
    const rect = star.getBoundingClientRect();
    const isHalf = e.clientX - rect.left < rect.width / 2;
    const rating = index + (isHalf ? 0.5 : 1);
    updateStars(rating);
    output.innerHTML = `${rating}/5 <br><span>Rating</span>`;
  });

  star.addEventListener("mouseleave", () => {
    updateStars(selectedRating);
    output.innerHTML = `${selectedRating}/5 <br><span>Rating</span>`;
  });

  star.addEventListener("click", (e) => {
    const rect = star.getBoundingClientRect();
    const isHalf = e.clientX - rect.left < rect.width / 2;
    selectedRating = index + (isHalf ? 0.5 : 1);
    updateStars(selectedRating);
    output.innerHTML = `${selectedRating}/5 <br><span>Rating</span>`;
  });
});

function updateStars(rating) {
  stars.forEach((star, index) => {
    star.classList.remove("active", "half");

    if (rating >= index + 1) {
      star.classList.add("active");
    } else if (rating >= index + 0.5) {
      star.classList.add("half");
    }
  });
}

// ------------------------------------------------------
// Slider
let slides = document.querySelectorAll(".reviews");
let arrowLeft = document.getElementById("arrow-left");
let arrowRight = document.getElementById("arrow-right");
let bottom = document.getElementById("bottom");
let paginationLine = [];
let currentSlideIndex = 0;
let direction = "next";

const totalPairs = Math.floor(slides.length / 2);

function createPaginationLine() {
  let div = document.createElement("div");
  div.className = "pagination__line";
  bottom.appendChild(div);
  paginationLine.push(div);
}

function addPagination() {
  for (let i = 0; i < totalPairs; i++) {
    createPaginationLine();
  }
  paginationLine[0].classList.add("active");
  paginationLine.forEach((line, index) => {
    line.addEventListener(
      "click",
      () => {
        direction = index > currentSlideIndex ? "next" : "previous";
        changeSlide(index);
      },
      { passive: true }
    );
  });
}

function addActiveClass() {
  paginationLine[currentSlideIndex].classList.add("active");
}

function removeActiveClass() {
  paginationLine[currentSlideIndex].classList.remove("active");
}

function showSlide() {
  let startIndex = currentSlideIndex * 2;
  for (let i = 0; i < 2; i++) {
    let slideIndex = startIndex + i;
    if (slideIndex < slides.length) {
      slides[slideIndex].classList.add("slide");
      slides[slideIndex].classList.add(direction);
      slides[slideIndex].offsetHeight;
      slides[slideIndex].classList.add("active-slide");
    }
  }
}

function hideSlide() {
  slides.forEach((slide) => {
    slide.classList.remove("slide", "active-slide", "next", "previous");
  });
}

function changeSlide(slideIndex) {
  hideSlide();
  removeActiveClass();
  currentSlideIndex = slideIndex;
  addActiveClass();
  showSlide();
}

function nextSlide() {
  direction = "next";
  let newSlideIndex = currentSlideIndex + 1;
  if (newSlideIndex >= totalPairs) {
    newSlideIndex = 0;
  }
  changeSlide(newSlideIndex);
}

function previousSlide() {
  direction = "previous";
  let newSlideIndex = currentSlideIndex - 1;
  if (newSlideIndex < 0) {
    newSlideIndex = totalPairs - 1;
  }
  changeSlide(newSlideIndex);
}

addPagination();
arrowLeft.addEventListener("click", previousSlide, { passive: true });
arrowRight.addEventListener("click", nextSlide, { passive: true });

// ----------------- SWIPE pentru mobile -----------------
let startX = 0;
let endX = 0;

function handleTouchStart(e) {
  startX = e.touches[0].clientX;
}

function handleTouchMove(e) {
  endX = e.touches[0].clientX;
}

function handleTouchEnd() {
  if (startX - endX > 50) {
    nextSlide(); // swipe left
  } else if (endX - startX > 50) {
    previousSlide(); // swipe right
  }
}

function enableSwipe() {
  slides.forEach((slide) => {
    slide.addEventListener("touchstart", handleTouchStart, { passive: true });
    slide.addEventListener("touchmove", handleTouchMove, { passive: true });
    slide.addEventListener("touchend", handleTouchEnd, { passive: true });
  });
}

function disableSwipe() {
  slides.forEach((slide) => {
    slide.removeEventListener("touchstart", handleTouchStart);
    slide.removeEventListener("touchmove", handleTouchMove);
    slide.removeEventListener("touchend", handleTouchEnd);
  });
}

function checkScreenWidth() {
  if (window.innerWidth <= 768) {
    enableSwipe();
  } else {
    disableSwipe();
  }
}

// rulează la încărcare și la resize
checkScreenWidth();
window.addEventListener("resize", checkScreenWidth);

// -------------------------------------------
// Acordeon
let acc = document.getElementsByClassName("accordion__header");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("actives");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
// ---------------------------------------------
// Select Service
const service = document.getElementById("selectService");

service.addEventListener("mousedown", () => {
  const savedValue = service.value;
  service.value = "";
  setTimeout(() => {
    service.value = savedValue;
  }, 0);
});
// ----------------------------------------
// Burger
const burger = document.querySelector(".burger");
const menu = document.querySelector(".header__top");
const overlay = document.querySelector(".overlay");

burger.addEventListener("click", function (e) {
  e.preventDefault();
  burger.classList.toggle("active");
  menu.classList.toggle("header__top--open");
  overlay.classList.toggle("overlay--show");
});

overlay.addEventListener("click", function () {
  burger.classList.remove("active");
  menu.classList.remove("header__top--open");
  overlay.classList.remove("overlay--show");
});

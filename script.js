const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const captionText = document.getElementById("popup-caption");
const closeBtn = document.querySelector(".popup-close");

document.querySelectorAll(".popup-img").forEach(img => {
    img.addEventListener("click", () => {
        popup.style.display = "block";
        popupImg.src = img.src;
        captionText.innerHTML = img.nextElementSibling.textContent;
    });
});

closeBtn.onclick = () => {
    popup.style.display = "none";
}

popup.onclick = (e) => {
    if (e.target === popup) popup.style.display = "none";
}

//Slider
const prevBtn = document.querySelector('.arrow-left');
const nextBtn = document.querySelector('.arrow-right');
const slides = document.querySelectorAll('.review-one');

function slideEffect(direction = 'next') {
    slides.forEach(slide => {
        slide.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
        slide.style.opacity = '0';
        slide.style.transform = direction === 'next' ? 'translateX(50px)' : 'translateX(-50px)';
    });

    setTimeout(() => {
        slides.forEach(slide => {
            slide.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
            slide.style.opacity = '1';
            slide.style.transform = 'translateX(0)';
        });
    }, 800);
}

nextBtn.addEventListener('click', () => slideEffect('next'));
prevBtn.addEventListener('click', () => slideEffect('prev'));






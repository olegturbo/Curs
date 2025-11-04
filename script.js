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
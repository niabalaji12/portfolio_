const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

document.addEventListener("DOMContentLoaded", () => {
    scrollToSlide(currentSlide);
});

window.addEventListener("wheel", (event) => {
    if (event.deltaY > 0) {
        // Scrolling down
        currentSlide++;
    } else {
        // Scrolling up
        currentSlide--;
    }

    if (currentSlide < 0) {
        currentSlide = 0;
    } else if (currentSlide >= slides.length) {
        currentSlide = slides.length - 1;
    }

    scrollToSlide(currentSlide);
});

function scrollToSlide(index) {
    const translateY = `translateY(-${index * 100}vh)`;
    slides.forEach((slide) => {
        slide.style.transform = translateY;
    });
}

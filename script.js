let slideIndex = 1;

showSlide(slideIndex);

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    let i;
    const slides = document.getElementsByClassName("slide");
    const buttons = document.getElementsByClassName("nav-button");
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = "#333";
    }
    slides[slideIndex - 1].style.display = "block";
    buttons[slideIndex - 1].style.backgroundColor = "#f1f1f1";
}

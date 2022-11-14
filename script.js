const slides = document.querySelectorAll('.slide'),
    slider = document.querySelector('.slider'),
    nextbtn = document.querySelector('.nextbtn'),
    prevbtn = document.querySelector('.prevbtn'),
    slideIcons = document.querySelectorAll('.slide-icon');
let slideNum = 0;

// next button 
nextbtn.addEventListener('click', () => {

    slides[slideNum].classList.remove('active');
    slideIcons[slideNum].classList.remove('active');

    slideNum++;

    if (slideNum > (slides.length - 1)) {
        slideNum = 0;
    }

    slides[slideNum].classList.add('active');
    slideIcons[slideNum].classList.add('active');
});

// previous button 
prevbtn.addEventListener('click', () => {
    slides[slideNum].classList.remove('active');
    slideIcons[slideNum].classList.remove('active');

    slideNum--;

    if (slideNum < 0) {
        slideNum = slides.length - 1;
    }

    slides[slideNum].classList.add('active');
    slideIcons[slideNum].classList.add('active');
});

// autoplay
let autoplay = () => {
    playSlider = setInterval(function () {
        slides[slideNum].classList.remove('active');
        slideIcons[slideNum].classList.remove('active');

        slideNum++;

        if (slideNum > (slides.length - 1)) {
            slideNum = 0;
        }

        slides[slideNum].classList.add('active');
        slideIcons[slideNum].classList.add('active');
    }, 2000);
}

autoplay();

// stop autoplay
slider.addEventListener('mouseenter', () => {
    clearInterval(playSlider);
});

// start autoplay
slider.addEventListener('mouseleave', () => {
    autoplay();
});
const slides = document.querySelectorAll('.carousel-item');
let currentSlide = 0;

document.getElementById('nextBtn').addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
    updateCarouselPosition();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    updateCarouselPosition();
});

function updateCarouselPosition() {
    const offset = -currentSlide * 100; 
    document.querySelector('.carousel-slides').style.transform = `translateX(${offset}%)`;
}

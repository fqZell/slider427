const slider = document.querySelector('.slider')
const slides = document.querySelectorAll('.slide')
const prevBtn = document.querySelector('.prevBtn')
const nextBtn = document.querySelector('.nextBtn')
let currentIndex = 0

function showSlide(index) {
    const offset = -100 * index
    slider.style.transform = `translateX(${offset}%)`
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length
    showSlide(currentIndex)
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length 
    showSlide(currentIndex)
}

nextBtn.addEventListener('click', nextSlide)
prevBtn.addEventListener('click', prevSlide)

showSlide(currentIndex)
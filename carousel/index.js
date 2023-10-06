const buttons = document.querySelectorAll('[data-carousel-btn]')
const dots = document.querySelector('.dots')
const slides = document.querySelector('.slides')

function updateSlideAndDotUI(newIndex) {
    const totalSlides = [...slides.children].length
    const activeDot = document.querySelector('[data-activedot]')
    const activeSlide = document.querySelector('[data-active]')
    if (newIndex < 0) {
        newIndex = totalSlides - 1
    } else if (newIndex >= totalSlides) {
        newIndex = 0
    }
    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active

    dots.children[newIndex].dataset.activedot = true
    delete activeDot.dataset.activedot
}

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        let offset = btn.dataset.carouselBtn === 'next' ? 1 : -1;
        const slides = btn.closest('.carousel').querySelector('.slides')
        const activeSlide = document.querySelector('[data-active]')
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        updateSlideAndDotUI(newIndex)
    })
})


Array.from(dots.children).forEach((dot, index) => {
    dot.addEventListener('click', () => {
        const activeSlide = document.querySelector('[data-active]')
        const activeDot = document.querySelector('[data-activedot]')
        const activeDotIndex = Array.from(dots.children).indexOf(activeDot)
        if (activeDotIndex === index) return;
        updateSlideAndDotUI(index)
    })
})
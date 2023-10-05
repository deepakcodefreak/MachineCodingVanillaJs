const buttons = document.querySelectorAll('[data-carousel-btn]')

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        let offset = btn.dataset.carouselBtn === 'next' ? 1 : -1;
        const slides = btn.closest('.carousel').querySelector('.slides')
        const totalSlides = [...slides.children].length
        const activeSlide = document.querySelector('[data-active]')
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) {
            newIndex = totalSlides - 1
        } else if (newIndex >= totalSlides) {
            newIndex = 0
        }

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active

    })
})
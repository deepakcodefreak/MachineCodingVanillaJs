const stars = document.querySelectorAll('.star')

stars.forEach((star, i) => {
    star.addEventListener('click', () => {
        stars.forEach((star, j) => {
            const icon = stars[j].querySelector('i')
            if (j <= i) {
                icon.classList.remove('fa-regular')
                icon.classList.add('fa-solid')
            } else {
                icon.classList.remove('fa-solid')
                icon.classList.add('fa-regular')
            }

        })
    })
})
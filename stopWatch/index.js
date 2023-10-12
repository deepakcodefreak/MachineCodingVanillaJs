let [milisecs, secs, mins, hrs] = [0, 0, 0, 0]
const time = document.querySelector('.time')
const startBtn = document.querySelector('.start')
const pauseBtn = document.querySelector('.pause')
const resetBtn = document.querySelector('.reset')

let timerInterval = null;

startBtn.addEventListener('click', () => {
    if (timerInterval !== null) {
        clearInterval(timerInterval)
        timerInterval = null
    }

    timerInterval = setInterval(() => {
        displayTime()
    }, 10);
})

pauseBtn.addEventListener('click', () => {
    clearInterval(timerInterval)
})


resetBtn.addEventListener('click', () => {
    clearInterval(timerInterval)
    milisecs = 0;
    secs = 0
    mins = 0
    hrs = 0
    time.innerHTML = '00 : 00 : 00 : 000'
})


function displayTime() {
    milisecs += 10;

    if (milisecs >= 1000) {
        milisecs = 0;
        secs += 1
    }

    if (secs >= 60) {
        secs = 0;
        mins += 1
    }

    if (mins >= 60) {
        mins = 0;
        hrs += 1
    }

    let h = hrs < 10 ? `0${hrs}` : hrs
    let m = mins < 10 ? `0${mins}` : mins
    let s = secs < 10 ? `0${secs}` : secs
    let ms = milisecs < 100 ? `0${milisecs}` : milisecs < 10 ? `00${milisecs}` : milisecs

    time.innerHTML = `${h} : ${m} : ${s} : ${ms}`

}
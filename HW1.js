const day = document.getElementById("day");

const btnEnter = document.querySelector("button")

console.log(day)

const firstDayWage = 100000;

const result = document.getElementById("result");

btnEnter.addEventListener('click', () => {
    result.innerHTML = day.value * firstDayWage;

    console.log(day.value)
})
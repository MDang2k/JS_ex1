const length = document.getElementById("length");
const width = document.getElementById("width");


const btnEnter = document.querySelector("button")

const exchangeRate = 23500;

const area = document.getElementById("area");
const perimeter = document.getElementById("perimeter");


btnEnter.addEventListener('click', () => {
    area.innerHTML = length.value * width.value;
    perimeter.innerHTML = (Number(length.value) + Number(width.value)) * 2;
})
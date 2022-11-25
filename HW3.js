const dollar = document.getElementById("dollar");

console.log(dollar)
const btnEnter = document.querySelector("button")

const exchangeRate = 23500;

const result = document.getElementById("result");

btnEnter.addEventListener('click', () => {
    result.innerHTML = dollar.value * exchangeRate;

})
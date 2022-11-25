const number = document.getElementById("number");

const btnEnter = document.querySelector("button")

const result = document.getElementById("result");


btnEnter.addEventListener('click', () => {
    result.innerHTML = number.value % 10 + Math.floor(number.value / 10) ;

    console.log(number.value / 10)
})
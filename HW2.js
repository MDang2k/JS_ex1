const   num1 = document.getElementById("num1"),
        num2 = document.getElementById("num2"),
        num3 = document.getElementById("num3"),
        num4 = document.getElementById("num4"),
        num5 = document.getElementById("num5");

const btnEnter = document.querySelector("button")


const result = document.getElementById("result");

btnEnter.addEventListener('click', () => {
    result.innerHTML = (Number(num1.value) + Number(num2.value) + Number(num3.value) + Number(num4.value) + Number(num5.value)) / 5;
})

document.getElementById("app").innerHTML = `
<div>
        <p>Licznik: <span>0</span></p>
        <button id="b_inkrementacja" type="button">+1</button>
        <button id="b_zmiana_koloru" type="button">Zmien kolor</button>
</div>
`;

let counter_num = document.querySelector("span");
let counterState = Number(counter_num.innerText);
const increaseButton = document.getElementById("b_inkrementacja");
const changeColorButton = document.getElementById("b_zmiana_koloru");

increaseButton.addEventListener("click", () => {
    counter_num.innerText = counterState += 1;
} )

changeColorButton.addEventListener("click", () => {
    if (counter_num.style.color === 'black'){
        counter_num.style.color = 'red';
    } else {
        counter_num.style.color = 'black';
    }
})




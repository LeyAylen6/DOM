const counterButton = document.getElementsByClassName('counter-button')
const addButton = document.getElementsByClassName('add-button')[0];
const substractButton = document.getElementsByClassName('substract-button');
const resetButton = document.getElementsByClassName('reset-button');

addButton.addEventListener('click',add);
substractButton.addEventListener('click',función_a_lanzar);

var total = 0

function add() {     
    for (let i = 0 ; i < 10; i++) {
        total += i;
    }
    total = document.getElementByClassName('counter-button').innerHTML
    console.log(total);
}


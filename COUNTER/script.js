let counter = 0;

const counterValue = document.getElementById('num');
const incrementBtn = document.getElementById('increase');
const decrementBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');

incrementBtn.addEventListener('click', () => {
    counter++;                                   //Increment counter value
    counterValue.innerHTML = counter;
});

decrementBtn.addEventListener('click', () => {
    counter--;                                   //Decrement counter value
    counterValue.innerHTML = counter;
});

resetBtn.addEventListener('click', () => {
    counter = 0;                                 //Reset counter value
    counterValue.innerHTML = counter;
});
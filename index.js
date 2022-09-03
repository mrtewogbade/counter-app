let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let sumEl = document.getElementById("sum-el")
let count = 0;

function increment() {
    count ++;
    countEl.textContent = count;
}

function decrement() {
    count --;
    countEl.textContent = count;
}

function reset() {
    count = 0;
    countEl.textContent = count;
}

function save() {
    let countStr = count + " - "
    
    saveEl.textContent += countStr
}


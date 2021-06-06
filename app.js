"use strict";

const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
const btn = document.getElementById('btn');
btn.addEventListener('click', function (event) {
    event.preventDefault();
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[rand()];
    }
    document.body.style.backgroundColor = color;
    let cid = document.getElementById('colorID');
    cid.innerText = color;
});

function rand() {
    return Math.floor(Math.random() * 15);
}
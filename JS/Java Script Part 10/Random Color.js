let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
let btn = document.querySelector('button');
let colorBox = document.querySelector('.Color-box');

btn.addEventListener('click', () => {
    let colorArray = randColorGen();
    h1.innerText = colorArray[0];
    colorBox.style.backgroundColor = colorArray[0];
    h2.style.color = colorArray[1];
});

function randColorGen(){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let colors = [];
    colors[0] = `rgb(${r}, ${g}, ${b})`;
    colors[1] = contrastGen(r,g,b);
    return colors;
}

function contrastGen(r,g,b) {
    let rc = 255 - r;
    let gc = 255 - g;
    let bc = 255 - b;
    return `rgb(${rc}, ${gc}, ${bc})`;
}
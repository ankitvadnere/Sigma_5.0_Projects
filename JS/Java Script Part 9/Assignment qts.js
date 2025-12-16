let input = document.createElement('input');
input.placeholder = 'username';
document.querySelector('body').appendChild(input);

let btn = document.createElement('button');
btn.innerText = 'Click Me';
btn.id = 'btn';
document.querySelector('body').appendChild(btn);

btn.classList.add('bgBlue');
btn.classList.add('colorWhite');

let h1 = document.createElement('h1');
h1.innerText = 'DOM Practice';
h1.classList.add('ul', 'colorPurple');
input.insertAdjacentElement('beforebegin', h1);

let p = document.createElement('p');
p.innerHTML = "Apna College <b>Delta</b> Practice";
btn.insertAdjacentElement('afterend', p);
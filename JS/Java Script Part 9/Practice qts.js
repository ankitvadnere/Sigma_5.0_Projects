let p = document.createElement('p');
p.innerHTML = "Hey I'm Red";
p.style.color = 'red';

let body = document.querySelector('body');

body.appendChild(p);

let h3 = document.createElement('h3');
h3.innerHTML = "I'm a blue H3";
h3.style.color = 'blue';

p.insertAdjacentElement('afterend', h3);

let div = document.createElement('div');
div.style.border = '2px solid black';
div.style.backgroundColor = 'pink';

let h1 = document.createElement('h1');
h1.innerHTML = "I'm in a div";

let p2 = document.createElement('p');
p2.innerHTML = "Me too!";

h3.insertAdjacentElement('afterend', div);
div.appendChild(h1);
h1.insertAdjacentElement('afterend', p2);
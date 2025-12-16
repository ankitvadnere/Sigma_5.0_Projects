// let btns = document.querySelectorAll('button');
// let i = 0;
// for (btn of btns) {
//     btn.addEventListener("click", genNum);
//     btn.addEventListener("click", sayHello);
//     btn.addEventListener("dblclick", () => {
//         console.log("dbl click detected");
//     })
// }

// function genNum() {
//     console.log(i++);
// }

// function sayHello() {
//     console.log("Hello");
// }

// const para = document.querySelector('div');

// para.addEventListener('click', function() {
//     this.style.backgroundColor = 'wheat';
// });

// let btn = document.querySelector('button')

// btn.addEventListener('click', function () {
//     console.log('button clicked');
// });

// let input = document.querySelector('input');

// input.addEventListener('keydown', function (event) {
//     console.dir(event);
// });

// let form = document.querySelector('form');

// form.addEventListener('submit', function(){
//     // let user = document.querySelector('#user');
//     // let pass = document.querySelector('#pass');

//     let user = form.elements[0];
//     let pass = form.elements[1];

//     alert(`Hi, ${user.value} your password is set to ${pass.value}`);
// })

let enterTxt = document.querySelector('#enter-txt');
let p = document.querySelector('p');

enterTxt.addEventListener('input', function() {
    p.innerText = this.value;
})
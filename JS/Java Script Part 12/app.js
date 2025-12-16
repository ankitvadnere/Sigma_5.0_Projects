// async function greet() {//async keyword makes the function to return a promise object which is fulfilled if the function has no error but is rejected if the function has some error
//     // throw 'Error occurred'; //throw keyword is used to throw an error
//     return 'Hello!';
// }

// greet()
//     .then((res) => {
//         console.log('The result is : ', res);
//     })
//     .catch((err) => {
//         console.log('Error: ', err);
//     })

// let demo = async () => { // Arrow function can also be made async using async keyword
//     return 5;
// }

// let div = document.querySelector('div');

// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 5 ) + 1;
//             if (num > 3) {
//                 reject('Promise rejected'); //this is a dummy case which can give the reject state of priomise
//             }
//             div.style.backgroundColor = color;
//             resolve('Color changed');
//         }, delay);
//     });
// } 

// async function changeColorStarter() {
//     //await is used to make the next function wait till the called function is executed. And it can only be used inside a async function
//     try {
//         await changeColor('violet', 1000); 
//         await changeColor('indigo', 1000);
//         await changeColor('blue', 1000);
//         await changeColor('green', 1000);
//         await changeColor('yellow', 1000);
//         await changeColor('orange', 1000);
//         await changeColor('red', 1000);
//     } catch (err){
//         console.log(err);
//         let a = 5;  //this part is not dependent on the promises but if the promise reject then this part will also not get executed to overcom this we write this in catch block and the part where errors could occur is kept in try block
//         console.log('Num = ', a);
//         console.log(`${a} + 3 = ${a + 3}`);
//     }
// }

// changeColorStarter();

//**********APIs and accessing json************** 

// let jsonRes = '{"fact":"Kittens remain with their mother till the age of 9 weeks.","length":57}';

// console.log(jsonRes);

// let validRes = JSON.parse(jsonRes); //JSON.parse() is used to convert the string type data given by the API into an object so that operations can be performed on it

// console.log(validRes);

// let student = {
//     name: 'Ankit',
//     cgpa: 8.9
// };

// console.log(student);

// let jsonStudent = JSON.stringify(student);//JSON.stringify() is used to convert objects into string type data

// console.log(jsonStudent);

//***************AJAX (Asynchronous Javascript and XML)********** 
//This is a process of requesting some data from API and getting the response from the API happens asynchronously without affecting the flow of execution of the rest of the js code and also the response is json and not xml it is still called ajax just bcz it is fixed in everone's mind 

//********* Sending request from js **********//

//fetch() function is used and it returns a promise 

// let url = 'https://catfact.ninja/fact';

// fetch(url)
//     .then((res) => {
//         //this res is a promise that's not usable so we have to use a json() function to make it usable
//         return res.json();
//     })
//     .then((data1) => {
//         console.log('Fact 1: ', data1.fact);
//         return fetch(url);
//     })
//     .then((res) => {
//         return res.json();
//     })
//     .then((data2) => {
//         console.log('Fact 2: ', data2.fact);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// async function getFacts() {
//     try {
//         let res1 = await fetch(url);
//         let fact1 = await res1.json();
//         console.log(fact1.fact);

//         let res2 = await fetch(url);
//         let fact2 = await res2.json();
//         console.log(fact2.fact);
//     } catch(e) {
//         console.log('Error: ', e);
//     }
// }
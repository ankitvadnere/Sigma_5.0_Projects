// Axios 
// What is spl about axios? It gives data in promise from the api which is already in readable json format whereas in fetch we have to use parse to make it proper json format which is readable

//The code using fetch looks like this :

// let url = 'https://catfact.ninja/fact';
// async function getFacts() {
//     try {
//         let res1 = await fetch(url);
//         let fact1 = await res1.json(); // this line is not required if we use axios
//         console.log(fact1.fact);
//     } catch(e) {
//         console.log('Error: ', e);
//     }
// }

// The code using axios: 
// This code is shorter and simpler we have to use its cdn link or download its files
// async function getFacts() {
//     try {
//         let res1 = await axios.get(url);
//         console.log(res1.data.fact);
//     } catch(e) {
//         console.log('Error: ', e);
//     }
// }


// //Code to display the fact and image in html

// let url1 = 'https://catfact.ninja/fact';
// let url2 = 'https://dog.ceo/api/breeds/image/random';

// let factBtn = document.querySelector('#catFact');
// let imgBtn = document.querySelector('#dogImg');
// let p = document.querySelector('p');
// let pic = document.querySelector('img');

// factBtn.addEventListener('click', async function () {
//     await getFacts();
// });

// imgBtn.addEventListener('click', async function () {
//     await showImgs();
// });

// async function getFacts() {
//     try {
//         let res = await axios.get(url1);
//         p.innerText = res.data.fact;
//     } catch(e) {
//         console.log('Error: ', e);
//     }
// }

// async function showImgs() {
//     try {
//         let img = await axios.get(url2);
//         pic.setAttribute("src", img.data.message);
//     } catch (e) {
//         console.log('Error: ', e);
//     }
// }

//Free apis have some call limits so don't exploit them bcz they can block your account

// let url3 = "https://icanhazdadjoke.com/"; 

// async function getJokes() {
//     try {
//         let config = {headers: { Accept: "application/json"}}; // This is how we pass headers to api
//         let res = await axios.get(url3, config);// if we pass without headers it is giving the data in html
//         console.log(res.data.joke); 
//     } catch (err) {
//         console.log(err);
//     }
// };

// // Passing Query Strings with API calls 

// let url4 = "http://universities.hipolabs.com/search?name=";
// let clgBtn = document.querySelector('#searchCllg');

// clgBtn.addEventListener('click', async function () {
//     let list = document.querySelector('ul');
//     let countryName = document.querySelector('input').value;
//     let cllgs = await getCollegs(countryName);
//     list.innerHTML = '';
//     for (let i = 0; i < cllgs.length; i++){
//         list.innerHTML += `<li>College Name: ${cllgs[i].name}</li>`;
//     }
// });

// async function getCollegs(countryName) {
//     try {
//         let res = await axios.get(url4+countryName);
//         return res.data;
//     } catch (err) {
//         console.log(err);
//     }
// }

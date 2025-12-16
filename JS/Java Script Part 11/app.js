// function one() {
//     return 1;
// }

// function two() {
//     return one() + one();
// }

// function three() {
//     let ans = two() + one();
//     console.log(ans);
// }

// three();

// h1 = document.querySelector('h1');

// function colorChange(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     }, delay);
// }

// colorChange('violet', 1000, () => {
//     colorChange('indigo', 1000, () => {
//         colorChange('blue', 1000, () => {
//             colorChange('green', 1000, () => {
//                 colorChange('yellow', 1000, () => {
//                     colorChange('orange', 1000, () => {
//                         colorChange('red', 1000);
//                     });
//                 });
//             });
//         });
//     });
// });

// function saveToDB(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }
// }

// saveToDB('1',
//     () => {
//         console.log('Saved Data: 1');
//         saveToDB('2',
//             () => {
//                 console.log('Saved Data: 2');
//                 saveToDB('3',
//                     () => {
//                         console.log('Saved Data: 3');
//                     },
//                     () => {
//                         console.log('No Internet');
//                     }
//                 )
//             },
//             () => {
//                 console.log('No Internet');
//             }
//         )
//     },
//     () => {
//         console.log('No Internet');
//     }
// )

//This is a condition for callback hell where the code gets very confusing due to nesting of callbacks

// function saveToDB(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (internetSpeed > 4) {
//             resolve(`${data} saved to database`);
//         } else {
//             reject(`Network failure. Data not saved`);
//         }
//     });
// }
//This is how promises are made 

//Using the output of promise using then and catch
// saveToDB('Data 1') //this will return the promise object with either resolve of reject state
//     .then(() => {
//         console.log('Promise was resolved');
//     })
//     .catch(() => {
//         console.log('Promise was rejected');
//     })

// //Promise Chaining 
// saveToDB('Data 1')
//     .then((result) => {//here the result is the output of the resolve function in the saveToDB function
//         console.log('Data 1 saved');
//         console.log(result);
//         return saveToDB('Data 2');
//     })
//     .then((result) => {
//         console.log('Data 2 saved');
//         console.log(result);
//         return saveToDB('Data 3');
//     })
//     .then((result) => {
//         console.log('Data 3 saved');
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log('Promise was rejected');
//         console.log(error);
//     })

// h1 = document.querySelector('h1');

// function colorChange(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         h1.style.backgroundColor = color;
//         resolve('Color changed successfully');
//     }, delay);
//     });
// }

// colorChange('violet', 1000)
//     .then(() => {
//         return colorChange('indigo', 1000);
//     })
//     .then(() => {
//         return colorChange('blue', 1000);
//     })
//     .then(() => {
//         return colorChange('green', 1000);
//     })
//     .then(() => {
//         return colorChange('yellow', 1000);
//     })
//     .then(() => {
//         return colorChange('orange', 1000);
//     })
//     .then(() => {
//         return colorChange('red', 1000);
//     })
//     .then(() => {
//         console.log('All color changes are completed')
//     })


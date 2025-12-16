let heroes = [['ironman', 'spiderman', 'captain america'], ['superman', 'wonderwoman']];

// for (let i = 0; i < heroes.length; i++){
//     console.log(`List ${i}`);
//     for (let j = 0; j < heroes[i].length; j++){
//         console.log(heroes[i][j]);
//     }
// }

let list, names;
for (list of heroes){
    for (names of list){
        console.log(names);
    }
}

let fruit;
let fruits = ["banana", "apple", "mango"];
for (fruit of fruits){
    console.log(fruit);
}
let marvel = ["ironman", "spiderman" , "thor"];
let dc = ["batman", "superman", "flash"];

// console.log( 1 ,marvel);
// marvel.push(dc);
// console.log( 2, dc);
// console.log( 3 ,marvel);

let allheros = marvel.concat(dc);
// console.log( allheros);

let india = ["shaktiman", "nagraj", "doga"];

let heros = [...marvel ,...dc,...india];
console.log(heros.join(", "));

// console.log(heros);

console.log(Array.from("chetan"));


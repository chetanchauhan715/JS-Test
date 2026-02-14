
// // simple use of filter 
// const nums = [1,2,4,5,6,77,90];

// let new_num = nums.filter( (i)=> i>4)  // - in single line no return statement 

// let new_num = nums.filter( (i) => {    // - but when open scope must return it 
//         return i>4;
// })
// console.log(new_num);


// also do the same thing with forEach loop but need more steps 
// const mynum = [];
// nums.forEach( (num) =>{
//     if(num > 4){
//         mynum.push(num);
//     }
// })
// console.log(mynum);


// ----------------------- map---------------
// const nums = [1,2,3,4,5,6,7,8,9,10];
// const new_num = nums.map( (val) => val * 10);
// console.log(new_num);


// chaining 
// const nums = [1,2,3,4,5,6,7,8,9,10];
// const new_num = nums.map( (val) => val * 10)
//                     .map(  (val) => val + 1)
//                     .filter((val)=> val >=50);
// console.log(new_num);



// ---------- reduce ------------------

// const nums = [1,2,3,4,5];
// const new_nums = nums.reduce( (currentTotal , nextValue) => {
//     console.log(`my current Total : ${currentTotal} and next value : ${nextValue}  =  ${currentTotal} + ${nextValue}` );
//     return currentTotal + nextValue } , 5) 
// console.log(new_nums);


const cart = [
    {
     Course : "web dev",
     Price :   599 
     } ,
    {
     Course : "backend",
     Price :   2599 
     } ,
    {
     Course : "ai",
     Price :   3599 
     } ,
    {
     Course : "machine-learning",
     Price :   9599 
     }
]

const bill = cart.reduce( (item_total , next_item) =>{
        return item_total + next_item.Price;
},0)

console.log(bill);

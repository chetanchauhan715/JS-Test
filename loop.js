// for each loop -----------
const info = [
    {
        Name:"chetan",
        age:22
    } ,
    {
        Name:"max",
        age:32
    },
    {
        Name:"john",
        age:43
    },
    
]

info.forEach( (val)=> {
    // console.log(val.Name);
})




// for of loop -----------
const nums = [3,2,5,6,7,8];
for (let  num of nums) {
    // console.log(num);    
}

for (let key in nums) {
    // console.log(nums[key]);
}

// map - have key and value pairs all are unique
const map = new Map();
map.set( 1, "chetan");
map.set(2, "atul");
map.set(3, "harsh ");

for (let [ number ,names] of map) {
    console.log(`number ${number} and name is ${names}`);
}


// for individual item - value or index 
for(let name of map.values()){
    console.log(name);
}
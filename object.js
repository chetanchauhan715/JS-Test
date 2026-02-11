let obj = {
    name: "chetan",
    age : 22,
    email: "chetan@gmail.com",
    arr: [2,3,1,6]

    
}

console.log(obj.name);
console.log(obj["age"]);

let greeting =  function(){
    console.log("hello JS User");
}
let greetingtwo =  function(){
    console.log(`hello JS User ${obj.name}  your age is ${obj.age}`);
}

console.log(greeting());
console.log(greetingtwo());


obj.greetingthree = function(){
    console.log(`hey ${this.name} how are you `);
}

console.log(obj.greetingthree());


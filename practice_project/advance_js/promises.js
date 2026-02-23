// const promiseOne = new Promise(function (resolve, reject ) {

//     setTimeout(function (){
//         console.log("Async task is complete");
//         resolve()
//     },1000)
// })
// promiseOne.then(function(){
//     console.log("promise consudem");
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("async task 2");
//         resolve();
//     } , 1000)
// }).then(function(){
//     console.log("async 2 resolved");
// })


//-------------------------------
// const promiseThree = new Promise(function (resolve,reject){
//     setTimeout( function(){
//     resolve({username: "chai", email:"chetan@gmail"})
//     }, 1000)
// });

// promiseThree.then(function(user){
//     console.log(user);
// })

//------------------------
// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({username:"chetan", pass:"124"});
//         }else{
//             reject("Something went Wrong");
//         }
//     },1000)
// })

// promiseFour.then( (user)=> {
//     console.log(user);
//     return user.username
// }).then((username)=> {
//     console.log(username);
// }).catch(function(err){
//     console.log(err);
// }).finally( ()=>{
//     console.log("Finally Code executed");
// })


//=================================================

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function (){
        let err = true;
        if(!err){
            resolve({userName:"java", pass:"jvm"})
        } else{
            reject('ERROR: java went wrong')
        }
    },1000)

});

async function consumePromiseFive(){
  try{

    const response =  await promiseFive
   console.log(response);
  } 
  catch(error){
    console.log(error);
  }
}

consumePromiseFive();


//----------------fetch
// async function getAllUsers(){
//   try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json();
//     console.log(data)
//   }
//   catch(err){
//     console.log("E : ", err);
//   }
// }

// getAllUsers()




// ------------
fetch('jsonplaceholder.typicode.com/users')
.then(function(response) {
  return response.json;
})
.then( (response_data)=> {
  console.log(response_data);
} )
.catch( (error) => console.log(error))
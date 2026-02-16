const buttons = document.querySelectorAll('.button');
const body = document.body;

// buttons.forEach( (button)=>{
//     button.addEventListener('click' , (event) =>{

//         if(event.target.id === "Green"){
//             body.style.backgroundColor = event.target.id ;
//         }

//         if(event.target.id === "White"){
//             body.style.backgroundColor = event.target.id ;
//         }

//         if(event.target.id === "Yellow"){
//             body.style.backgroundColor = event.target.id ;
//         }

//         if(event.target.id === "Blue"){
//             body.style.backgroundColor = event.target.id ;
//         }

//         if(event.target.id === "Grey"){
//             body.style.backgroundColor = event.target.id ;
//         }
//     })


    
// })

// ------------ optimized way ---------------

buttons.forEach( (button) =>{
    button.addEventListener('click' ,  (event) =>{
        body.style.backgroundColor = button.id ;
    })
})
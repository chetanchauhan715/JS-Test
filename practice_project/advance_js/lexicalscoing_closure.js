//----------- lexical scoping

// function User(name){
//    let name = "chetan";

//     function DisplayName(){
//         console.log(name);
//     }

//     DisplayName();
// }

// User();


// ------------- closure--------

function User(){
    let name = "chetan";

    function DisplayName(){
        console.log(name);
    }

   return DisplayName ;
}

const myfun = User();
myfun();

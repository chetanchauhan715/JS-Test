function one() {
    const name = "chetan";


    function two(){
        const age = 22;
        console.log(name);
    }
    // console.log(age);
    two();
}

// one();


// Immediately invoked function 
( () => {
    console.log("DB Connected");
} )() ;

//2 

(function two(name) {
    console.log(`DB Connected to ${name}`);
}) ("firstDB");
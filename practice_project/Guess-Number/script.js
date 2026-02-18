let random_number = parseInt(Math.random() * 100 + 1 );

const submit = document.querySelector('#click');
const guess = document.querySelector('#input');
const result = document.querySelector('#result');
const reset = document.querySelector('#reset');
const attempsDisplay = document.querySelector('#attemp');
const previousGuessDisplay = document.querySelector('#pguess');

let game = true;

let previous_guess = [];
let attemps = 0;



if(game){
      submit.addEventListener('click' , (event) => {
        event.preventDefault();
        if(!game){return ;}
        const input = parseInt(guess.value);
        validate(input);
        guess.value = "";
    });
}



    reset.addEventListener('click' , (event) =>{
        random_number = parseInt(Math.random() * 100 + 1 ); 
        previous_guess = [];
        attemps = 0;
        game = true;
        result.innerHTML = "";
        attempsDisplay.textContent = attemps;
        previousGuessDisplay.textContent = "";
        alert("New Game Started");
        console.log("new number is" , random_number);
    }) 



function validate (input){
    if(isNaN(input)){
        result.innerHTML = "Enter valid number";
    } else if (input == random_number){
        result.innerHTML = `You Guessed it Right actaual number is : ${random_number}` ;
        game = false;
    }
    else if(input < random_number){
        result.innerHTML = "Your guess is low than actual Number";
    }
    else{
        result.innerHTML = "Your guess is Higher";
    }

    previous_guess.push(input);
    attemps = attemps + 1 ;

    attempsDisplay.textContent = attemps ;
    previousGuessDisplay.textContent = previous_guess.join(",  ");

    if(attemps === 10 && game){
        result.innerHTML = `You out of Attemps now , original number was ${random_number}`;
        game = false;

    }
    
}



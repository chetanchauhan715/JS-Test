const button = document.querySelector('#cl');
const result = document.querySelector('#result');

button.addEventListener('click' , (event) =>{
    event.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    if(!height || height <= 0 || isNaN(height)){
        result.innerHTML = `please enter valid height : ${height}`;
    } else if(!weight || weight <= 0 || isNaN(weight)){
        result.innerHTML = `please enter valid weight :${weight}`;
    } 
    else {
    
    const bmi = (weight / ((height * height)/10000 )).toFixed(2);
    result.innerHTML = `<span> Your BMI : ${bmi} </span>`; 
    if(bmi > 18 && bmi < 26 ){
        result.style.backgroundColor = "green";
    } else{
        result.style.backgroundColor = "red";
    }

}
})
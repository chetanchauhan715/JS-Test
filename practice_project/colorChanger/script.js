const start = document.querySelector('#start')
const stop = document.querySelector('#stop')

// generate random hashcode for atuomatic changing bg color 

const random_color = function generateHash(){
    let number = "0123456789ABCDEF";
    let hash = "#";
    for(let i=0; i<6; i++){
         hash += number[Math.floor(Math.random() * 16 )];
    }
    return hash;
    }

    let set;

    start.addEventListener('click' , ()=>{
        startChangingColor();
    })
    const startChangingColor = function (){
       set =   setInterval(changecolor , 1000)
    }

    function changecolor(){
        document.body.style.backgroundColor = random_color();
    }

    stop.addEventListener('click' , ()=>{
        stopcolorChange();
    })

    function stopcolorChange(){
        clearInterval(set);
    }


    



/*
// const title = document.getElementById("title");
const title = document.querySelector("#title"); //just as css selectors.
title.innerHTML = "Hi From JS!";
//console.log(title);
console.dir(title);
title.style.color = 'beige';

console.dir(document);
document.title = "I own you now";
*/ 

const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

// function handleClick(){
//     title.classList.toggle(CLICKED_CLASS);  //아래와 똑같은 기능함!
//     /*
//     const hasClass = title.classList.contains(CLICKED_CLASS);

//     if(hasClass){
//         title.classList.remove(CLICKED_CLASS);
//         console.log(CLICKED_CLASS + " remvoed from classList.");
//     }else{
//         title.classList.add(CLICKED_CLASS);
//         console.log(CLICKED_CLASS + " added to classList.");
//     }
//     */
// }


const BASE_COLOR =  "white";
const OTHER_COLOR = "purple";

title.addEventListener("click", handleClick);

function handleClick(){ 
    const currentColor = title.style.color;
    if(currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    }else{
        title.style.color = BASE_COLOR;
    }
}


/*
function handleResize(event){   //parameter로 'event' 기본으로 갖고있다. by JS (생략가능.)
    console.log(event);
    console.log("I have been resized")
}




window.addEventListener("resize", handleResize);            //call 'handleResize' function WHEN YOU NEED IT!
// cf) window.addEventListener("resize", handleResize());  : call 'handleResize' function RIGHT fucking NOW (immediately)!
*/






function init(){    //initialize my application
    title.style.color = BASE_COLOR ;
    title.addEventListener("click", handleClick);    
}

init();





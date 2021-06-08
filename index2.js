
const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

/* this version overwrites className (일회용 use) 
function handleClick(){
    const currentClass = title.className;
    if(currentClass !== CLICKED_CLASS){
        title.className = CLICKED_CLASS;    //replacing all class names to CLICKED_CLASS,
                                            // so 기존의 class btn 없어짐 -> cursor : pointer도 사라짐 so we use classList instead!
    }else{
        title.className = "";   //remove class names...act like a dictator
    }
}
*/

/* 위에꺼의 improved version. using classList !!!
function handleClick(){
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if(hasClass){
        title.classList.remove(CLICKED_CLASS);
    }else{
        title.classList.add(CLICKED_CLASS);
    }
}
*/

//두번째꺼랑 exactly the same function 'toggle'기능 사용하기!
function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
}

function init(){    //initialize my application
     title.addEventListener("click", handleClick);
}
init();
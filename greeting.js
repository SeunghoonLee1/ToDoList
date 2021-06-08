const form = document.querySelector(".js-form") , 
        input = form.querySelector("input"),
        greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser", SHOWING_CN = "showing"
        //ls : local storage, CN : class name

function saveName(text){
    localStorage.setItem(USER_LS, text);
}


function handleSubmit(event){
    event.preventDefault();//여기서 default behavior란 user가 enter쳤을때 그 정보를 어디론가 보내고 page를 refresh 하는것.
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    }else{
        // console.log("current user not null");
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();
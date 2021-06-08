const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input")
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
let toDos = [];



function deleteToDo(event){
    const btn = event.target; //gets the element on which you clicked.
    const li = btn.parentNode;
    toDoList.removeChild(li);
    //여기까지가 HTML상에서 지우는 과정

    //filter(함수) : forEach함수처럼 각각의 item에대해(여기선 toDos array의 element들)
    //'function'안에 check condition을 pass하는 값에 한해서 새로운 array를 return함.
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);//delete하려는게 아닌것만 return 하기
    });
    toDos = cleanToDos;
    saveToDos();
    //여기까지가 local storage상에서도 지우는 과정
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    /*
    You cannot store JS data on local storage. Can only save String!
    JSON.stringify : takes any JS object and turns it into a String.
    */
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    span.innerText = text;
    li.appendChild(delBtn);   
    li.appendChild(span);
    li.id = newId;  //give id to li
    toDoList.appendChild(li);
    const toDoObj = {
        text : text,
        id : newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = ""; 
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}


function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();
const inputBox= document.getElementById("input-box");
const List= document.getElementById("list");

function addTask(){
    if(inputBox.value === ''){
        alert("You Have to Enter Something")
    }

    else{

        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        List.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

List.addEventListener('click' , function(e){
    if (e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
},false);

function saveData(){
    localStorage.setItem("data", List.innerHTML)

}
function showTask(){
    List.innerHTML = localStorage.getItem("data");
}
showTask();
const Clock = document.getElementById("timer")
const list = document.getElementById("List");

let toDo = document.getElementsByClassName("toDo");
var d = new Date();

if (localStorage.getItem("list") != null) { // if "list" not empty so add user's task
    list.innerHTML += localStorage.getItem("list")
}


// to Do List
function UpdateList() {
    toDo = document.getElementsByClassName("toDo");
    for (i of toDo) {
        let But = document.getElementById(i.id);
        let taskNumber = But.id.split('_')[1] // => [_, "Number of button and "]
        let task = document.getElementById("task_" + taskNumber)

        But.addEventListener("click", Check);
        task.addEventListener("click", Check)

        function Check() {
            if (But.getAttribute("style") == "background-color: rgb(94, 222, 30);") {
                But.setAttribute('style', "background-color: rgb(243, 228, 209);");
                task.setAttribute('style', "text-decoration-line: none; ");
            } else {
                But.setAttribute('style', "background-color: rgb(94, 222, 30);");
                task.setAttribute('style', "text-decoration-line: line-through;");
            }
            
        }

    }
}
UpdateList()

// add Task
document.getElementById("AddTast").addEventListener("click", function() {
    let task = document.getElementById("NewTask").value; // get new task
    document.getElementById("List").innerHTML += `<div><button class="toDo" id="do_${toDo.length + 1}"></button> <span id="task_${toDo.length + 1}">${task}</span></div>`; // add new task
    
    // Save list
    localStorage.setItem("list", list.innerHTML);
    UpdateList()

});



function Update() {

    // Update the clock
    d = new Date();
    Clock.innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    setTimeout(Update, 1000)

}
Update()


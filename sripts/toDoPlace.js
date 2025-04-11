const Clock = document.getElementById("timer");
const milo = document.getElementById("milo");
let list = document.getElementById("List");


let toDo = document.getElementsByClassName("toDo");
var d = new Date();

if (localStorage.getItem("list") != null) { // if "list" not empty so add user's task
    list.innerHTML += localStorage.getItem("list")
}


// to Do List

function UpdateButtonCheckList() {
    toDo = document.getElementsByClassName("toDo");
    for (i of toDo) {
        let But = document.getElementById(i.id);
        let taskNumber = But.id.split('_')[1] // => [_, "Number of button and "]
        let task = document.getElementById("task_" + taskNumber)

        But.addEventListener("click", Check);
        task.addEventListener("click", Check)

        function Check() {
            if (But.getAttribute("style") === "background-color: rgb(94, 222, 30);") {
                But.setAttribute('style', "background-color: rgb(243, 228, 209);");
                task.setAttribute('style', "text-decoration-line: none; ");
            } else {
                But.setAttribute('style', "background-color: rgb(94, 222, 30);");
                task.setAttribute('style', "text-decoration-line: line-through;");
            }
            
        }

    }
}
UpdateButtonCheckList()

function UpdateButtonDeleteList() {
    let del = document.getElementsByClassName("delete");

    for (i of del) {
        let But = document.getElementById(i.id);
        let number = But.id.split('_')[1] // => [_, "Number of button and "]

        But.addEventListener("click", function() {
            let SplitBlocks = list.innerHTML.replaceAll("  ", "").replaceAll("\n", "").split(`<div id="line_${number}">`)
            SplitBlocks[1] = SplitBlocks[1].substring(SplitBlocks[1].indexOf("</div>") + 6)
            list.innerHTML = SplitBlocks[0] + SplitBlocks[1];
            
            localStorage.setItem("list", list.innerHTML);
            UpdateButtonCheckList()
            UpdateButtonDeleteList()
        });

    }
}
UpdateButtonDeleteList()


// add Task
document.getElementById("AddTast").addEventListener("click", function() {
    let task = document.getElementById("NewTask").value; // get new task
    if (task != ""){
        document.getElementById("List").innerHTML += `<div id="line_${toDo.length + 1}"><button class="toDo" id="do_${toDo.length + 1}"></button> <span id="task_${toDo.length + 1}">${task}</span> <button class="delete" id="delet_${toDo.length + 1}"></button></div>`; // add new task
    
        // Save list
        localStorage.setItem("list", list.innerHTML);
        UpdateButtonCheckList()
        UpdateButtonDeleteList()
    }
});



function Update() {
    // Update the clock
    d = new Date();
    Clock.innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}
setInterval(Update, 1000)

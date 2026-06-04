function add(){
    const input = document.getElementById("task");
    const list = document.getElementById("list");
    let li = document.createElement("li");
    li.textContent = input.value + " ";
    let deletebtn = document.createElement("button");
    deletebtn.textContent = "Delete";
    deletebtn.onclick = function(){
        list.removeChild(li);
    };
    li.appendChild(deletebtn);
    list.appendChild(li);
    input.value = "";

}
function add(){
    const input = document.getElementById("task");
    let list = document.getElementById("list");
    list.innerHTML += "<li>" + input.value + "</li>";
    input.value = "";
}
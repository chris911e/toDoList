let items = [];
let counter = 0;

function updateTaskCounter(){
    counter++;
    document.getElementById("counter").innerHTML = `Tasks erfüllt: ${counter}`
}

function addItem() {
    const input = document.getElementById("input")
    if (input.value) {
        items.push(input.value);
        input.value="";
        renderList();
    } else {
        alert("Do not let the field empty pls")
    }
}

function renderList() {
    const list = document.getElementById("list")
    list.innerHTML = ""
    items.forEach(item => {
        const newListItem = document.createElement("li")

        const delete_button = document.createElement("button")
        delete_button.innerText = "Delete Task"
        const check_button = document.createElement("button")
        check_button.innerText = "Check Task"

        delete_button.addEventListener("click", function(e){
            list.removeChild(item);
        })
        newListItem.innerText = item
        list.append(newListItem, delete_button, check_button)
    })
}


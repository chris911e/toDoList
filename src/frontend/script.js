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
        newListItem.innerText = item
        list.append(newListItem)
    })
}
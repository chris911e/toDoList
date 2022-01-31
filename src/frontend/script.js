let items = [];

function addItem() {
    const input = document.getElementById("input")
    items.push(input.value);
    input.value="";
    renderList();
}

function renderList() {
    const list = document.getElementById("list")
    list.innerHTML = ""
    items.forEach(item => {
        const newListItem = document.createElement("button")
        newListItem.innerText = item
        list.append(newListItem)
    })
}
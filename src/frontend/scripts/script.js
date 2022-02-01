let items = [];
let counter = 0;

var json = [{
    "email": "hugo@zli.ch",
    "password": "Zli123"
}]

function updateTaskCounter(){
    counter++;
    document.getElementById("counter").innerHTML = `Tasks erfüllt: ${counter}`
}

function del(a, b, c) {
    list.removeChild(a);
    list.removeChild(b);
    list.removeChild(c);
}

function addItem() {
    const input = document.getElementById("input")
    if (input.value) {
        items.push(input.value);
        input.value="";
        renderList();
    } else {
        alert("Do not let the field empty")
    }
    create(input);
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
            del(newListItem, check_button, delete_button);
            var itemIndex_del = items.indexOf(item);
            if (items.splice(itemIndex_del, 1)) {
                alert("Successfully deleted");
            } else {
                alert("Failed to delete task");
            }

            remove(itemIndex_del);
        })
        check_button.addEventListener("click", function(e) {
            del(newListItem, check_button, delete_button);
            var itemIndex_check = items.indexOf(item);
            items.splice(itemIndex_check, 1);
            updateTaskCounter();
            update(itemIndex_check, item);
        })

        newListItem.innerText = item
        list.append(newListItem, delete_button, check_button)
    })
}

function register() {

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email == null || password == null) {
        alert("Please fill out the form");
    }

    auth(email, password);
    /*
    for (var em in json) {
        if (document.getElementById("email").value == json[em].email) {
            for (var pass in json) {
                if (document.getElementById("password").value == json[pass].password) {

                }
            }
        }
    }
    */
}


let base_url = "http://localhost:3000"
const token = "b856e57feb5763e4e6cfdb0bab59fcbc8d9797f6b4170a115ad27d3e4e8d3719163bc29a3223969430afd459b816b9694802fc0b6299c411876646dac275ef84";

function authenticate(data) {}

async function index() {
    const response = await fetch(base_url + "/tasks")
    return response.json();
}

async function get(id) {
    const response = await fetch(base_url + "/v1/tasks/" + id)
    return response.json();
}

async function update(id, data) {
    const formData = new FormData();
    formData.append("id", 1);
    formData.append("userId", 1);
    formData.append("title", "toDo");
    formData.append("completed", false);
    const response = await fetch(base_url + "/v1/tasks", {
        method: "POST",
        body: formData,
        headers: {
            'authorization':  `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
    return response.json();
}

async function create(data) {
    const formData = new FormData();
    formData.append("userId", 1);
    formData.append("title", data);
    formData.append("completed", false);
    const response = await fetch(base_url + "/v1/tasks", {
        method: "POST",
        body: formData,
        headers: {
            'authorization':  `Bearer${token}`,
            'Content-Type': 'application/json'
        }
    })
    return response.json();
}

async function remove(id) {
    const formData = new FormData();
    formData.append("id", 1);
    const response = await fetch(base_url + "/v1/tasks", {
        method: "DELETE",
        body: formData,
        headers: {
            'authorization':  `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
    return response.json();
}

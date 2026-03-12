const taskInput = document.getElementById("taskinp");
const priority = document.getElementById("prior");
const addTask = document.getElementById("add");
const taskList = document.getElementById("taskList");

addTask.addEventListener("click", function() {
    const taskName = taskInput.value.trim();
    

    const li = document.createElement("li");
    li.setAttribute("data-priority", priority.value);
    li.setAttribute("data-completed", "false");

    li.innerHTML = `
        <input type="checkbox">
        ${taskName} (${priority.value})
        <button class="deleteBtn">Delete</button>
    `;

    const checkbox = li.querySelector("input");
    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            li.style.textDecoration = "line-through";
            li.setAttribute("data-completed", "true");
        } else {
            li.style.textDecoration = "none";
            li.setAttribute("data-completed", "false");
        }
    });

    li.querySelector(".deleteBtn").addEventListener("click", function() {
        li.remove();
    });

    taskList.appendChild(li);
    taskInput.value = "";
});

document.getElementById("all").addEventListener("click", function() {
    const tasks = taskList.querySelectorAll("li");
    tasks.forEach(li => li.style.display = "list-item");
});

document.getElementById("completed").addEventListener("click", function() {
    const tasks = taskList.querySelectorAll("li");
    tasks.forEach(li => {
        li.style.display = li.getAttribute("data-completed") === "true" ? "list-item" : "none";
    });
});

document.getElementById("pending").addEventListener("click", function() {
    const tasks = taskList.querySelectorAll("li");
    tasks.forEach(li => {
        li.style.display = li.getAttribute("data-completed") === "false" ? "list-item" : "none";
    });
});
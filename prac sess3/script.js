document.addEventListener("DOMContentLoaded", () => {
    // Get references to key elements
    const inputField = document.getElementById("todo-input");
    const addButton = document.getElementById("add-button");
    const todoList = document.getElementById("todo-list");

    // Add a new task
    const addTask = () => {
        const taskText = inputField.value.trim();

        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create a new list item
        const listItem = document.createElement("li");
        listItem.classList.add("todo-item");

        // Add task text
        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;
        listItem.appendChild(taskSpan);

        // Add a delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener("click", () => {
            listItem.remove();
        });
        listItem.appendChild(deleteButton);

        // Append the new item to the list
        todoList.appendChild(listItem);

        // Clear the input field
        inputField.value = "";
    };

    // Attach event listener to the add button
    addButton.addEventListener("click", addTask);

    // Add task on pressing Enter key
    inputField.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
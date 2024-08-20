function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = taskInput.value;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Remove';
        deleteButton.onclick = function() {
            li.remove();
        };

        li.appendChild(deleteButton);

        li.onclick = function() {
            li.classList.toggle('completed');
        };

        taskList.appendChild(li);
        taskInput.value = "";
    }
}

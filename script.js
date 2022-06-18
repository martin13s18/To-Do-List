function toDoList() {

    // Taking the HTML elements
    const newTask = document.getElementById('newTask');
    const newTaskBtn = document.getElementById('addBtn');
    const ulElement = document.getElementById('newTasks');

    // Add Task button event
    newTaskBtn.addEventListener('click', addNewTask);

    // Add button Functionality
    function addNewTask(ev) {
        ev.preventDefault();

        if (newTask.value) {

            // Creating new elements
            let liElement = document.createElement('li');
            let doneBtn = document.createElement('button');
            let deleteBtn = document.createElement('button');

            liElement.textContent = newTask.value + ' ';
            doneBtn.textContent = 'Done';
            deleteBtn.textContent = 'Delete';

            // Dynamic DOM Manipulations
            liElement.appendChild(doneBtn);
            liElement.appendChild(deleteBtn);
            ulElement.appendChild(liElement);

            newTask.value = '';

            // Done task functionality
            doneBtn.addEventListener('click', (ev) => {
                ev.preventDefault();

                let tick = '✓';
                let task = liElement.childNodes[0].textContent;

                liElement.textContent = task + tick;
            });

            // Delete task functionality
            deleteBtn.addEventListener('click', (ev) => {
                ev.preventDefault();

                liElement.remove();
            });
        }
    }
}
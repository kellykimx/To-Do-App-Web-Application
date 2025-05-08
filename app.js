function addSection() {
    const container = document.getElementById('sections-container');

    //creating a new section
    const section = document.createElement('div');
    section.className = 'todo-section';

    //creating class name input
    const classInput = document.createElement('input');
    classInput.type='text';
    classInput.placeholder='Class Name';
    classInput.classList.add('section-title');

    //create task list container
    const taskList = document.createElement('u1')
    taskList.classList.add('task-list');

    //creating input and button container
    const taskInputBox = document.createElement('div');
    taskInputBox.classList.add('task-input-container');

    //creating input field
    const taskInput = document.createElement('input');
    taskInput.type='text';
    taskInput.placeholder='New Task';
    taskInput.classList.add('new-task');

    //creating an add task button
    const addButton = document.createElement('button');
    addButton.textContent='Add Task';
    addButton.classList.add('add-task-btn');
    addButton.onclick=()=>{
        const task = taskInput.value.trim();
        if (task !== '') {
            addTask(taskList, task);
            taskInput.value='';
        }
    }

    //append elements to section
    section.appendChild(classInput);
    taskInputBox.appendChild(taskInput);
    taskInputBox.appendChild(addButton);
    section.appendChild(taskInputBox);
    section.appendChild(taskList);

    //append the new section to the container
    container.appendChild(section);
}

function addTask(taskList, task){
    const item = document.createElement('li');

    item.textContent=task;
    item.onclick=()=>{
        item.classList.toggle('checked');

        if(item.classList.contains('checked')) {
            taskList.removeChild(item);
            taskList.appendChild(item);
        }
    }
    taskList.insertBefore(item, taskList.firstChild);
}

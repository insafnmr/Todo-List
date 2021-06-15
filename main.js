//selectors
const todoInput = document.querySelector('.todo_input');
const todoButton = document.querySelector('.todo_button');
const todoList = document.querySelector('.todo_list');
const filterOption = document.querySelector('.filter_todo');
//event listeners
todoButton.addEventListener("click", addTodo)
todoList.addEventListener("click", deleteCheck)
filterOption.addEventListener("click", filterTodo)
//functions

function addTodo(event) {
    event.preventDefault();
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo_item');
    todoDiv.appendChild(newTodo);
    if (todoInput.value === "") {
        return null
    }
    const completedButton = document.createElement('button');
    completedButton.innerText = "Done";
    completedButton.classList.add('complete_btn')
    todoDiv.appendChild(completedButton);
    //delete BUTTON
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete_btn')
    todoDiv.appendChild(deleteButton);
    todoList.appendChild(todoDiv);
    todoInput.value = ""
}

//DELETE & CHECK
function deleteCheck(e) {
    const item = e.target;
    //DELETE ITEM
    if (item.classList[0] === "delete_btn") {
        const todo = item.parentElement;
        todo.remove()

    }
    //COMPLETE ITEM
    if (item.classList[0] === "complete_btn") {

        let completedButton = document.getElementsByClassName('complete_btn');

        for (var i = 0; i < completedButton.length; i++) {
            var completed = completedButton[i];
            completed.addEventListener('click', completedundone);

        }
    }


    }
    function completedundone(event) {
        let buttonClicked = event.target;
        const todo = buttonClicked.parentElement.firstChild;
console.log(buttonClicked)
        if (buttonClicked.innerText == "Done") {
            buttonClicked.innerText = "Undone"
            todo.classList.toggle("completedItem")
        }
        else if(buttonClicked.innerText == "Undone") {
            buttonClicked.innerText = "Done";
        todo.classList.toggle("completedItem")
    }
}
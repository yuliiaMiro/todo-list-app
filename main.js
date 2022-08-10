const showFormButton = document.getElementById('show-form');
const todoForm = document.getElementById('todo-form');
const cancelAddingTodo = document.getElementById('add-todo-cancel');

showFormButton.addEventListener('click', function () {
    todoForm.classList.remove('hidden');
})

cancelAddingTodo.addEventListener('click', function () {
    todoForm.classList.add('hidden');
});


//available statuses
const statuses = ['Done', 'Not started', 'In progress'];

function showStatuses() {
    const statusesListElement = document.getElementsByClassName('statuses-list')[0];

    statuses.forEach(element => {
       const statusType = document.createElement('div');
       statusType.classList.add('status');
       statusType.classList.add('status-' + element.toLowerCase().replace(' ', '-'));
       statusType.innerHTML = element;
       statusesListElement.appendChild(statusType);
    });
}

showStatuses();
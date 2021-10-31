let form = document.querySelector('.input');
let input = document.querySelector('.setTodo');
let todos = document.querySelector('.todos');
let link = 'img/close.png';

function createTask(event){
   event.preventDefault();
   let leftElemOfBlock = document.createElement('input');
   let rightElemOfBlock = document.createElement('img');
   let elemBlock = document.createElement('div');
   elemBlock.classList.add('task');
   rightElemOfBlock.classList.add('delete');
   rightElemOfBlock.setAttribute('src', link);
   leftElemOfBlock.value = input.value;
   todos.prepend(elemBlock);
   elemBlock.prepend(rightElemOfBlock);
   elemBlock.prepend(leftElemOfBlock);
   input.value = '';
   let elements = document.querySelectorAll('.task');
   
   let buttons = document.querySelectorAll('.delete');
   for(let i = 0; i < elements.length; i++){
      buttons[i].onclick = function(){
        elements[i].remove();
      }
   }
   
}

form.addEventListener('submit', createTask);


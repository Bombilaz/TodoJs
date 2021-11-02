const form = document.querySelector('.input');
const input = document.querySelector('.setTodo');
const todos = document.querySelector('.todos');
const link = 'img/close.png';


const create = () =>{
/* 
   Создаем задачу(elemBlock) которая состоит из названия задачи
   (rightElemOfBlock) и img иконки для удаления (leftElemOfBlock)
   в виде переменных
*/ const middleElemOfBlock = document.createElement('div');
   const leftElemOfBlock = document.createElement('div');
   const rightElemOfBlock = document.createElement('img');
   const elemBlock = document.createElement('div');
/*
   Назначаем класс стилей главному блоку , класс иконке для удаления
   и атрибут который содержит ссылку на иконку.
*/
   leftElemOfBlock.classList.add('nametask');
   middleElemOfBlock.classList.add('undone');
   elemBlock.classList.add('task');
   leftElemOfBlock.setAttribute('maxlength', "25");
   leftElemOfBlock.setAttribute('contenteditable', true);
   
   rightElemOfBlock.setAttribute('src', link);
   rightElemOfBlock.onclick = function(){
      elemBlock.remove();
   }

   leftElemOfBlock.innerHTML = input.value;
   middleElemOfBlock.onclick = () =>{
      middleElemOfBlock.classList.toggle('done');
      leftElemOfBlock.classList.toggle('text_decoration');
   }
   
   todos.prepend(elemBlock);
   elemBlock.prepend(rightElemOfBlock);
   elemBlock.prepend(middleElemOfBlock);
   elemBlock.prepend(leftElemOfBlock);
   input.value = '';
}

function createTask(event){
   event.preventDefault();
   const elements = document.querySelectorAll('.task');
   if(elements.length > 7){
      return;
   }
   create();
}

form.addEventListener('submit', createTask);


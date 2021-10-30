let form = document.querySelector('.input');
let input = document.querySelector('.setTodo');
let todos = document.querySelector('.todos');
let link = 'img/close.png';
function getsmth(event){
   event.preventDefault();
   let elem1 = document.createElement('input');
   let elem2 = document.createElement('img');
   let elemBlock = document.createElement('div');
   elemBlock.classList.add('task');
   let elements = document.querySelectorAll('.task');
   elem2.classList.add('delete');
   elem2.setAttribute('src', link);
   elem1.value = input.value;
   todos.prepend(elemBlock);
   elemBlock.prepend(elem2);
   elemBlock.prepend(elem1);
   input.value = '';
   
   let buttons = document.querySelectorAll('.delete');
   for(let i = 0; i < elements.length; i++){
      buttons[i].onclick = function(){
        elements[i].remove();
      }
   }
   
}

form.addEventListener('submit', getsmth);


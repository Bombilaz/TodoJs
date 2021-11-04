const formCreateTask = document.querySelector('.formForCreate');
const inputNewTaskName = document.querySelector('.createNameForNewTask');
const divCountTaskName = document.querySelector('.currentLength');
const divsMaxNameNewTask = document.querySelectorAll('.topAlertElements');
const taskList = document.querySelector('.taskList');
const tasksLength = document.querySelector('.currentLengthTask');
const divsMaxTasks = document.querySelectorAll('.bottomAlertElements');
const buttonForAddTask = document.querySelector('.addNewTask');
let countTaskValue = 0;

showCountTasks();
setInterval(checkNewTaskNameLength, 30);

formCreateTask.addEventListener('submit', createTask);

function createTask(event){
   event.preventDefault();
   if(countTaskValue > 7){
      makeBackgroundColor(buttonForAddTask, 'red');
      makeRedColor(divsMaxTasks , null);
      setTimeout(makeBackgroundColor, 500, buttonForAddTask, 'black');
      setTimeout(makeGreyColor, 500 , divsMaxTasks);
      return;
   }
   create();
   countTaskValue++;
   showCountTasks();
}

function create(){

   const statusTaskElem = document.createElement('div');
   const taskNameElem = document.createElement('div');
   const buttonDeleteTask = document.createElement('div');
   const taskBlock = document.createElement('div');

   addClass(taskNameElem, 'nametask');
   addClass(buttonDeleteTask, 'delete');
   addClass(statusTaskElem, 'undone');
   addClass(taskBlock , 'task');
   setAttributesTaskNameElem(taskNameElem);
   deleteTask(buttonDeleteTask, taskBlock);
   createTaskName(taskNameElem);
   makeDone(statusTaskElem, taskNameElem, taskBlock);

   addElemToApp(taskList, taskBlock);
   addElemToApp(taskBlock, buttonDeleteTask);
   addElemToApp(taskBlock, statusTaskElem);
   addElemToApp(taskBlock, taskNameElem);
   
   inputNewTaskName.value = '';
}

function makeDone(statusElem , taskNameElem , taskBlock){
   statusElem.onclick = ()=>{
      if(statusElem.classList.contains('done')) {
         return;
      }
      moveDownTask(taskBlock);
      addClass(statusElem, 'done');
      addClass(taskNameElem, 'text_decoration');
   }
}

function deleteTask(clickElem, deleteElem){
   clickElem.onclick = ()=>{
      deleteElem.remove();
      countTaskValue--;
      showCountTasks();
   }
}

function checkNewTaskNameLength(){
   divCountTaskName.innerHTML = inputNewTaskName.value.length;
   if(inputNewTaskName.value.length > 24){
      makeRedColor(divsMaxNameNewTask , inputNewTaskName);
      return;
   }
   makeGreyColor(divsMaxNameNewTask , inputNewTaskName);
}

function moveDownTask(element){
   taskList.appendChild(element);
}

function addElemToApp(mainElem, prepend){
   mainElem.prepend(prepend);
}

function createTaskName(element){
   element.innerHTML = inputNewTaskName.value;
}

function showCountTasks(){
   tasksLength.innerHTML = countTaskValue;
}

function setAttributesTaskNameElem(variable){
   variable.setAttribute('maxlength', "25");
   variable.setAttribute('contenteditable', true);
}

function addClass(elem , className){
   elem.classList.add(className)
}

function makeBackgroundColor (elem, color){
   elem.style.backgroundColor = color;
}

function makeRedColor (manyElems, one = null){
   manyElems.forEach(element => element.style.color = 'red');
   if(one != null){
      one.style.color = 'red';
   } 
}

function makeGreyColor (manyElems, one = null){
   manyElems.forEach(element => element.style.color = 'rgba(0, 0, 0, 0.65)');
   if(one != null){
      one.style.color = 'rgba(0, 0, 0, 0.65)';
   }
}






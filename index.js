const formCreateTask = document.querySelector('.formForCreate');
const inputNewTaskName = document.querySelector('.createNameForNewTask');
const divCountTaskName = document.querySelector('.currentLength');
const divsMaxNameNewTask = document.querySelectorAll('.topAlertElements');
const taskList = document.querySelector('.taskList');
const tasksLength = document.querySelector('.currentLengthTask');
const divsMaxTasks = document.querySelectorAll('.bottomAlertElements');
const buttonForAddTask = document.querySelector('.addNewTask');


let countTaskValue = 0;
let arrayOfTasks = [];

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
   if(createTaskName(taskNameElem).trim() == ''){
      countTaskValue--;
      return;
   }
   makeDone(statusTaskElem, taskNameElem, taskBlock);
   
   
   addElemToApp(taskList, taskBlock);
   addElemToApp(taskBlock, buttonDeleteTask);
   addElemToApp(taskBlock, statusTaskElem);
   addElemToApp(taskBlock, taskNameElem);
   pushNewElem();
   inputNewTaskName.value = '';
}

function pushNewElem(){
   arrayOfTasks.push(
      {
         names : inputNewTaskName.value, 
         status : 'undone',
      })
}

function makeDone(statusElem , taskNameElem , taskBlock){
   statusElem.onclick = ()=>{
      if(statusElem.classList.contains('done')) {
         return;
      }
      console.log(statusElem);
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
   return element.innerHTML = inputNewTaskName.value;
}

function showCountTasks(){
   tasksLength.innerHTML = countTaskValue;
}

function setAttributesTaskNameElem(variable){
   variable.setAttribute('contenteditable', true);
   variable.setAttribute('onkeypress', "return (this.innerText.length <= 24)");
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






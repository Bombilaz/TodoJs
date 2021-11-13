const formCreateTask = document.querySelector('.formForCreate');
const inputNewTaskName = document.querySelector('.createNameForNewTask');
const divCountTaskName = document.querySelector('.currentLength');
const divsMaxNameNewTask = document.querySelectorAll('.topAlertElements');
const taskList = document.querySelector('.taskList');
const taskListCompleted = document.querySelector('.taskListCompleted');
const tasksLength = document.querySelector('.currentLengthTask');
const divsMaxTasks = document.querySelectorAll('.bottomAlertElements');
const buttonForAddTask = document.querySelector('.addNewTask');

const arrayOfTasks = JSON.parse(localStorage.getItem('arr')) || [];
showCountTasks();
setInterval(checkNewTaskNameLength, 30);
if (arrayOfTasks) {
   render();
}
formCreateTask.addEventListener('submit', createTask);

function createTask(event) {
   event.preventDefault();
   if (arrayOfTasks.length > 7) {
      makeBackgroundColor(buttonForAddTask, 'red');
      makeRedColor(divsMaxTasks, null);
      setTimeout(makeBackgroundColor, 500, buttonForAddTask, 'black');
      setTimeout(makeGreyColor, 500, divsMaxTasks);
      return;
   }
   if (inputNewTaskName.value.trim() == '') {
      return;
   }
   pushNewElem();
   inputNewTaskName.value = '';
   render();
   showCountTasks();
}

function render() {
   taskList.innerHTML = '';
   arrayOfTasks.forEach((item) => {
      const index = arrayOfTasks.indexOf(item);
      const statusTaskElem = document.createElement('div');
      const taskNameElem = document.createElement('span');
      const buttonDeleteTask = document.createElement('div');
      const taskBlock = document.createElement('div');

      addClass(taskNameElem, 'nametask');
      addClass(buttonDeleteTask, 'delete');
      addClass(statusTaskElem, 'undone');
      addClass(taskBlock, 'task');
      taskNameElem.innerHTML = item.name;

      taskBlock.setAttribute('id', index);
      if (item.completed) {
         addElemToApp(taskList, taskBlock);
         addElemToApp(taskBlock, buttonDeleteTask);
         addElemToApp(taskBlock, statusTaskElem);
         addElemToApp(taskBlock, taskNameElem);
         addClass(statusTaskElem, 'done');
         addClass(taskNameElem, 'text_decoration');
         moveDownTask(taskBlock);
      }
      else {
         addElemToApp(taskList, taskBlock);
         addElemToApp(taskBlock, buttonDeleteTask);
         addElemToApp(taskBlock, statusTaskElem);
         addElemToApp(taskBlock, taskNameElem);
      }

      setContentEditAble(taskNameElem);

      taskNameElem.addEventListener("keydown", function (event) {
         c = event.keyCode;
         if (c === 13 || c === 27) {
            taskNameElem.blur();
         }
      });

      buttonDeleteTask.addEventListener('click', () => {
         if (index == taskBlock.getAttribute('id')) {
            arrayOfTasks.splice(index, 1);
            localStorage.setItem('arr', JSON.stringify(arrayOfTasks));
            render();
            showCountTasks();
         }
      })

      statusTaskElem.addEventListener('click', () => {
         item.completed = !item.completed;
         localStorage.setItem('arr', JSON.stringify(arrayOfTasks));
         render();
         showCountTasks();
      })
   });
}


function pushNewElem() {
   arrayOfTasks.push(
      {
         name: inputNewTaskName.value,
         completed: false,
      });
   localStorage.setItem('arr', JSON.stringify(arrayOfTasks));
}

/* Функция которая проверяет не превышает ли имя новой задачи порог 
в 25 символов , если превышает , то блокирует дальнейшее введение 
символов , и информирует пользователя красным цветом */
function checkNewTaskNameLength() {
   divCountTaskName.innerHTML = inputNewTaskName.value.length;
   if (inputNewTaskName.value.length > 24) {
      makeRedColor(divsMaxNameNewTask, inputNewTaskName);
      return;
   }
   makeGreyColor(divsMaxNameNewTask, inputNewTaskName);
}

function moveDownTask(element) {
   taskList.appendChild(element);
}

function addElemToApp(mainElem, prepend) {
   mainElem.prepend(prepend);
}

function createTaskName(element) {
   return element.innerHTML = inputNewTaskName.value;
}

function showCountTasks() {
   let count = arrayOfTasks.length;
   tasksLength.innerHTML = count;
}

function setContentEditAble(variable) {
   variable.setAttribute('contenteditable', true);
   variable.setAttribute('onkeypress', "return (this.innerText.length <= 24)");
}

function addClass(elem, className) {
   elem.classList.add(className)
}

function makeBackgroundColor(elem, color) {
   elem.style.backgroundColor = color;
}

function makeRedColor(manyElems, one = null) {
   manyElems.forEach(element => element.style.color = 'red');
   if (one != null) {
      one.style.color = 'red';
   }
}

function makeGreyColor(manyElems, one = null) {
   manyElems.forEach(element => element.style.color = 'rgba(0, 0, 0, 0.65)');
   if (one != null) {
      one.style.color = 'rgba(0, 0, 0, 0.65)';
   }
}







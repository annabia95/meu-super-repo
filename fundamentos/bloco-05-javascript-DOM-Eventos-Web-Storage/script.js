function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let days = document.getElementById ('days');

  function daysOfCalendary  () {
      for (let index = 0; index < dezDaysList.length; index +=1) {
        let tagLi = document.createElement ('li');
        days.appendChild (tagLi)
        if (dezDaysList[index] === 25) {
            tagLi.classList = 'day holiday friday';
            tagLi.innerHTML = dezDaysList[index];
            days.appendChild (tagLi);
        }
        else if (dezDaysList[index] === 24 || dezDaysList[index] === 31) {
            tagLi.classList = 'day holiday';
            tagLi.innerHTML = dezDaysList[index];
            days.appendChild (tagLi);

         } else if (dezDaysList[index] === 4|| dezDaysList[index] === 11 || dezDaysList[index] === 18) {
            tagLi.classList = 'day friday';
            tagLi.innerHTML = dezDaysList[index];
            days.appendChild (tagLi); 
        } else {
            tagLi.classList = 'day';
            tagLi.innerHTML = dezDaysList[index];
            days.appendChild (tagLi); 
      }
    }
  }
  daysOfCalendary ();

  let classeBotoes = document.querySelector ('.buttons-container')
  function createButton (myString) {
      let button = document.createElement ('button');
      button.id = 'btn-holiday'
      button.innerHTML = myString;
      classeBotoes.appendChild (button);
  }

  createButton ('Feriados');

  function changeBackgroundColor (){
  let newclasseBotao = document.querySelector ('#btn-holiday');
  let classeHoliday = document.querySelectorAll ('.holiday');

  newclasseBotao.addEventListener ('click', function () {
    for (let index = 0; index < classeHoliday.length; index += 1) {
        if (classeHoliday[index].style.backgroundColor === 'white') {
            classeHoliday[index].style.backgroundColor = 'rgb(238,238,238)';
        } else {
            classeHoliday[index].style.backgroundColor = 'white';
    }
    }
    }   
);
}

changeBackgroundColor ();

function createAnotherButton (myString) {
    let buttonTwo = document.createElement ('button');
    buttonTwo.id = 'btn-friday'
    buttonTwo.innerHTML = myString;
    classeBotoes.appendChild (buttonTwo);
}

createAnotherButton ('Sexta-Feira');



function changeTheText (){
    let newclassesBotao = document.querySelector ('#btn-friday');
    let classeFriday = document.querySelectorAll ('.friday');
    let dezFridays = [ 4, 11, 18, 25 ];
  
    newclassesBotao.addEventListener ('click', function () {
      for (let index = 0; index < classeFriday.length; index += 1) {
          if (classeFriday[index].innerHTML !== 'Sextou' ) {
              classeFriday[index].innerHTML = 'Sextou';
          } else {
              classeFriday[index].innerHTML = dezFridays[index];
          };
      };
    }
);   
};

changeTheText ();

function dayMouseOver() {
    let days = document.querySelector('#days');
  
    days.addEventListener('mouseover', function(event) {
      event.target.style.fontSize = '30px';
      event.target.style.fontWeight = '600';
    })
  };
  
  function dayMouseOut() {
    let days = document.querySelector('#days');
  
    days.addEventListener('mouseout', function(event) {
      event.target.style.fontWeight = '200';
      event.target.style.fontSize = '20px';
    })
  };
  
  dayMouseOver();
  dayMouseOut();



  function newTaskSpan(task) {

    let tasksContainer = document.querySelector('.my-tasks');
    let taskName = document.createElement('span');
  
    taskName.innerHTML = task;
    tasksContainer.appendChild(taskName);
  };
  
  newTaskSpan('Projeto:');

function subitatleColor (stringColor) {
    let tasksContainer = document.querySelector('.my-tasks');
    let tagDiv = document.createElement ('div');
    tagDiv.classList = 'task';
    tagDiv.style.backgroundColor = stringColor;
    tasksContainer.appendChild (tagDiv);
}

subitatleColor ('red');

function setTaskClass() {
    let selectedTask = document.getElementsByClassName('task selected');
    let myTasks = document.querySelector('.task');
  
    myTasks.addEventListener('click', function(event) {
      if (selectedTask.length === 0) {
        event.target.className = 'task selected';
      } else {
        event.target.className = 'task';
      }
    });
  };
  
  setTaskClass();

  function setDayColor() {
    let selectedTask = document.getElementsByClassName('task selected');
    let days = document.querySelector('#days');
    let taskDiv = document.querySelector('.task');
    let taskColor = taskDiv.style.backgroundColor;
    
    days.addEventListener('click', function(event){
      let eventTargetColor = event.target.style.color;
      if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
        let color = selectedTask[0].style.backgroundColor;
        event.target.style.color = color;
      } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
        event.target.style.color = 'rgb(119,119,119)';
      }
    });
  };
  
  setDayColor();

  function addNewTask() {
    let getInputField = document.querySelector('#task-input');
    let addInputButton = document.querySelector('#btn-add');
    let getTaskList = document.querySelector('.task-list');
  
    addInputButton.addEventListener('click', function() {
      if (getInputField.value.length > 0) {
        let newLi = document.createElement('li');
        newLi.innerText = getInputField.value;
  
        getTaskList.appendChild(newLi);
        getInputField.value = '';
      } else {
        alert('Error: Digite ao menos 1 caractere.');
      }
    })
  
    getInputField.addEventListener('keyup', function(event) {
      if (event.key === 'Enter' && getInputField.value.length > 0) {
        let newLi = document.createElement('li');
        newLi.innerText = getInputField.value;
  
        getTaskList.appendChild(newLi);
        getInputField.value = '';
      }
    });
  };
  
  addNewTask();




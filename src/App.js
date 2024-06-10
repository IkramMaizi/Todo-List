import './App.css';
import pfp from "./assets/user_img.png"
import React from"react";
import NewTask from './components/NewTask';
import TaskElement from './components/TaskElement'

function App() {
  const currentDate= new Date();
  const [taskList, setTaskList]= React.useState([]);
  const [currentWindow, setCurrentWindow]= React.useState(1);
  const [newTaskTrigger, setNewTaskTrigger]= React.useState(false);

  function newTask(title, type, date){
    const currentDate= new Date();
   
    console.log(date);
    console.log(`new task function entered. task: ${title}`);
    // type= (date.getTime() == currentDate.getTime()) ? 1 : 2;
    return({
      title: title,
      desc:"task description",
      isDone: false,
      date: date,
      type: type
    })
  }

  function changeWindow(windowId){
    setCurrentWindow(windowId)
  }

  function getWindowTitle(){
    if (currentWindow === 1){
      return "Today's tasks"
    }
    if (currentWindow === 2){
      return "Upcomming tasks"
    }
    if (currentWindow === 3){
      return "Previous tasks"
    }
    if (currentWindow === 4){
      return "settings"
    }
  }


  function showNewTaskWindow(){
    setNewTaskTrigger(true);
  }
  function submitNewTask(title, type, date){
    setTaskList( (prev) => ([...prev, newTask(title, type, date)]));
    setNewTaskTrigger(false);
  }

  function handleCheckboxChange(task){
    setTaskList((prev) => { 
      return prev.map((p) =>
          p.title === task.title ? { ...p, type:(task.type===1 || task.type ===2)? 3 : 1, isDone: !p.isDone } : p
      );
  });
  }

  const tasksElements= taskList.map((task)=>{
    if(task.type===currentWindow)
    return(
    <TaskElement task={task} handleCheckboxChange={handleCheckboxChange}/>
  )
else{
  return ""
}})

  const windowTitle= getWindowTitle();


  return (
    <div className="App">
      <NewTask trigger={newTaskTrigger} submit={submitNewTask} />
      <div className="nav--menu">
      <div className="user--profile">
      <img src={pfp} alt=""/>
      <div className="user--info">
      <p className="username">Username</p>
      <p className="userId">User123</p>
      </div>
      </div>
      <ul className="nav--list">
      <button className="list--element" onClick={()=>changeWindow(1)}>Today's tasks</button>
      <button className="list--element" onClick={()=>changeWindow(2)}>Upcoming tasks</button>
      <button className="list--element" onClick={()=>changeWindow(3)}>Previous tasks</button>
      <button className="list--element" onClick={()=>changeWindow(4)}>settings</button>
      </ul>
      </div>
      <div className="main">
      <p className="logo">Todo List</p>
      <h2 className="main--title">{windowTitle}</h2>
      <ul className="tasks--list">  
      {tasksElements}
      </ul>
      
      <button className="add-task--btn" onClick={showNewTaskWindow}>
        <div className="cross">
          <div className="horizontal"></div>
          <div className="vertical"></div>
        </div>
      </button>
      </div>
    </div>
  );
}

export default App;

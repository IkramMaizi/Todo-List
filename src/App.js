import './App.css';
import pfp from "./assets/user_img.png"
import React from"react";
import NewTask from './components/NewTask';

function App() {
  const [taskList, setTaskList]= React.useState([newTask("Task 1", 1), newTask("Task 2", 2), newTask("Task 3", 3)]);
  const [currentWindow, setCurrentWindow]= React.useState(1);
  const [newTaskTrigger, setNewTaskTrigger]= React.useState(false);

  function newTask(title, type){
    //type=... check the date and define the task type
    return({
      title: title,
      desc:"task description",
      isDone: false,
      date: "task date",
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
  function submitNewTask(title, type){
    console.log(taskList);
    setTaskList( (prev) => ([...prev, newTask(title, type)]));
    setNewTaskTrigger(false);
  }

  const tasksElements= taskList.map((task)=>{
    console.log("map function entered");
    if(task.type===currentWindow)
    return(
    <li className="task--container"> 
      <input type="checkbox" className="checkbox"></input>  
      <p className="task--title">{task.title}</p>
    </li>
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

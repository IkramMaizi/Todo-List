import './App.css';
import pfp from "./assets/user_img.png"
import React from"react";

function App() {
  const [taskList, setTaskList]= React.useState([]);

  function newTask(){
    //type=... check the date and define the task type
    return({
      title:"task title",
      desc:"task description",
      isDone: false,
      date: "task date",
      type: "" //type
    })
  }

  // cons tasksElements= taskList.map()


  return (
    <div className="App">
      <div className="nav--menu">
      <div className="user--profile">
      <img src={pfp} alt=""/>
      <div className="user--info">
      <p className="username">Username</p>
      <p className="userId">User123</p>
      </div>
      </div>
      <ul className="nav--list">
      <li className="list--element">Today's tasks</li>
      <li className="list--element">Upcoming tasks</li>
      <li className="list--element">Previous tasks</li>
      <li className="list--element">settings</li>
      </ul>
      </div>
      <div className="main">
      <p className="logo">Todo List</p>
      <h2 className="main--title">Today's Tasks</h2>
      <ul className="tasks--list">  
      <li className="task--container"> {/*will be updated to {tasksElements} */}
      <input type="checkbox" className="checkbox"></input>  
      <p className="task--title">Task 1</p>
      </li>
      <li className="task--container"> {/*will be updated to {tasksElements} */}
      <input type="checkbox" className="checkbox"></input>  
      <p className="task--title">Task 2</p>
      </li>
      <li className="task--container"> {/*will be updated to {tasksElements} */}
      <input type="checkbox" className="checkbox"></input>  
      <p className="task--title">Task 3</p>
      </li>
      </ul>
      </div>
    </div>
  );
}

export default App;

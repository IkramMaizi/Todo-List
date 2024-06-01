import React from 'react'
import './NewTask.css';

function NewTask(props) {
    const [title, setTitle]= React.useState("");
    const [type, setType]= React.useState(1);
    function handleChange(event){
      setTitle(event.target.value)
    }
  return (props.trigger) ? (
    <div className="popup--holder">
    <div className='popup'>
        <h2 className='title'>New Task</h2>
        <input type="text" className='title--input' onChange={handleChange}/>
        <div className='type--options'>
        <button className={type===1 ? 'button--type--clicked' : 'button--type'} onClick={()=>setType(1)}>Today</button>
        <button className={type===2 ? 'button--type--clicked' : 'button--type'} onClick={()=>setType(2)}>Upcomming</button>
        </div>
        <button className='submit--button' onClick={() => props.submit(title, type)}>Add Task</button>
    </div>
    </div>
  ) : "";
}

export default NewTask
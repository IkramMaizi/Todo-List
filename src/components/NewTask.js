import React from 'react'
import './NewTask.css';

function NewTask(props) {
  return (props.trigger) ? (
    <div className="popup--holder">
    <div className='popup'>
        <h2 className='title'>New Task</h2>
        <input type="text" className='title--input' />
        <div className='type--options'>
        <button className='button--type'>Today</button>
        <button className='button--type'>Upcomming</button>
        </div>
        <button className='submit--button' onClick={props.submit}>Add Task</button>
    </div>
    </div>
  ) : "";
}

export default NewTask
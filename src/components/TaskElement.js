import React from 'react'

export default function TaskElement(props){
    return(
        <li className="task--container" key={props.task.title}> 
    <label class="checkbox--container" htmlFor={`taskCheckbox-${props.task.title}`}>
      <input type="checkbox" className="checkbox" id={`taskCheckbox-${props.task.title}`} onChange={() => props.handleCheckboxChange(props.task)} checked={props.task.isDone || false} ></input> 
      <div className="checkmark"></div> 
      </label>
      <p className={props.task.isDone ? 'task--title--checked' : 'task--title'}>{props.task.title}</p>
    </li>
    )
}
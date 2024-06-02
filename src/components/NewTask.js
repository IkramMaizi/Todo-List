import React from 'react'
import './NewTask.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function NewTask(props) {
    const [title, setTitle]= React.useState("");
    const [type, setType]= React.useState(1);
    const [date, setDate] = React.useState(new Date());
    function handleChange(event){
      setTitle(event.target.value)
    }
    function changeDate(date){setDate(date)}
    const ExampleCustomInput = React.forwardRef(({ value, onClick }, ref) => (
      <div className="custom-input" onClick={onClick} ref={ref}>
        {value}
      </div>
    ));
  return (props.trigger) ? (
    <div className="popup--holder">
    <div className='popup'>
        <h2 className='title'>New Task</h2>
        <input type="text" className='title--input' onChange={handleChange}/>
        <div className='type--options'>
        <button className={type===1 ? 'button--type--clicked' : 'button--type'} onClick={()=>setType(1)}>Today</button>
        <button className={type===2 ? 'button--type--clicked' : 'button--type'} onClick={()=>setType(2)}>Upcomming</button>
        </div>
        <div className="react-datepicker-wrapper">
          { type===2 ?<DatePicker 
          customInput={<ExampleCustomInput />} 
          selected={date} 
          onChange={changeDate} /> : ""}
        </div> 
        <button className='submit--button' onClick={() => props.submit(title, type, date)}>Add Task</button>
    </div>
    </div>
  ) : "";
}

export default NewTask
import { useState } from "react";
import './Input.css';


/**
 * Function for handling user inputs and updating the todo list.
 *
 * @param {Object} todo - the current todo list
 * @param {Function} setTodo - a function to update the todo list
 * @return {JSX.Element} the input form JSX
 */
export const Inputs = ({todo, setTodo}) => {
  const [tsk, setTsk] = useState("");
  const [com, setCom] = useState(false);
  
  /**
   * Handles the change event.
   *
   * @param {Object} event - the event object
   * @return {void} 
   */
  const handleChange = (event) => {
    setTsk(event.target.value);
  }

  /**
   * Set the task to an empty string and set the communication to false.
   */
  const rest=()=>{
    setTsk("");
    setCom(false);
  }
  
  /**
   * Handles the update event.
   *
   * @param {event} event - the event object
   * @return {void} 
   */
  const handleUpdate = (event) =>{
    event.preventDefault();
    const tsak = {
        id: Math.floor(Math.random() * 1000),
        title: tsk,
        completed: Boolean(com)
    }
    setTodo([...todo, tsak]);
    rest();
  }

  return (
    <div className="container mt-4">
    <form onSubmit={handleUpdate}>
        <div className="row">
        <div className="col-md-8">
            <input onChange={handleChange} type="text" id="task" className="form-control" placeholder="Enter task..." autoComplete="off"  value={tsk}/>
        </div>
        <div className="col-md-3">
            <select onChange={(event) => setCom(event.target.value )}  className="form-select" aria-label="Select category" value={com}>
                <option value="true">Completed</option>
                <option value="false">Todo</option>
            </select>
        </div>
        <div className="col-md-1">
            {/* <span onClick={rest} class="btn btn-dark">Reset</span> */}
            <button type="submit" className="btn btn-primary">Add</button>
        </div>
        </div>
    </form>
    </div>

  )
}

import './Items.css'

/**
 * Renders an item component for the given task, with buttons to update and delete the task.
 *
 * @param {Object} task - the task object to be rendered
 * @param {Function} handleUpdate - the function to handle task update
 * @param {Function} handleDelete - the function to handle task deletion
 * @return {JSX.Element} the rendered item component
 */
export const Items = ({ task, handleUpdate, handleDelete}) => {
  return (
    <li>
      <span>{task.id} - &nbsp; {task.title}</span>
      <button type="button" onClick={() => handleUpdate(task.id)} className={!task.completed ? "btn btn-danger" : "btn btn-success"} 
      >
        {!task.completed ? "Todo":"Done"}
      </button>
      <p>&nbsp;</p>
      <button type="button" onClick={() => handleDelete(task.id)} className="btn btn-danger">
       Delete
      </button>
    </li>
  );
};

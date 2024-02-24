import { Items } from './Items';

export const List = ({ todo, setTodo }) => { 
    function handleUpdate(id) {
        setTodo(todo.map( task=> (task.id === id ? {...task,completed: !task.completed}:task)));
    }
    function handleDelete(id){
        setTodo(todo.filter(task => task.id !== id))
    }
        
    return (
        <div>          
            <h2>To Do List</h2>
            <ul>
                {todo.map((task) => (
                    <Items key={task.id} task={task} handleUpdate={handleUpdate} handleDelete={handleDelete}/> 
                ))}
            </ul>
        </div>
    );
}

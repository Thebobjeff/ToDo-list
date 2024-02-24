import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import { List } from "./List";
import { Heads } from "./Heads"; // Assuming Heads component is defined in a file named "Heads.js"
import {Inputs} from "./Inputs"

/**
 * Function component for the App.
 *
 * @return {JSX.Element} The JSX for the App component
 */
export const App = () => {
    const [todo, setTodo] = useState([]);
  
    return (
      <section>
        <div >
            <Heads/>  
            <div className="container">
              <Inputs todo={todo} setTodo={setTodo}/>
              <List todo={todo} setTodo={setTodo}/>
            </div>
        </div>
      </section>
    );
};

export default App;

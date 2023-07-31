import './App.css';
import { useState } from "react";
import AddItem from './components/AddItem';
import DisplayTodos from './components/DisplayTodos';

function App() {
  const [userInput, setUserInput] = useState("")

  const [todo, setTodo] = useState([])



  return (
    <div className="mainContainer">
      <div className='container-lg todoBox overflow-auto'>
        <h2 className='text-center mt-3'>
          ToDo App
        </h2>
        <AddItem userInput={userInput} setUserInput={setUserInput} todo={todo} setTodo={setTodo} />
        <DisplayTodos todo={todo} setTodo={setTodo} />
        
      </div>

    </div>
  )
}

export default App

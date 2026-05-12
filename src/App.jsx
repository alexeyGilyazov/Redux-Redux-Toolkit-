import { useState } from "react";
import "./App.css";
import TodoList from "./Components/TodoList";
import InputTask from "./Components/InputTask";
import { addTodo } from './Store/todoSlice.js'
import { useDispatch } from 'react-redux'
// import Counter from "./Components/Counter";
// import CounterUser from "./Components/CounterUser";

function App() {
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const handleInput = task => setText(task)

  const addTask = () => {
    if (text.trim()) {
      dispatch(addTodo({ text }))

    }
    setText('')
  }

  return (
    <>
      <InputTask addTask={addTask} text={text} handleInput={handleInput} />
      <TodoList />
      {/* <Counter /> */}
      {/* <CounterUser /> */}
    </>
  );
}

export default App;

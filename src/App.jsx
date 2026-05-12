import { useState } from "react";
import "./App.css";
import TodoList from "./Components/TodoList";
import InputTask from "./Components/InputTask";
import { addTodo } from './Store/todoSlice.js'
import { incrementCountExample, decrementCountExample, resetCountExample } from "./Store/exampleCount";
import { useDispatch } from 'react-redux'
import Counter from "./Components/Counter";
import CounterUser from "./Components/CounterUser";

function App() {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch()

  function countIncrement() {
    setCount(count + 1)
    console.log('clicked');
  }
  function countDecrement() {
    setCount(count - 1)
  }
  function resetCount() {
    setCount(0)
  }

  const [text, setText] = useState('')
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
      <Counter />
      <CounterUser />

      <div>
        <h3>State counter</h3>
        <p>Counter { }</p>
        <button onClick={countIncrement}>Increment + </button>
        <button onClick={countDecrement}>Decrement - </button>
        <button onClick={resetCount}>Reset Count</button>
      </div>

      <div>
        <h3 style={{ color: 'red', fontSize: '40px' }}>Example counte</h3>

        <button onClick={() => dispatch(incrementCountExample())}>Increment + </button>
        <button onClick={() => dispatch(decrementCountExample())}>Decrement - </button>
        <button onClick={() => dispatch(resetCountExample())}>Reset Count</button>
      </div>
    </>
  );
}

export default App;

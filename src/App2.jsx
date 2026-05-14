import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { exampleAddTodo, exampleRemoveTodo, exampleToggleComplited, exampleEditedTodo } from "./Store/exampleTodoSlice";

function App2() {

    const [editingId, setEditingId] = useState(null);
    const [editedText, setEditedText] = useState('');
    const [inputValue, setInputValue] = useState('')

    const dispatch = useDispatch()
    const allTodoExample = useSelector((state) => state.exampleTodoSlice.exampleTodos)

    function getInputValue(event) {
        event.preventDefault()
        dispatch(exampleAddTodo({ id: Date.now(), text: inputValue }))
        setInputValue('')
    }

    function removeTodo(id) {
        event.preventDefault()
        dispatch(exampleRemoveTodo({ id }))
    }

    function toggleComplited(id) {
        dispatch(exampleToggleComplited({ id }))
    }

    function startEditing(todo) {
        event.preventDefault()
        setEditedText(todo.text)
        setEditingId(todo.id)
    }

    function saveEdit(id) {
        event.preventDefault()
        dispatch(exampleEditedTodo({ id, text: editedText }));
        setEditingId(null);
    }

    return (
        <>
            <form>
                <p>Value input: {inputValue}</p>
                <input
                    onChange={(event) => setInputValue(event.target.value)}
                    value={inputValue}
                    type="text"
                />
                <button type="submit" onClick={(event) => getInputValue(event)}>
                    Создать задачу
                </button>
                <ul>
                    {allTodoExample.map((todo) => (
                        <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                            {editingId === todo.id ? (
                                <>
                                    <input
                                        value={editedText}
                                        onChange={(e) => setEditedText(e.target.value)}
                                    />
                                    <button onClick={() => saveEdit(todo.id)}>Сохранить</button>
                                </>
                            ) : (
                                <>
                                    {todo.text}
                                    <button onClick={() => startEditing(todo)}>Редактировать</button>
                                </>
                            )}
                            <input
                                checked={todo.completed}
                                type="checkbox"
                                onChange={() => toggleComplited(todo.id)}
                            />
                            <button onClick={() => removeTodo(todo.id)}>Удалить задачу</button>
                        </li>
                    ))}
                </ul>
            </form>
        </>
    );
}

export default App2;

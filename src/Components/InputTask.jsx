export default function InputTask({ text, addTask, handleInput }) {
    return (
        <label>
            <input type="text" value={text} onChange={(e) => handleInput(e.target.value)} />
            <button onClick={addTask}>Добавит задачу</button>
        </label>
    )
}
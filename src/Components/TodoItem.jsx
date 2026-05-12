import { removeTodo, toggleTodoComplete } from "../Store/todoSlice";
import { useDispatch } from "react-redux";

export default function TodoItem({ id, text, complited }) {
    const dispatch = useDispatch();

    return (
        <li key={id.toString()}>
            <input
                type="checkbox"
                checked={complited}
                onChange={() => dispatch(toggleTodoComplete({ id }))}
            />
            <span>{text}</span>
            <button onClick={() => dispatch(removeTodo({ id }))}>Удалить задачу</button>
        </li>
    );
}

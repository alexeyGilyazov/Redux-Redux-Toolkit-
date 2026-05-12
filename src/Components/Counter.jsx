import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../Store/counterSlice";

export default function Counter() {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch()

    function plusCount() {
        dispatch(increment())
    }
    function minusCount() {
        dispatch(decrement())
    }

    return (
        <div>
            <h1>Counter {count}</h1>
            <button onClick={plusCount}>+</button>
            <button onClick={minusCount}>-</button>
        </div>
    );
}

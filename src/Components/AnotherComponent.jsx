import { useSelector, useDispatch } from 'react-redux';
import { incrementCountExample, decrementCountExample, resetCountExample } from '../Store/exampleCount';

export default function AnotherComponent() {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.exampleCounter.count);


    return (
        <>
            <h3>Абсолютно другой компонент </h3>
            <p>Счетчки из RTK {counter} </p>
            <button onClick={() => dispatch(incrementCountExample())}>
                увеличение из другого компонента +
            </button>
            <button onClick={() => dispatch(decrementCountExample())}>
                уменьшение из другого компонента -
            </button>
            <button onClick={() => dispatch(resetCountExample())}>
                сброс из другого компонента 0
            </button>
        </>
    );
}
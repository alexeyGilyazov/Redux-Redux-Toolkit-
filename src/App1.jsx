// import "./App.css";
import AnotherComponent from './Components/AnotherComponent';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCountExample, decrementCountExample, resetCountExample } from './Store/exampleCount'


function App1() {

    const styles = {
        width: '200px',
        height: '50px',
        border: '20px solid black',
        fontSize: '18px'
    }

    const dispatch = useDispatch()
    const count = useSelector((state) => state.exampleCounter.count)



    return (
        <>
            <div>
                <h3 style={{ color: 'red', fontSize: '40px' }}>Example counte {count}</h3>

                <button onClick={() => dispatch(incrementCountExample())}>Increment + </button>
                <button onClick={() => dispatch(decrementCountExample())}>Decrement - </button>
                <button onClick={() => dispatch(resetCountExample())}>Reset Count</button>
            </div>
            <div className="line-through" style={styles}>
                <AnotherComponent />
            </div>
        </>
    );
}

export default App1;

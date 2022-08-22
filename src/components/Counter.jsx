import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    increment,
    decrement,
    incrementBy10,
} from '../features/counter/counterSlice';

const Counter = () => {
    const dispatch = useDispatch();
    const { count } = useSelector((state) => state.contador);

    //console.log('estado :', estado);
    const sumar = () => {
        dispatch(increment());
    };

    const sumarDeA10 = () => {
        dispatch(incrementBy10(100));
    };

    return (
        <div>
            <button onClick={sumar}>+</button>
            <button onClick={sumarDeA10}>+10</button>
            <button>-</button>
            <p>{count}</p>
        </div>
    );
};

export default Counter;

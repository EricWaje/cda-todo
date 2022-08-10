import React from 'react';
import FormTodo from './FormTodo';

const Todos = () => {
    const handleTodo = (text) => {
        console.log(text);
    };

    return (
        <div>
            <FormTodo handleTodo={handleTodo} />
            {[1, 2, 3, 4].map((num) => (
                <li>{num}</li>
            ))}
        </div>
    );
};

export default Todos;

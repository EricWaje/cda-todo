import React, { useState } from 'react';

const FormTodo = ({ handleTodo }) => {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log('text :', text);
        handleTodo(text);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Todo...."
                value={text}
                onChange={handleChange}
            />
            <button>Add</button>
        </form>
    );
};

export default FormTodo;

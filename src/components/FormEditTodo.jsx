import React, { useState } from 'react';

const FormEditTodo = ({ todo, saveTodo }) => {
    const [newTitle, setNewTitle] = useState('');

    const handleChange = (e) => {
        setNewTitle(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="newTitle"
                value={newTitle}
                placeholder={todo.title}
                onChange={handleChange}
            />
            <button onClick={() => saveTodo(todo.id, newTitle)}>Save</button>
        </form>
    );
};

export default FormEditTodo;

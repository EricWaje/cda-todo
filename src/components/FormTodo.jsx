import { Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';

const FormTodo = ({ handleTodo, deleteTodos }) => {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log('text :', text);
        handleTodo(text);
        setText('');
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{ display: 'flex', justifyContent: 'center' }}
        >
            <TextField
                id="outlined-basic"
                label="Todo..."
                variant="outlined"
                type="text"
                value={text}
                onChange={handleChange}
            />

            <Button variant="outlined">Add</Button>
            <Button onClick={deleteTodos} variant="contained">
                Remove All
            </Button>
        </form>
    );
};

export default FormTodo;

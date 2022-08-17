import { Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
        <Grid alignItems="center" justifyContent="space-between">
            <form
                onSubmit={handleSubmit}
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <TextField
                    id="outlined-basic"
                    label="Todo..."
                    variant="outlined"
                    type="text"
                    value={text}
                    onChange={handleChange}
                />
                <div>
                    <Button variant="outlined">Add</Button>
                    <Button
                        onClick={deleteTodos}
                        variant="outlined"
                        color="error"
                    >
                        Remove All
                    </Button>
                </div>
                <div>
                    <Link style={{ margin: '0px 5px' }} to="/todos/completed">
                        Completed
                    </Link>
                    <Link style={{ margin: '0px 5px' }} to="/todos/uncompleted">
                        Uncompleted
                    </Link>
                    <Link style={{ margin: '0px 5px' }} to="/todos">
                        All
                    </Link>
                </div>
            </form>
        </Grid>
    );
};

export default FormTodo;

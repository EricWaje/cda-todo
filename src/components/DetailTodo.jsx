import { Button, Grid, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';
import { useState } from 'react';
import FormEditTodo from './FormEditTodo';

const DetailTodo = ({ todo, deleteTodo, completeTodo, editTodo, saveTodo }) => {
    return (
        <Grid
            bgcolor={todo.complete ? '#f48080' : '#80f488'}
            p={3}
            borderRadius="5px"
            item
            m={2}
        >
            {todo.edit ? (
                <FormEditTodo todo={todo} saveTodo={saveTodo} />
            ) : (
                <Typography>{todo.title}</Typography>
            )}

            <Button
                onClick={() => deleteTodo(todo.id)}
                variant="outlined"
                startIcon={<DeleteIcon />}
            >
                Delete
            </Button>
            <Button
                disabled={todo.edit}
                onClick={() => completeTodo(todo.id)}
                variant="contained"
            >
                {todo.complete ? 'Rehacer' : 'Completar'}
            </Button>
            <Button
                disabled={todo.edit}
                onClick={() => editTodo(todo.id)}
                variant="contained"
            >
                Edit
            </Button>
        </Grid>
    );
};

export default DetailTodo;

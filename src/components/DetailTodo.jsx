import { Button, Grid, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';
import { useState } from 'react';
import FormEditTodo from './FormEditTodo';
import { useSelector } from 'react-redux';

const DetailTodo = ({ todo, deleteTodo, completeTodo, editTodo, saveTodo }) => {
    const { user } = useSelector((state) => state.login);
    return (
        <Grid
            sx={{
                boxShadow: 3,
                width: '40%',
                borderRadius: '5px',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '150px',
            }}
            p={3}
            m={2}
            bgcolor={todo.complete ? '#ef5350' : 'white'}
            item
            container
        >
            {todo.edit ? (
                <FormEditTodo todo={todo} saveTodo={saveTodo} />
            ) : (
                <Typography variant="h5">{todo.title}</Typography>
            )}
            <Typography>{user}</Typography>
            <Grid item justifyContent="space-between" sx={{ display: 'flex' }}>
                <Button
                    onClick={() => deleteTodo(todo.id)}
                    variant="contained"
                    startIcon={<DeleteIcon />}
                    color="error"
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
                    color="success"
                >
                    Edit
                </Button>
            </Grid>
        </Grid>
    );
};

export default DetailTodo;

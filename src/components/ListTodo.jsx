import { Grid } from '@mui/material';
import React from 'react';
import DetailTodo from './DetailTodo';

const ListTodo = ({ tasks, deleteTodo, completeTodo, editTodo, saveTodo }) => {
    return (
        <Grid
            container
            alignItems="center"
            flexDirection="column"
            justifyContent="center"
        >
            {tasks.map((todo) => (
                <DetailTodo
                    todo={todo}
                    key={todo.id}
                    deleteTodo={deleteTodo}
                    completeTodo={completeTodo}
                    editTodo={editTodo}
                    saveTodo={saveTodo}
                />
            ))}
        </Grid>
    );
};

export default ListTodo;

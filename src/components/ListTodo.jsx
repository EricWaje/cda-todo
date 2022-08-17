import { Grid } from '@mui/material';
import React from 'react';
import DetailTodo from './DetailTodo';

const ListTodo = ({
    idTodos,
    tasks,
    deleteTodo,
    completeTodo,
    editTodo,
    saveTodo,
}) => {
    //console.log(idTodos);

    const filteredTask = tasks.filter((todo) => {
        switch (idTodos) {
            case 'completed': {
                return todo.complete;
            }
            case 'uncompleted': {
                return !todo.complete;
            }
            default:
                return todo;
        }
    });

    if (tasks.length === 0) {
        return <h1>Aún no hay tareas</h1>;
    }

    return (
        <Grid
            container
            alignItems="center"
            flexDirection="column"
            justifyContent="center"
        >
            {filteredTask.map((todo) => (
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

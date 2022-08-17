import { Grid } from '@mui/material';
import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import {
    ADD_TODO,
    COMPLETE_TODO,
    DELETE_TODO,
    EDIT_TODO,
    REMOVE_TODOS,
    SAVE_TODO,
} from '../actions/todoActions';
import { initialState, todoReducer } from '../reducers/todoReducer';
import FormTodo from './FormTodo';
import ListTodo from './ListTodo';

const Todos = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const { idTodos } = useParams();

    const handleTodo = (text) => {
        const newTodo = {
            id: uuidv4(),
            title: text,
            edit: false,
            complete: false,
        };
        dispatch({
            type: ADD_TODO,
            payload: newTodo,
        });
    };

    const deleteTodo = (id) => {
        dispatch({
            type: DELETE_TODO,
            payload: id,
        });
    };

    const completeTodo = (id) => {
        dispatch({
            type: COMPLETE_TODO,
            payload: id,
        });
    };

    const editTodo = (id) => {
        dispatch({
            type: EDIT_TODO,
            payload: id,
        });
    };

    const saveTodo = (id, value) => {
        dispatch({
            type: SAVE_TODO,
            payload: id,
            newTitle: value,
        });
    };

    const deleteTodos = () => {
        dispatch({
            type: REMOVE_TODOS,
        });
    };

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(state.tasks));
    }, [state.tasks]);

    return (
        <Grid container m={3} justifyContent="center">
            <FormTodo handleTodo={handleTodo} deleteTodos={deleteTodos} />
            <ListTodo
                idTodos={idTodos}
                tasks={state.tasks}
                deleteTodo={deleteTodo}
                completeTodo={completeTodo}
                editTodo={editTodo}
                saveTodo={saveTodo}
            />
        </Grid>
    );
};

export default Todos;

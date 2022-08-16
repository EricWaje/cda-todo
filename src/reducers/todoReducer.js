import {
    ADD_TODO,
    COMPLETE_TODO,
    DELETE_TODO,
    EDIT_TODO,
    REMOVE_TODOS,
    SAVE_TODO,
} from '../actions/todoActions';

export const initialState = {
    tasks: [],
};

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            return {
                tasks: [...state.tasks, action.payload],
            };
        }
        case DELETE_TODO: {
            console.log(action);
            const filteredTodos = state.tasks.filter(
                (task) => task.id !== action.payload
            );
            return {
                tasks: filteredTodos,
            };
        }

        case COMPLETE_TODO: {
            const completeTodos = state.tasks.map((todo) =>
                todo.id === action.payload
                    ? { ...todo, complete: !todo.complete }
                    : todo
            );

            return {
                tasks: completeTodos,
            };
        }

        case EDIT_TODO: {
            const editedTasks = state.tasks.map((todo) =>
                todo.id === action.payload
                    ? { ...todo, edit: !todo.edit }
                    : todo
            );

            return {
                tasks: editedTasks,
            };
        }

        case SAVE_TODO: {
            const saveTodos = state.tasks.map((todo) =>
                todo.id === action.payload
                    ? { ...todo, title: action.newTitle, edit: false }
                    : todo
            );

            return {
                tasks: saveTodos,
            };
        }

        case REMOVE_TODOS: {
            return {
                tasks: [],
            };
        }

        default:
            return state;
    }
};

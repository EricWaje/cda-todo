import { LOGIN, LOGOUT } from '../actions/loginActions';

export const initialState = {
    user: '',
    password: '',
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN: {
            console.log('Accion Login', action);
            return {
                user: action.user,
                password: action.password,
            };
        }
        case LOGOUT: {
            return {
                user: '',
                password: '',
            };
        }

        default:
            return state;
    }
};

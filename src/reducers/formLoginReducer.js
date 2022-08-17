import { HANDLE_USER } from '../actions/formLoginActions';

export const initialState = {
    user: '',
    password: '',
};

export const formLoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case HANDLE_USER: {
            //console.log('action', action);
            return {
                ...state,
                [action.field]: action.payload,
            };
        }

        default:
            return state;
    }
};

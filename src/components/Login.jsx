import React, { useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { HANDLE_USER } from '../actions/formLoginActions';
import { login } from '../features/login/loginSlice';
import { formLoginReducer, initialState } from '../reducers/formLoginReducer';
//import { LOGIN } from '../store/actions/loginActions';

const Login = () => {
    const [loginState, loginDispatch] = useReducer(
        formLoginReducer,
        initialState
    );
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(loginState);
        dispatch(login(loginState));
        navigate('/todos');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        loginDispatch({
            type: HANDLE_USER,
            payload: value,
            field: name,
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="User"
                    name="user"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="******"
                    name="password"
                    onChange={handleChange}
                />
                <button>Login</button>
            </form>
        </div>
    );
};

export default Login;

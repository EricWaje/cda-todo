import React, { useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { HANDLE_USER } from '../actions/formLoginActions';
import { formLoginReducer, initialState } from '../reducers/formLoginReducer';
import { LOGIN } from '../store/actions/loginActions';

const Login = () => {
    const [loginState, loginDispatch] = useReducer(
        formLoginReducer,
        initialState
    );
    const dispatch = useDispatch(); //--> enviar informacion a mi estado a traves de una acción
    //const prueba = useSelector((state) => state); --> leo mi estado

    //console.log('estado global de nuestra app', prueba.login.pasword);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: LOGIN,
            user: loginState.user,
            password: loginState.password,
        });
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

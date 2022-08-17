import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Todos from './components/Todos';
import PrivateRoute from './utils/PrivateRoute';
import store from './store/store';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route element={<PrivateRoute />}>
                        <Route path="/todos" element={<Todos />} />
                        <Route path="/todos/:idTodos" element={<Todos />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;

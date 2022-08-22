import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = () => {
    const { user } = useSelector((state) => state.login);
    return <>{user ? <Outlet /> : <Navigate to="/" />}</>;
};

export default PrivateRoute;

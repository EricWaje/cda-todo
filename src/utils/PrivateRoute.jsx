import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = () => {
    let user = true;
    return <>{user ? <Outlet /> : <Navigate to="/" />}</>;
};

export default PrivateRoute;

import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
    const isAuthenticated = Boolean(localStorage.getItem("token"));

    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }
    return <Outlet />;
}

export default ProtectedRoute;

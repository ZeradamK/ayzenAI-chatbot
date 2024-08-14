
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/authContext'

const PrivateRoute = ({ children }) => {
    const { currentUser } = useAuth();

    return currentUser ? children : <Navigate to="/login" />; // If logged in, render the child component, otherwise redirect to login
};

export default PrivateRoute;

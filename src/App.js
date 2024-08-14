import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Chatbot from './Components/ChatbotPage/Chatbot';
import './App.css';
import Login from "./Components/Auth/Login/Login";
import Register from "./Components/Auth/Register/Register";
import {useAuth} from "./context/authContext";
import PrivateRoute from './Components/PrivateRoute';

function App() {
    const { currentUser } = useAuth();
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
                path="/chat"
                element={
                    <PrivateRoute>
                        <Chatbot />
                    </PrivateRoute>
                }
            />
        </Routes>
    );
}

export default App;

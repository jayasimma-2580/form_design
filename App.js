import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import Home from './Home';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

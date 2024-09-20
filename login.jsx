import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/', { email, password })
            .then(response => {
                console.log(response);
                if (response.data.message === 'Login Successful') {
                    navigate('/home');
                }
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <div className='container'>
            <div className="login-box">
                <form onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <div className="input-field">
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label>Enter Your E-mail</label>
                    </div>
                    <div className="input-field">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <label>Enter Your Password</label>
                    </div>
                    <Link to="/forgot-password">Forgot Password ?</Link>
                    <button type="submit">Login</button>
                    <div className="register-option">
                        <p>Don't have an account? <Link to="/register">Register</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        phone: ""
    });
    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/register", data)
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => console.log(err));
    }

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className='container'>
            <div className="login-box">
                <form onSubmit={submit}>
                    <h2>Register</h2>
                    <div className="input-field">
                        <input
                            type="text"
                            name="name"
                            value={data.name}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="name">Enter Your Name</label>
                    </div>
                    <div className="input-field">
                        <input
                            type="email"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="email">Enter Your E-mail</label>
                    </div>
                    <div className="input-field">
                        <input
                            type="text"
                            name="phone"
                            value={data.phone}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="phone">Enter Your Phone Number</label>
                    </div>
                    <div className="input-field">
                        <input
                            type="password"
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="password">Enter Your Password</label>
                    </div>
                    <button type="submit">SignUp</button>
                    <div className="register-option">
                        <p>Have an account? <Link to="/">Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;

import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='container'>
            <div className="login-box">
                <h1>Welcome to my website!</h1>
                <Link to="/">Logout</Link>
            </div>
        </div>
    );
}

export default Home;

import React, { useState } from 'react';
import './Style.css';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('pssword');
        if (email === storedEmail && password === storedPassword) {
            toast.success("Login successfully")
            navigate('/dashboard');
        } else {
            toast.error("Please enter correct email and password")
            
        }
    };

    return (
        <>
            <div className="container">
                <div className="login form">
                    <header>Authorization</header>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type="submit" className="button">
                            SIGN IN
                        </button>
                    </form>
                    <div className="signup">
                        <span className="signup">
                            Don't have an account?
                            <Link to="/signup">Signup</Link>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;

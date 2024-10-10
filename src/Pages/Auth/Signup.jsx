import React, { useState } from 'react';
import './Style.css';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SignUp = () => {
    const navigate = useNavigate();
    
    // State to hold form input values
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (name && email && password) {
            if (password === password) {
                localStorage.setItem('name', name);
                localStorage.setItem('email', email);
                localStorage.setItem('pssword', password);

                toast.success("Sign up successfully")
                navigate('/login');
            } else {
                alert("Passwords do not match"); 
            }
        } else {
            alert("Please fill in all fields"); 
        }
    };

    return (
        <>
            <div className="container">
                <div className="registration form">
                    <header>Authentication</header>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Create a password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type="submit" className="button">SIGN UP</button>
                    </form>
                    <div className="signup">
                        <span className="signup">Already have an account?
                            <Link to="/login"> Login</Link>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;

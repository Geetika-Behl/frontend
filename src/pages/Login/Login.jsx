import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/users/login', {
                email,
                password,
            });
            alert(response.data.message);
            navigate('/dashboard');
        } catch (err) {
            alert(err.response?.data?.error || 'Something went wrong!');
        }
    };

    return (
        <div className="login-container">
            <h2 className="login-title">Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-input"
                        required
                    />
                </div>
                <button type="submit" className="login-button">
                    Login
                </button>
                <p className="signup-text">
                    Don't have an account?{' '}
                    <span
                        onClick={() => navigate('/signup')}
                        className="signup-link"
                    >
                        Sign up
                    </span>
                </p>
            </form>
            <motion.div
                className="cta-container"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
            >
                <button
                    className="cta-button"
                    onClick={() => navigate('/signup')}
                >
                    Get Started
                </button>
            </motion.div>
        </div>
    );
}

export default Login;

import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/users/signup', {
                name,
                email,
                password,
            });
            alert(response.data.message);
            navigate('/login');
        } catch (err) {
            alert(err.response?.data?.error || 'Something went wrong!');
        }
    };

    return (
        <div className="signup-container">
            <h2 className="signup-title">Sign Up</h2>
            <form onSubmit={handleSignup} className="signup-form">
                <div className="form-group">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-input"
                        required
                    />
                </div>
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
                <button type="submit" className="signup-button">
                    Sign Up
                </button>
                <p className="signup-text">
                    Already have an account?{' '}
                    <span
                        onClick={() => navigate('/login')}
                        className="signup-link"
                    >
                        Login
                    </span>
                </p>
            </form>
        </div>
    );
}

export default Signup;

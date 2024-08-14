import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { doSignInWithEmailAndPassword } from '../../../Firebase/auth';
import { useAuth } from '../../../context/authContext';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithCredential, EmailAuthProvider } from 'firebase/auth';

import './Login.css';
import ayzenLogo from '../../../Icons/ayzen-logo.png'; // Update this path if necessary

const Login = () => {
    const { userLoggedIn } = useAuth();
    const [loading, setLoading] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const auth = getAuth();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const credential = EmailAuthProvider.credential(email, password);
            await signInWithCredential(auth, credential);
            navigate('/chat');
        } catch (error) {
            if (error.code === 'auth/invalid-credential') {
                setError('Invalid credentials provided. Please register or try again.');

                navigate('/register');
            } else {
                setError(error.message);
            }
        }
    };
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);
    if (loading) {
        return (
            <div className="loader-container">
                <img className="loader" src={ayzenLogo} alt={"ayzen-loader"} />
            </div>
        );
    }
    return (
        <div className={"login-main"}>
            <div className={"bg-section"}>
                <section className={"section-bg1"}/>
                <section className={"section-bg2"}/>
                <section className={"section-bg3"}/>
                <section className={"section-bg4"}/>
            </div>
            <div className='login-container'>
                {userLoggedIn && <Navigate to="/chat" replace={true} />}
                <div className="login-form">
                    <div className='welcome-container'>
                        <div className='welcome-text-container'>
                            <h1 className='welcome-text'>Welcome</h1>
                        </div>
                        <div className='ayzen-logo-container'>
                            <img className={"ayzen-logo-login"} src={ayzenLogo} alt="ayzen-logo" />
                        </div>
                    </div>
                    <form className='login-form-container' onSubmit={handleSubmit}>
                        <div className="control block-cube block-input mb-4">
                            <input
                                className={"username h-10 pl-3 text-black"}
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Email'
                                required
                            />
                            <div className="bg-top">
                                <div className="bg-inner"></div>
                            </div>
                            <div className="bg-right">
                                <div className="bg-inner"></div>
                            </div>
                            <div className="bg">
                                <div className="bg-inner"></div>
                            </div>
                        </div>
                        <div className="control block-cube block-input mb-10">
                            <input
                                className={"password h-10 pl-3 text-black"}
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Password'
                                required
                            />
                            <div className="bg-top">
                                <div className="bg-inner"></div>
                            </div>
                            <div className="bg-right">
                                <div className="bg-inner"></div>
                            </div>
                            <div className="bg">
                                <div className="bg-inner"></div>
                            </div>
                        </div>
                        <button className="btn block-cube block-cube-hover w-36 h-8 text-white" type="submit" disabled={isSigningIn}>
                            <div className="bg-top">
                                <div className="bg-inner"></div>
                            </div>
                            <div className="bg-right">
                                <div className="bg-inner"></div>
                            </div>
                            <div className="bg">
                                <div className="bg-inner"></div>
                            </div>
                            <div className="text text-white">Login</div>
                        </button>
                    </form>
                    <div className='footer-container'>
                        <div className='footer-text-container mt-10'>
                            <p className='footer-text'>Don't have an account? <Link to="/register">Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

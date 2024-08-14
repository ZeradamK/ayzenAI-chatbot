import React, {useEffect, useState} from 'react';
import './Register.css';
import { Link , useNavigate } from 'react-router-dom';
import ayzenLogo from '../../../Icons/ayzen-logo.png';
import { Navigate } from 'react-router-dom';
import { doCreateUserWithEmailAndPassword } from '../../../Firebase/auth';
import { useAuth } from "../../../context/authContext";

const Register = () => {
    const { currentUser } = useAuth();
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [isRegistering, setIsRegistering] = useState(false);

    const validatePassword = (password) => {
        const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        return pattern.test(password);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
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
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (!validatePassword(formData.password)) newErrors.password = 'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number';
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            console.log('Form submitted successfully', formData);
            setFormData({
                fullName: '',
                email: '',
                password: '',
                confirmPassword: '',
            });
            setErrors({});
        }
        if (!isRegistering) {
            setIsRegistering(true);
            await doCreateUserWithEmailAndPassword(formData.email, formData.password);
        }

        if (!isRegistering) {
            setIsRegistering(true);
            try {
                await doCreateUserWithEmailAndPassword(formData.email, formData.password);
            } catch (error) {
                if (error.code === 'auth/email-already-in-use') {
                    // Alert the user and navigate to the login page if the email is already in use
                    alert('This email is already registered. Please log in.');
                    navigate('/login');
                } else if (error.code === 'auth/too-many-requests') {
                    // Handle too many requests error
                    alert('Too many requests. Please try again later.');
                }
                else {
                    console.error("Error registering user: ", error);
                    // Handle other errors (e.g., show an error message to the user)
                }
            } finally {
                setIsRegistering(false);
            }
        }

    };

    if (currentUser) {
        return <Navigate to="/chat" replace={true} />;
    }

    return (
        <div className={"register-main"}>
            <div className={"bg-section"}>
                <section className={"section-bg1"}/>
                <section className={"section-bg2"}/>
                <section className={"section-bg3"}/>
                <section className={"section-bg4"}/>
            </div>
            <div className='register-container'>
                <div className="register-form">
                    <div className='welcome-container'>
                        <div className='welcome-text-container'>
                            <h1 className='welcome-text'>Register</h1>
                        </div>
                        <div className='ayzen-logo-container'>
                            <img className={"ayzen-logo-login"} src={ayzenLogo} alt="ayzen-logo" />
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className='register-form-container'>
                        <div className="control block-cube block-input mb-4">
                            <input
                                className={"h-10 pl-3 text-black"}
                                type="text"
                                name="fullName"
                                placeholder='Full Name'
                                value={formData.fullName}
                                onChange={handleInputChange}
                            />
                            {errors.fullName && <p className='error-text'>{errors.fullName}</p>}
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
                        <div className="control block-cube block-input mb-4">
                            <input
                                className={"h-10 pl-3 text-black"}
                                type="email"
                                name="email"
                                placeholder='Email'
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                            {errors.email && <p className='error-text'>{errors.email}</p>}
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
                        <div className="control block-cube block-input mb-4">
                            <input
                                className={"h-10 pl-3 text-black"}
                                type="password"
                                name="password"
                                placeholder='Password'
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                            {errors.password && <p className='error-text'>{errors.password}</p>}
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
                                className={"h-10 pl-3 text-black"}
                                type="password"
                                name="confirmPassword"
                                placeholder='Confirm Password'
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                            />
                            {errors.confirmPassword && <p className='error-text'>{errors.confirmPassword}</p>}
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
                        <button className="btn block-cube block-cube-hover w-36 h-8 text-white" type="submit">
                            <div className="bg-top">
                                <div className="bg-inner"></div>
                            </div>
                            <div className="bg-right">
                                <div className="bg-inner"></div>
                            </div>
                            <div className="bg">
                                <div className="bg-inner"></div>
                            </div>
                            <div className="text text-white">Register</div>
                        </button>
                    </form>
                    <div className='footer-container'>
                        <div className='footer-text-container'>
                            <p className='footer-text'>Already have an account? <Link to="/login">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;

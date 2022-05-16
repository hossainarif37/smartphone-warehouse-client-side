import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import googleLogo from '../../../Images/googleLogo.png'

const Login = () => {
    const navigate = useNavigate();
    const handleNavigateRegister = () => {
        navigate('/register');
    };
    return (
        <div>

            <div className="container">
                <div className="formBox">
                    <h2 className='formTitle'>Login</h2>
                    <form>
                        <div className="inputBox">
                            <span>Email</span>
                            <input type="email" name="email" autoComplete='off' />
                        </div>
                        <div className="inputBox">
                            <span>Password</span>
                            <input type="password" name="password" autoComplete='off' />
                        </div>

                        <div className="inputBox">
                            <input type="submit" value="Login" />
                        </div>
                        <div className="inputBox">
                            <p>Don't have an account? <span onClick={handleNavigateRegister}>Sign Up</span></p>
                        </div>
                    </form>

                    <div className='d-flex align-items-center justify-content-center gap-2 mb-2'>
                        <div className='horizontal-line'></div>
                        <span>or</span>
                        <div className='horizontal-line'></div>
                    </div>
                    <p className='d-flex justify-content-center py-2 gap-3 align-items-center w-100 google-button'>
                        <img style={{ width: "25px", height: "25px" }} src={googleLogo} alt="" />
                        <span>Continue with Google</span>
                    </p>

                </div>
            </div>

        </div>
    );
};

export default Login;
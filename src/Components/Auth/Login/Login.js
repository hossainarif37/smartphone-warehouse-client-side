import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import googleLogo from '../../../Images/googleLogo.png'
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
import { sendPasswordResetEmail } from 'firebase/auth';

const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    });
    const [user] = useAuthState(auth);
    let navigate = useNavigate();
    let location = useLocation();

    let from = location?.state?.from?.pathname || "/";


    const handleEmail = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);
        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setErrors({ ...errors, email: "" });
        } else {
            setErrors({ ...errors, email: "Invalid email" });
            setUserInfo({ ...userInfo, email: "" });
        }
    }
    const handlePassword = (e) => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);
        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Please enter minimum 6 characters!" });
            setUserInfo({ ...userInfo, password: "" });
        }
    }
    const [
        signInWithEmailAndPassword,
        hookUser,
        loading,
        hookError,
    ] = useSignInWithEmailAndPassword(auth);

    const handleLogin = e => {
        e.preventDefault();
        signInWithEmailAndPassword(userInfo.email, userInfo.password);


    }
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    useEffect(() => {
        if (!hookError && user) {
            navigate(from, { replace: true });
            toast.success('Login Successful');
        } else {
            toast.error(hookError?.message)
        }
    }, [googleUser, hookError])



    const handleResetEmail = () => {
        sendPasswordResetEmail(userInfo.email);
        if (error) {
            toast.error(error.message)
        }
        else {
            toast('Email sent')
        }
    }


    const handleNavigateRegister = () => {
        navigate('/register');
    };

    return (
        <div>

            <div className="container">
                <div className="formBox">
                    <div className='text-center'>
                        <h2 className='formTitle'>Login</h2>
                    </div>
                    <form onSubmit={handleLogin}>
                        <div className="inputBox">
                            <span>Email</span>
                            <input onChange={handleEmail} type="email" name="email" />
                        </div>
                        <div className="inputBox">
                            <span>Password</span>
                            <input onChange={handlePassword} type="password" name="password" />
                        </div>

                        <div className="inputBox">
                            <input type="submit" value="Login" />
                        </div>
                    </form>
                    <button onClick={handleResetEmail} className='btn-link border-0 bg-white'>Reset Password?</button>
                    <div className="inputBox">
                        <p>Don't have an account? <span onClick={handleNavigateRegister}>Sign Up</span></p>
                    </div>


                    <div className='d-flex align-items-center justify-content-center gap-2 mb-2'>
                        <div className='horizontal-line'></div>
                        <span>or</span>
                        <div className='horizontal-line'></div>
                    </div>
                    <p onClick={() => signInWithGoogle()} className='d-flex justify-content-center py-2 gap-3 align-items-center w-100 google-button'>
                        <img style={{ width: "25px", height: "25px" }} src={googleLogo} alt="" />
                        <span>Continue with Google</span>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Login;
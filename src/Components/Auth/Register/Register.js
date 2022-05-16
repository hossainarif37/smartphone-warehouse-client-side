import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import googleLogo from '../../../Images/googleLogo.png';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';



const Register = () => {
    const [user] = useAuthState(auth);
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPass: "",
    });
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    });

    const handleEmailChange = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);

        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setErrors({ ...errors, email: "" });
        } else {
            setErrors({ ...errors, email: "Invalid email" });
            setUserInfo({ ...userInfo, email: "" });
        }

    };
    const handlePasswordChange = (e) => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);

        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Minimum 6 characters!" });
            setUserInfo({ ...userInfo, password: "" });
        }
    };
    const handleConfirmPasswordChange = (e) => {
        if (e.target.value === userInfo.password) {
            setUserInfo({ ...userInfo, confirmPass: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Password's don't match" });
            setUserInfo({ ...userInfo, confirmPass: "" });
        }
    };
    const [
        createUserWithEmailAndPassword,
        hookUser,
        loading,
        hookError,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const handleRegister = e => {
        e.preventDefault();

        if (!errors.password) {
            createUserWithEmailAndPassword(userInfo.email, userInfo.password);
        }
        else {
            toast.error("Confirm password didn't match");
        }

    }
    useEffect(() => {
        if (!hookError && user) {
            navigate('/');
            toast.success('Registration Successful');
        } else {
            toast.error(hookError?.message)
        }
    }, [user, googleUser, hookError])
    const navigate = useNavigate();
    const handleNavigateLogin = () => {
        navigate('/login');
    }
    console.log(userInfo.email, userInfo.password, userInfo.confirmPass);
    return (
        <div>
            <div className="container">
                <div className="formBox">
                    <div className='text-center'>
                        <h2 className='formTitle'>Register</h2>
                    </div>
                    <form onSubmit={handleRegister}>
                        <div className="inputBox">
                            <span>Email</span>
                            <input onChange={handleEmailChange} type="email" name="email" required />
                        </div>
                        {errors?.email && <p className="text-danger">{errors.email}</p>}
                        <div className="inputBox">
                            <span>Password</span>
                            <input onChange={handlePasswordChange} type="password" name="password" required />
                        </div>
                        <div className="inputBox">
                            <span>Confirm Password</span>
                            <input onChange={handleConfirmPasswordChange} type="password" name="confirmPass" required />
                        </div>
                        {errors?.password && <p className="text-danger">{errors.password}</p>}

                        <div className="inputBox">
                            <input type="submit" value="Sign Up" />
                        </div>
                        <div className="inputBox">
                            <p>Already have an account? <span onClick={handleNavigateLogin}>Login</span></p>
                        </div>
                    </form>
                    <div className='d-flex align-items-center justify-content-center gap-2 mb-2'>
                        <div className='horizontal-line'></div>
                        <span>or</span>
                        <div className='horizontal-line'></div>
                    </div>
                    <p onClick={() => signInWithGoogle()} className='d-flex justify-content-center py-2 gap-3 align-items-center w-100 google-button '>
                        <img style={{ width: "25px", height: "25px" }} src={googleLogo} alt="" />
                        <span>Continue with Google</span>
                    </p>
                </div>
            </div>


        </div>
    );
};

export default Register;
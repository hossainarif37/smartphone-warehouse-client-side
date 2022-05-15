import React from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const handleNavigateLogin = () => {
        navigate('/login');
    }

    return (
        <div>
            <section>
                <div className="imgBox">
                    <img className='img-fluid w-100' src='' alt="" />
                </div>
                <div className="contentBox">
                    <div className="formBox">
                        <h2>Register</h2>
                        <form>
                            <div className="inputBox">
                                <span>Username</span>
                                <input type="text" name="username" autoComplete='Off' required />
                            </div>
                            <div className="inputBox">
                                <span>Email</span>
                                <input type="email" name="email" required />
                            </div>
                            <div className="inputBox">
                                <span>Password</span>
                                <input type="password" name="password" required />
                            </div>

                            <div className="inputBox">
                                <input type="submit" value="Sigp Up" />
                            </div>
                            <div className="inputBox">
                                <p>Already have an account? <span onClick={handleNavigateLogin}>Login</span></p>
                            </div>
                        </form>
                        <h3 className="socialLoginText">Continue with social media</h3>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;
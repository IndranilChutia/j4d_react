import React, { useEffect } from 'react';
import './page_styles/login.css'

import InputField from '../components/globalComponents/InputField';

import loginImg from '../assets/loginPageImg/login_img.png'
import userProfileImg from '../assets/signupPageImg/userProfile.png'
import passwordImg from '../assets/signupPageImg/password.png'
import { Link } from 'react-router-dom';
import SubmitButton from '../components/globalComponents/SubmitButton';



function Login() {

    useEffect(()=>{
        document.title="J4D | Login";
    });

    return (
        <div className="login-main d-flex align-items-center">

            <div className="d-none d-xl-block img-container">
                <img className='imgg 'src={loginImg} alt="login_img" />
            </div>

            <div className="d-flex m-auto align-items-center justify-content-center">
                <div className="login-container">
                    <h1 className="login-title text-center">LOGIN</h1>
                    <div className="form-container bg-white py-1 py-xl-4">
                        <form action="" id="login-form">

                            {/* Input Fields */}
                            <InputField labelText={"Username"}  type={"text"} id={"username"} imgSrc={userProfileImg}/>
                            <InputField labelText={"Password"}  type={"password"} id={"password"} imgSrc={passwordImg}/>

                            {/* Remember Me Checkbox */}
                            <span className="d-flex justify-content-between">

                                <span className="d-flex align-items-center">
                                    <input type="checkbox" name="remember-me" id="remember-me"/>
                                    <label className="remember-text px-1" htmlFor="remember-me">Remember Me</label>
                                </span>
                                <span className="py-1">
                                    <Link to={"/"} className='forgot-password'>Forgot Password?</Link>
                                </span>

                            </span>

                        </form>

                        {/* Login Button */}
                        <div className="my-4">
                            <SubmitButton text={"Login"} form="login-form"/>
                        </div>
                        

                        {/* Other Methods Login */}
                        <div className="other-methods my-3">
                            
                            <div className="d-flex justify-content-center align-items-center">
                                <hr className="line" />
                                <div className="other-methods-text d-inline-block">Or Sign in with</div>
                                <hr className="line" />
                            </div>

                            <div className="d-flex justify-content-around px-5 my-3">
                                {/* Google Logo */}
                                <Link to={"#"}>
                                    <img className='google_logo' src="https://res.cloudinary.com/du5vlissg/image/upload/v1674555958/logos_google-icon_oerafv.png" alt="google-logo" />
                                </Link>

                                {/* LinkedIn Logo */}
                                <Link to={"#"}>
                                    <img className='linkedin_logo' src="https://res.cloudinary.com/du5vlissg/image/upload/v1674556022/Path_2520_c3j5f1.png" alt="linkedin-logo" />
                                </Link>
                            </div>
                            <p className="text_3 text-center">Don't have an account yet? 
                                <Link to={"/signup"} className="blue text-decoration-none"> Register Today!</Link>
                            </p>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
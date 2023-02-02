import React, { useEffect } from 'react';
import {Col, Container, Row} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './page_styles/signup.css'

// Components
import InputField from '../components/globalComponents/InputField';
import FloatingInputField from '../components/signupComponents/FloatingInputField';
import PhoneInput from '../components/signupComponents/PhoneInput';
import UploadFile from '../components/signupComponents/UploadFile';
import ImgCarousel from '../components/signupComponents/ImgCarousel';
import SubmitButton from '../components/globalComponents/SubmitButton';

import googleLogo from '../assets/google.png';

// Form Images
import emailImg from '../assets/signupPageImg/email.png'
import phoneImg from '../assets/signupPageImg/phone.png'
import passwordImg from '../assets/signupPageImg/password.png'
import userProfileImg from '../assets/signupPageImg/userProfile.png'
import workStatusImg from '../assets/signupPageImg/workStatus.png'
import resumeImg from '../assets/signupPageImg/resume.png'




const Signup = () => {


    useEffect(()=>{
        document.title="J4D | SignUp"
    });


    return (
        <main className='main'>
            <Container className='d-flex align-items-center justify-content-center vh-100'>
                <div className="hero-container">
                    <Row className='w-100 gx-0 rounded-3 shadow-sm'>
                        {/* Left Part */}
                        <Col className='bg-white'>
                            <div className="signup-container">
                                <div className="top-part px-4 px-lg-0">
                                    <h2 className="register-text medium-text">Register Now</h2>
                                    <h1 className="signup-heading">Sign Up For <span className='blue'>Free</span></h1>
                                    <h3 className="tagline-text">Already have an Account? <Link to={'/login'} className="blue d-inline-block">Sign In</Link></h3>
                                </div>

                                <div className="form-container bg-white px-4 py-1 py-xl-2">
                                    <form id='signup-form'>
                                        {/* Input Fields */}
                                        <InputField labelText={"First Name"}  type={"text"} id={"firstName"} imgSrc={userProfileImg}/>
                                        <InputField labelText={"Last Name"}  type={"text"} id={"lastName"} imgSrc={userProfileImg}/>
                                        <InputField labelText={"Email"}  type={"email"} id={"email"} imgSrc={emailImg}/>
                                        <InputField labelText={"Password"}  type={"password"} id={"password"} imgSrc={passwordImg}/>
                                        <InputField labelText={"Confirm Password"}  type={"password"} id={"confirmPassword"} imgSrc={passwordImg}/>
                                        

                                        <FloatingInputField labelText={"Date of Birth"}  type={"date"} id={"dateOfBirth"} />

                                        <PhoneInput labelText={"Phone"} id={"phone"} imgSrc={phoneImg}/>

                                        <InputField labelText={"Work Status"}  type={"text"} id={"workStatus"} imgSrc={workStatusImg}/>

                                        {/* Gender */}
                                        <div className="gender-selector">
                                        <div className="gender-label">Gender:</div>
                                       
                                            <span className="options">
                                                <input className="gender-radio" type="radio" name="gender" id="male" value="male"/>
                                                <label className="radio-label" htmlFor="male">Male</label>
                                            </span>    

                                            <span className="options">
                                                <input className="gender-radio" type="radio" name="gender" id="female" value="female"/>
                                                <label className="radio-label" htmlFor="female">Female</label>  
                                            </span>
                                        
                                            <span className="options">
                                                <input className="gender-radio" type="radio" name="gender" id="other" value="other"/>
                                                <label className="radio-label" htmlFor="other">Other</label>
                                            </span>
                                        </div>

                                        <UploadFile labelText={"Upload Resume"}  type={"file"} id={"resumeUpload"} imgSrc={resumeImg}/>
                                    </form>

                                    {/* Signup Buttons */}
                                    <div className="signup-buttons-container pt-3 w-100">
                                        {/* Native Signup Button */}
                                        <SubmitButton form="signup-form" text="Sign Up"/>

                                    {/* Google Signup Button */}
                                        <button className="signup-button px-2 flex-shrink-1 py-3 google-submit w-100"><img className="google-img" src={googleLogo} alt='google-img'/> Sign Up With Google</button>
                                    </div>

                                </div>

                                {/* Terms and Conditions */}
                                <span className="d-flex align-items-center">
                                    <input type="checkbox" name="terms-and-conditions" id="terms-and-conditions"/>
                                    <label className="terms-text px-1" htmlFor="terms-and-conditions">By Clicking the Sign Up button , you therefore agree to the <Link to="/" className="blue">Privacy Policy</Link> . </label>
                                </span>



                            </div>
                        </Col>
                        {/* Right Part */}
                        <Col className='border h-auto d-none d-lg-block'>
                            {/* Carousel */}
                            <ImgCarousel/>
                        </Col>
                    </Row>
                
                </div>
            </Container>
        </main>
    );
};

export default Signup;
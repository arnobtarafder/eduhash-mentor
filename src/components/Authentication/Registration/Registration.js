import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Registration.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import SocialLogin from '../SocialAuth/SocialAuth';
import Loading from '../../Shared/Loading/Loading';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    const [ConfirmPassword, setConfirmPassword] = useState(" ")
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth)

    const navigate = useNavigate()

    const navigateLogin = () => {
        navigate("/login");
    }

    if (loading || updating) {
        return <Loading />
    }

    if (user) {
        // navigate("/home");
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.ConfirmPassword.value;
        const agree = event.target.terms.checked;

        if (password !== confirmPassword) {
            //    return setError("password don't matched ")
            return toast.error(" password don't matched ")
                
            }
        // if (agree) {
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name })
        // console.log("Updated profile")
        navigate("/")
        // }

        createUserWithEmailAndPassword(email, password)
        // console.log(email);
    }

    return (
        <div className='registration-section'>
            <div id="login-box" className='register-form mt-5'>
            {/* <h1 style={{ textAlign: "center" }}>Please Register</h1> */}

            <form onSubmit={handleRegister}>
                {/* <br />
                <br />
     <input onClick={() => setAgree(!agree)} className='mt-3 me-2' type="checkbox" name="terms" id="terms" />
            
               {/* <label className={agree ? 'text-primary' : 'text-danger'} htmlFor="terms">Accept Genius Car Terms and Conditions</label> */}
                {/* <label className={`ms-0 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept EduHash Terms and Conditions</label>

                <input
                    disabled={!agree}
                    className='btn btn-primary d-block mt-2'
                    type="submit"
                    value="Register" />
                <br />
            </form>  */}

            {/* <SocialLogin /> */}

                <div class="left">
                    <h1>Please Register</h1>

                    <input type="text" name="name" placeholder="Username" required/>
                    <input type="text" name="email" placeholder="E-mail" required/>
                    <input type="password" name="password" placeholder="Password" required/>
                    <input type="password" name="ConfirmPassword" placeholder="Confirm-Password" required/>
                    {/* <input type="password" name="password2" placeholder="Retype password" /> */}


                    <p>Already have an account? <Link to="/login" className='text-primary text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>

                    <input onClick={() => setAgree(!agree)} className='mt-3 me-2' type="checkbox" name="terms" id="terms" />
                    <label className={`ms-0 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept EduHash Terms and Conditions</label>

                    <input
                        disabled={!agree} 
                        type="submit" 
                        className='btn btn-primary d-block mt-3'
                        value="Register" />
                </div>
                </ form>

                <div class="right">
                    <span className="loginwith mb-5">Sign in with<br />social network</span>

    
                    <SocialLogin />
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Register;
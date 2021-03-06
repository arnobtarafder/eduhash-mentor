import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialAuth/SocialAuth';

const Login = () => {
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const [errors, setError] = useState("")
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth)

      if(loading || sending) {
          return <Loading />
      }

      if(user) {
        //   navigate("/");
        toast('successfully done!', {
            icon: '👏', 
          });
        navigate(from, {replace: true});
      }

      if(error) {
        return (
        errorElement = <div>
            <p className="text-danger">Error: {error?.message}</p>
            </div>
        )
    }


    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // if(password?.length < 5){
        //     return alert("too short!")
        // }

        signInWithEmailAndPassword(email, password)
        // console.log(email, password);
    }

    const navigateRegister = () => {
        navigate("/registration")
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
 
        if(email) {
            await sendPasswordResetEmail(email);
            toast("Sent email");
        }
        else{
            toast("Please enter your email address!!");
        }
    }

    return (
        <div className='container w-50 mx-auto mt-5 mb-5 pb-5'>
            <h1 className='text-center text-primary pt-5'>Please Login</h1>
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
                </Form.Group>
                <Button variant="primary w-50 d-block mx-auto mb-3 rounded-pill mb-4" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
            <p style={{ color: 'red' }} > {error} </p>
                            {
                                error && <p>  {error?.message} </p> 
                            } 

                <p>New to EduHash Mentor? <Link to="/registration" className='text-primary text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>

                <p>Forget Password? <button className='btn btn-link text-decoration-none text-danger' onClick={resetPassword}>Reset Password</button></p>
                <SocialLogin />
                <ToastContainer />
        </div>
    );
};

export default Login;
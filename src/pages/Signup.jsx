import React, { useState, useEffect } from 'react'
import {auth} from '../config/firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import '../stylesheets/Signup.css'

function Signup() {

    //auth
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    //auth
    const signUp = async (e) => {
        // e.preventDefault();
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // if Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/login")
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            

            if (errorCode === 'auth/user-already-signed-in') {
                setFormErrors({ alreadySignedIn: 'You are already signed in.' });
              } else {
                console.log(errorCode, errorMessage);
                alert('Signin error');
              }

        });
 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate({ email, password, confirmPassword });
        setFormErrors(errors);
    
        if (Object.keys(errors).length === 0) {
          setIsSubmit(true);
          signUp();
        }
      };

      const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') {
          setEmail(value);
        } else if (name === 'password') {
          setPassword(value);
        } else if(name === 'confirmPassword'){
            setConfirmPassword(value);
        }
      };
    

      useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          //none
        }
      }, [formErrors, isSubmit]
      );


      const validate = (values) => {

        const errors = {}
        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(!values.email){
          errors.email = "Email is required!";
        } else  if (!regex.test(values.email)){
          errors.email = "This is not a valid email"
        }
        if(!values.password){
          errors.password = "Password is required!";
        } else if (values.password.length< 6){
          errors.password = "Password must be more than 6 characters";
        } else if (values.password.length > 10){
          errors.password = "Password cannot be more than 10 characters";
        }
        if(!values.confirmPassword){
          errors.confirmPassword = "Confirm Password is required";
        } else if (values.confirmPassword !== values.password){
          errors.confirmPassword = "Confirm Password is incorrect";
        }
    
        return errors;
    }
    
  return (
    <div className='signup'>
        <form onSubmit={handleSubmit}>
        <h1>Create an account</h1>
        <div className='form'>
            <div className='field'>
                <input type='email' name='email' placeholder='Enter your Email' value={email}
              onChange={handleChange}/>
                <p>{formErrors.email}</p>
            </div>

            <div className='field'>
                <input type='password' name='password' placeholder='Enter Password' value={password}
              onChange={handleChange}/>
                <p>{formErrors.password}</p>
            </div>
            <div className='field'>
                <input type='password' name='confirmPassword' placeholder='Enter Password' value={confirmPassword}
                onChange={handleChange}/>
                <p>{formErrors.confirmPassword}</p>
            </div>
            <button className='signup-submit-btn' type='submit'>Sign Up </button>
        </div>
        <div className='have-account'><p>Already have an an  account? <a href='/login'>Log in</a></p></div>
    </form>
</div>
  )
}

export default Signup
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase-config';
import '../stylesheets/Login.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const login = async () => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate('/weatherData');
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert('Login error');
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate({ email, password });
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmit(true);
      login();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      //none
    }
  }, [formErrors, isSubmit]
  );

  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!values.email) {
      errors.email = 'Email is required!';
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email';
    }

    if (!values.password) {
      errors.password = 'Password is required!';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be more than 6 characters';
    } else if (values.password.length > 10) {
      errors.password = 'Password cannot be more than 10 characters';
    }

    return errors;
  };

  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
        <h1>Welcome Back</h1>
        <div className='form'>
          <div className='field'>
            <input
              type='email'
              name='email'
              placeholder='Enter your Email'
              value={email}
              onChange={handleChange}
            />
            <p>{formErrors.email}</p>
          </div>

          <div className='field'>
            <input
              type='password'
              name='password'
              placeholder='Enter Password'
              value={password}
              onChange={handleChange}
            />
            <p>{formErrors.password}</p>
          </div>
          <button className='login-submit-btn' type='submit'>
            Login
          </button>
        </div>
        <div className='have-account'>
          <p>
            Don't have an account? <a href='/signup'>Sign Up</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;

import React from 'react'

function Login() {
  return (
    <div className='login'>
        <form>
            <h1>Welcome Back</h1>
            <div className='form'>
                <div className='field'>
                    <input type='email' name='email' placeholder='Enter your Email'/>
                    <p>Error</p>
                </div>

                <div className='field'>
                    <input type='password' name='password' placeholder='Enter Password'/>
                    <p>Error</p>
                </div>
                <button className='login-submit-btn' type='submit'>Login</button>
            </div>
            <div className='have-account'><p>Dont have an account <a href='#'>Sign Up</a></p></div>
        </form>
    </div>
  )
}

export default Login
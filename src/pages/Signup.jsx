import React from 'react'

function Signup() {
  return (
    <div className='signup'>
        <form>
        <h1>Create an account</h1>
        <div className='form'>
            <div className='field'>
                <input type='email' name='email' placeholder='Enter your Email'/>
                <p>Error</p>
            </div>

            <div className='field'>
                <input type='password' name='password' placeholder='Enter Password'/>
                <p>Error</p>
            </div>
            <div className='field'>
                <input type='password' name='confirmPassword' placeholder='Enter Password to confirm'/>
                <p>Error</p>
            </div>
            <button className='login-submit-btn' type='submit'>Login</button>
        </div>
        <div className='have-account'><p>Dont have an account <a href='#'>Sign Up</a></p></div>
    </form>
</div>
  )
}

export default Signup
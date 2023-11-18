import React from 'react';
import classes from './Login.module.css';

const Login = () => {
  return (
    <div className={classes.main}>
        <h1>Login</h1>
        <form className={classes.form}>
            <div className={classes.input}>
                <label>Username</label>
                <input type='text'/>
            </div>
            <div className={classes.input}>
                <label>Password</label>
                <input type='password'/>
            </div>
            <div className={classes.remember}>
                <div>
                    <input type='checkbox'/>
                    <span>Remember me</span>
                </div>
                <button className={classes.rembtn}>Forgot Password?</button>
            </div>
            <button className={classes.formbtn}>Login</button>
            <div className={classes.register}>
                <span>Don't have an account?</span>
                <button className={classes.regbtn}>Register</button>
            </div>
        </form>
    </div>
  )
}

export default Login;
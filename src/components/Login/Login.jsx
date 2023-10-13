import React, { useContext, useState } from 'react';
import "./Login.css";
import logo from "../../assets/google.png"
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';
const Login = () => {
    const {signIn}=useContext(AuthContext)
    const [error,setError]=useState(null)
    const handleSignIn =(e)=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
    

        signIn(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
             form.reset()
        })
        .then(error=>{
            const message =error?.message;
           
        })

    }


    return (
        <div className='form-container'>
            <h2 className='form-title'>Login </h2>
            <div className="form-area">
            <p className='text-error'>{error}</p>
                <form onSubmit={handleSignIn}>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email"   required />
                    </div>
                    <br />
                    <div className="form-control">
                        <label className='password-label' htmlFor="password">Password</label>
                        <input type="password" name="password"   required />
                    </div>
                        
                    <input className='btn-submit' type="submit" value="Login" />
                </form>
                <p><small>New to here? <Link to='/signup'>Sign Up</Link></small></p>

                {/* <div className='google-area'>
                <button><img width="25px" src={logo} alt="" />Continue With Google</button>
            </div> */}
            </div>
        </div>
    );
};

export default Login;
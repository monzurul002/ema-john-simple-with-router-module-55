import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';


const SignUp = () => {
    const [error, setError] = useState("");
   const {createUser}=useContext(AuthContext)

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        //eror show
        setError(" ")
        if (password !== confirmPassword) {
            return setError("password doesn't match.")
        }
        
        else if(!/(?=.*[!@#$&*])/.test(password)){
            return setError("password must contain a special character.")
        }
            //goog password authentication


           createUser(email,password)
            .then((userCredential) => {
              // Signed up 
              const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                           const errorMessage = error.message;
              setError("Password should be at least 6 characters")
              console.log(errorMessage);
            });
          


        form.reset()
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up </h2>
            <div className="form-area">
                <form onSubmit={handleSignUp} >
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email"  required />
                    </div>
                    <br />
                    <div className="form-control">
                        <label className='password-label' htmlFor="password">Password</label>
                        <input type="password" name="password"  required />
                    </div>
                    <div className="form-control">
                        <label className='password-label' htmlFor="confrim-password">Confirm Password</label>
                        <input type="password" name="confirmPassword" id="" required />
                    </div>

                    <input className='btn-submit' type="submit" value="Sign Up" />
                    <p className='text-error'>{error}</p>
                </form>
                <p><small>New to here? <Link to='/login'>Login</Link></small></p>
            </div>
        </div>
    );
};

export default SignUp;
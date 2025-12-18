import Lottie from 'lottie-react';
import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import loginLottie from '../../assets/lotties/Login.json'
import { AuthContext } from '../../Context/authContext/AuthContext';
import SocialLogin from '../Shared/SocialLogin';

const Login = () => {
    const { signInUser } = use(AuthContext);
    const navigate = useNavigate();
   
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // login
        signInUser(email, password)
            .then(result => {
                console.log(result.user)
               navigate('/')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
    }
    return (
        <div className="hero bg-base-200 md:min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">

                    <Lottie style={{ width: '300px', }} animationData={loginLottie} loop={true} ></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-4xl font-bold">Login now!</h1>
                        <form onSubmit={handleLogin}>
                            <fieldset className="fieldset">


                                <label className="label">Email</label>
                                <input type="email" className="input" name='email' placeholder="Email" />

                                <label className="label">Password</label>
                                <input type="password" className="input" name='password' placeholder="Password" />

                                <div>
                                    <a className="link link-hover">Forgot password?</a>
                                </div>
                                <button type='submit' className="btn btn-neutral mt-4">Login</button>
                                <p className='text-center pt-1' > If Don't have account ? <Link className='text-red-500 font-bold' to='/register'>Register</Link></p>
                            </fieldset>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
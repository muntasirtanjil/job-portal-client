import Lottie from 'lottie-react';
import React, { use } from 'react';
import registerLottie from '../../assets/lotties/Register.json'
import { AuthContext } from '../../Context/authContext/AuthContext';



const Register = () => {
    const { createUser } = use(AuthContext)
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value

        console.log(name, email, password)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode, errorMessage)
            });

    }
    return (
        <div className="hero bg-base-200 min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">

                    <Lottie style={{ width: '200px', }} animationData={registerLottie} loop={true} ></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-4xl font-bold">Register now!</h1>
                        <form onSubmit={handleRegister}>
                            <fieldset className="fieldset">

                                <label className="label">Name</label>
                                <input type="text" className="input" name='name' placeholder="Name" />

                                <label className="label">Email</label>
                                <input type="email" className="input" name='email' placeholder="Email" />

                                <label className="label">Password</label>
                                <input type="password" className="input" name='password' placeholder="Password" />

                                <div>
                                    <a className="link link-hover">Forgot password?</a>
                                </div>
                                <button type='submit' className="btn btn-neutral mt-4">Register</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
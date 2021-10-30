import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {

    const {googleSignIn,user,logOut,setIsLoading,setUser}=useAuth();
    const history=useHistory();
    const location=useLocation();
    console.log(location);

    const redirect_uri= location.state?.from ||'/';


    const handleGoogleSignIn=()=>{
        
        googleSignIn()
        .then((result) => {

            const user = result.user;
            console.log(user);
            setUser(user);
            
            history.push(redirect_uri);
        
           
        }).finally(() => {
            setIsLoading(false)
        })
    }


    return (
        <div className="login-page">
            <div className="container">
                <form className="w-50 mx-auto mt-5">
                    <div className="mb-3">
                        <h3 className="mb-5">Create account</h3>
                        
                        <div>
                            <label htmlFor="exampleInputName" className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleInputName" />
                        </div>


                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>

                    {/* <span className="text-danger">{error}</span> */}

                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">already Registered ?</label>
                    </div>

                    <button className="btn btn-primary me-3">Login</button>
                    <button className="btn btn-primary">Register</button>

                </form>

                <div className="text-center">
                    <p>or login with-</p>

                    <button onClick={handleGoogleSignIn} className="btn btn-warning">sign in google</button>

                </div>
            </div>
        </div>
    );
};

export default Login;
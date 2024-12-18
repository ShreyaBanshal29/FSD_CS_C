import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';

const Login = ({ regDataLogin }) => {
  const [email , setEmail] = useState("");
      const [password , setPassword] = useState("");
      const navigate = useNavigate();
      function verification(e) {
        e.preventDefault();
        if (regDataLogin.email == email && regDataLogin.password == password) {
          alert("We have made it")
          navigate('/dashboard');
        }
        else {
          alert("Sorry, wrong credentials")
        }
    
      }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <section className="vh-100" style={{ backgroundColor: '#eee' }}>
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-12 col-xl-11">
                  <div className="card text-black" style={{ borderRadius: '25px' }}>
                    <div className="card-body p-md-5">
                      <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                          <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

                          <form className="mx-1 mx-md-4">

                            {/* Email Input */}
                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <input type="email" onChange={(e) => {
                  setEmail(e.target.value);
                }} id="loginEmail" className="form-control" />
                                <label className="form-label" htmlFor="loginEmail">Your Email</label>
                              </div>
                            </div>

                            {/* Password Input */}
                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <input type="password" onChange={(e) => {
                  setPassword(e.target.value);
                }} id="loginPassword" className="form-control" />
                                <label className="form-label" htmlFor="loginPassword">Password</label>
                              </div>
                            </div>

                            {/* Remember Me Checkbox */}
                            <div className="form-check d-flex justify-content-center mb-4">
                              <input className="form-check-input me-2" type="checkbox" value="" id="rememberMe" />
                              <label className="form-check-label" htmlFor="rememberMe">
                                Remember me
                              </label>
                            </div>

                            {/* Submit Button */}
                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                              <button type="button" onClick={verification} className="btn btn-primary btn-lg">Login</button>
                            </div>

                          </form>

                        </div>
                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                          {/* Login Image */}
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="img-fluid"
                            alt="Login Illustration"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default Login;

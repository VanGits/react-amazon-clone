import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utilities/firebase";
import "../styles/Login.css";
import { MdDangerous } from "react-icons/md";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const signIn = (e) => {
    e.preventDefault(); // prevents refresh
    setError("");
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="error__catch-wrapper">{error && 
      <div className="error__catch">
        <MdDangerous className="md-dangerous"/>
        <div className="error_2nd">
        <h5>There was a problem</h5>
        <p>{error}</p>
        </div>
      </div>}
      </div>

      <div className="login__container">
        <h1 className="login__signInText">Sign-In</h1>
        <h5 className="login__email">Email</h5>
        <input
          type="email"
          className="login__input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <h5 className="login__email">Password</h5>
        <input
          type="password"
          className="login__input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={signIn}>
          Sign-In
        </button>
        <p>
          By continuing, you agree to Amazon's (Fake Clone){" "}
          <span className="link-btn noclick">Conditions of Use</span> and{" "}
          <span className="link-btn noclick">Privacy Notice</span>.
        </p>

        <a href="" className="link-btn noclick">
          Need help?
        </a>
      </div>
      <div className="login__signUpContainer">
        <p className="login__signUpTitle">New to Amazon?</p>
        <Link className="login__signUpContainer" to="/register">
          <button>Create your Amazon account</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;

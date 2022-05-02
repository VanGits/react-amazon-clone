import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Register.css";
import { auth } from "../utilities/firebase";
import { MdDangerous } from "react-icons/md";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [place, setPlace] = useState("")
  const [zipCode, setZipCode] = useState("")
  const [error, setError] = useState("");
  const navigate = useNavigate()
  const register = e => {
    e.preventDefault()
    setError("");
    auth
    .createUserWithEmailAndPassword(email, password)
    .then((auth) => {
        if(auth) {
            navigate("/")
        }
    })
    .catch(error => setError(error.message))
}
    console.log(place)
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
        <h1 className="login__signInText">Create account</h1>
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
          placeholder="At least 6 characters"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <h5 className="login__email">City (Optional)</h5>
        <input
          type="text"
          className="login__input"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />
        <h5 className="login__email">Zip Code (Optional)</h5>
        <input
          type="text"
          className="login__input"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        />
        <button type = "submit" onClick={register}>Continue</button>
        <p>
          By continuing, you agree to Amazon's (Fake Clone){" "}
          <span className="link-btn noclick">Conditions of Use</span> and{" "}
          <span className="link-btn noclick">Privacy Notice</span>.
        </p>

        <p>Already have an account? <Link to = "/login" className= "link-btn link-register">Sign-In</Link></p>
      </div>
    </div>
  );
};

export default Register;

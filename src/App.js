import Home from "./components/Home";
import Header from "./components/Header";

import "./styles/App.css";
import { BrowserRouter, Router, Routes, Route, useNavigate } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login"
import { forwardRef, useEffect } from "react";
import { auth } from "./utilities/firebase";

import Register from "./components/Register";
import { useStateValue } from "./data/StateProvider";
import Noty from "./components/Noty";
import Footer from "./components/Footer";



function App() {
  const [{ user }, dispatch] = useStateValue();

 
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        //user is logged in or just logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        //user is logged out
       
        dispatch({
          type: "SET_USER",
          user: null
        })
        
      }
    })
  }, [])
  
  return (
    <BrowserRouter>
        <div className="app">
        <Routes>
          <Route path="/login" element= {<Login/>}></Route>
          <Route path="/register" element={<Register/>}/>
          <Route path="/checkout" element={[<Header />, <Checkout />, <Noty/>, <Footer/>]} />
          <Route path="/" element={[<Header />, <Home />, <Noty/>,<Footer/>]} />
        </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { useState } from "react";
import axios from "axios";
import { Navigate , useNavigate} from 'react-router-dom';
import './Login.css'
export default function Login(props) {
    const navigate = useNavigate(); 
    const [detail, setDetail] = useState({email: "", password: ""  });
    const [error, setError] = useState("");

    function changeHandler(e) {
        const name = e.target.name;
        const value = e.target.value;
        setDetail({ ...detail, [name]: value });
    }

    function moveToSignup(e){
      e.preventDefault();
      navigate("/sign-up")
    }
    
    function uploadHandler(e) {
        e.preventDefault();
        
        let errorMsg = "";    
        const data = {
          emailID: detail.email,
          passwordEn: detail.password,
        };
        console.log(data);
        
    let url="https://gosocialapi.herokuapp.com/api/userService/login"
    let milan="";
        
        axios
          .post(url, data)
          .then((result)=>{
            console.log(result.data);
            milan+=result.data;
            if(milan==""){
              setError("Incorrect email or password");
            } 
            else{
              localStorage.setItem("username",milan);
              navigate("/home");
            }
          }).catch((err)=>{
            console.log(err);
          });
      }
    return (
      <form onSubmit={uploadHandler}>
        <h3 >Sign In</h3>
        <h3 className='error'> {error} </h3>
        <div className="mb-4">
          <label>Email address</label>
          <input
            name='email'
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={detail.email}
            onChange={changeHandler}
          />
        </div>
        <div className="mb-4">
          <label>Password</label>
          <input
            name='password'
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={detail.password}
            onChange={changeHandler}
          />
        </div>
        
        <div className="e-grid">
          <button type="submit" className="signin-btn" onClick={uploadHandler} >
            Submit
          </button>
          <button  className="move-to-signup" onClick={moveToSignup} >
            Rather Sign up
          </button>
        </div>
        
      </form>
    )
}
import { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import './Signup.css'

export default function SignUp(props) {

     const navigate = useNavigate(); 
  const [detail, setDetail] = useState({ username: "", email: "", password: ""  });
  const [error, setError] = useState("");

  function changeHandler(e) {
    const name = e.target.name;
    const value = e.target.value;
    setDetail({ ...detail, [name]: value });
  }

  function uploadHandler(e) {
    e.preventDefault();

    const data = {
      userName:detail.username,
      emailID: detail.email,
      passwordEn: detail.password,
      
  };

    let url="https://gosocialapi.herokuapp.com/api/userService/save"
    let milan="";
        
        axios
          .post(url, data)
          .then((result)=>{
           // console.log(result.data);
             milan+=result.data;
             if(milan=="Error"){
              setError("Data Provided is already taken");
            } 
            else{
              localStorage.setItem("username",milan);
              navigate("/home");
            }
          }).catch((err)=>{
            console.log(err);
          });
    
   
    localStorage.setItem("username", data.emailID);



   }
  
    return (
      <form onSubmit={uploadHandler}>
        <h3>Sign Up</h3>
        <h4 className="error">{error}</h4>
        <div className="mb-3">
          <label>username</label>
          <input
            name="username"
            type="text"
            className="form-control"
            placeholder="username"
            value={detail.username}
            onChange={changeHandler}
          />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
          name="email"
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={detail.email}
            onChange={changeHandler}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            name="password"
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={detail.password}
            onChange={changeHandler}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="signup-btn" onClick={uploadHandler}>
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    );
  }
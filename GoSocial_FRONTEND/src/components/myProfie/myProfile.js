import React, { useState } from "react";
import { Navigate } from "react-router";
import { useNavigate } from "react-router";
import axios from "axios";

export default function MyProfile(props){
   const [detail, setDetail] = useState({userID:"", passwordEn: "",emailID:"",userName:""});
   const navigate = useNavigate();


   let url= "https://gosocialapi.herokuapp.com/api/userService/getAllUsers/" + localStorage.getItem("username");
      
       axios
         .get(url)
         .then((result)=>{
           console.log(result.data);
           setDetail({...result.data});
           
         }).catch((err)=>{
           console.log(err);
         });
    
  function BackToHome(){
    navigate("/home");
  }

    return(
        <section className="vh-100" style={{backgroundColor: '#f4f5f7'}}>
         
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-6 mb-4 mb-lg-0">
              <div className="card mb-3" style={{borderRadius: '.5rem'}}>
                <div className="row g-0">
                  <div className="col-md-4 gradient-custom text-center text-white" style={{borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem'}}>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp" alt="Avatar" className="img-fluid my-5" style={{width: '80px'}} />
                     <h5>Go Social User</h5> 
                    <i className="far fa-edit mb-5" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-4">
                      <h6>My Information</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Email</h6>
                          <p className="text-muted">{detail.emailID}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Username</h6>
                          <p className="text-muted">{detail.userName}</p>
                        </div>
                      </div>
                      <h6>Details</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>My Id</h6>
                          <p className="text-muted">{detail.userID}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Status</h6>
                          <p className="text-muted">Active</p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-start">
                        <a href="#!"><i className="fab fa-facebook-f fa-lg me-3" /></a>
                        <a href="#!"><i className="fab fa-twitter fa-lg me-3" /></a>
                        <a href="#!"><i className="fab fa-instagram fa-lg" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="mil" onClick={BackToHome}>Go to Home</button>
            </div>
           
          </div>
          
        </div>
      </section>
    );
  }
import React from "react";
import { useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";

import './Home.css'


export default function HomePage(props){
  const navigate=useNavigate();
  const [postdes, setpostdes] = useState({des: "" });

  function changeHandler(e) {
    const name = e.target.name;
    const value = e.target.value;
    setpostdes({ ...postdes, [name]: value });
}

  function addPost(){
        
        const data = {
          userName: localStorage.getItem("username"),
          description: postdes.des,
        };
        console.log(data);
        
    let url="https://gosocialapi.herokuapp.com/api/postService/save"
        
        axios
          .post(url, data)
          .then((result)=>{
           // console.log(result);
          
          }).catch((err)=>{
            console.log(err);
          });
  }


  function allUserFunction(e){
    navigate("/alluser")  
  }

  function addPost(e){
    navigate("/newsFeed")  
  }

  function newsFeed(e){
    navigate("/newsFeed")  
  }

  function myProfile(e){
    navigate("/myprofile")  
  }

  function signOut(e){
    navigate("/sign-in");
  }
  return(
    <div>
        <div className="greeting">
            <h1>Hi {localStorage.getItem("username")}, Welcome to GoSocial</h1>
        </div>
        <button onClick={allUserFunction} className="allUser" >All Users</button>
        <button onClick={newsFeed} className="NewsFeed" >NewsFeed</button>
        <button onClick={myProfile} className="MyProfile" >My Profile</button>
        <button onClick={signOut} className="SignOut">SignOut</button>
        <div >
            <textarea class="autosize"  name='des'
            type="text"
            placeholder="Add your Post"
            value={postdes.des}
            onChange={changeHandler}></textarea>
        </div>
       
        
        <div >
            <button onClick={addPost} className="addPost">Post</button>
        </div>
        
    </div>

  )
  console.log("hello");
}
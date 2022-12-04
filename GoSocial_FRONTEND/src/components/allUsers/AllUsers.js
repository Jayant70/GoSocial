import React,{useState,useEffect} from "react";
import axios from "axios";
import UserPreview from "./UserPreview";
import { useNavigate } from "react-router";
import { Navigate } from "react-router";
 import "./UserPreview.css" ;

export default function AllUsers(props){
    const [allUsers,setAllUsers]=useState([]);
    const navigate=useNavigate();
    function BackHome(){
        navigate("/home");
    }
    useEffect(()=>{
        axios
            .get("https://gosocialapi.herokuapp.com/api/userService/getAllUsers")
            .then((users)=>{
              console.log(users);
                const temp = [];
                users.data.forEach((userdata) => {
                  temp.push(
                    
                    
                    <UserPreview
                      key={userdata.userID}
                      name={userdata.userName}
                      email={userdata.emailID}
                  
                    />
                  );
                });
                setAllUsers(temp);
            }).catch((err)=>{
              console.log(err);
            })
    },[])

    
    return(
   <div>
    
    <nav class="navbar navbar-light bg-light">
  <form class="form-inline">
    <button class="BackHome" onClick={BackHome}>BackHome</button>
  </form>
</nav>
    {allUsers}
   </div>
    );
}

import React from "react";

function UserPreview(props){
    return (

    <div className="container1 d-flex justify-content-center align-items-center">
      
    <div className="card">
      <div className="upper">
        <img src="https://i.imgur.com/Qtrsrk5.jpg" className="img-fluid" />
      </div>
      <div className="user text-center">
        <div className="profile">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp" className="rounded-circle" width={80} />
        </div>
      </div>
      <div className="mt-5 text-center">
        <h4 className="mb-0">Username:{props.name}</h4>
         <span className="text-muted d-block mb-2">Email:{props.email}</span> 
          </div> 
          
        </div> 
      </div>
  
);
}

export default UserPreview;
import React from "react";

export default function ArticlePreview(props){
  console.log(props.key);
    return (
    <div className="row gx-5">
        <div className="col-md-6 mb-4">
          <div className="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
            <img src="https://mdbcdn.b-cdn.net/img/new/slides/080.webp" className="img-fluid" />
            <a href="#!">
              <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
            </a>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <span className="badge bg-danger px-2 py-1 shadow-1-strong mb-3">GoSocial User Feed</span>
          <h4><strong>{props.name}</strong></h4>
          <p className="text-muted">
            {props.description}
          </p>
        </div>
      </div>
    );
  }
import React,{useState,useEffect} from "react";
import axios from "axios";
import { Navigate } from "react-router";
import ArticlePreview from "./ArticlePreview";
 import { useNavigate } from "react-router";


export default function ArticlePallet(props){
    const [allArticles,setAllArticles]=useState([]);

    const navigate=useNavigate();
    function BackHome(){
        navigate("/home");
    }

    useEffect(()=>{
        axios
            .get("https://gosocialapi.herokuapp.com/api/postService/getPost")
            .then((articles)=>{
                const temp = [];
                articles.data.forEach((article) => {
                  temp.push(
                    
                    
                    <ArticlePreview
                      key={article.postID}
                      name={article.userName}
                      description={article.description}
                     
                    />
                  );
                });
                setAllArticles(temp);
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
    {allArticles}
   </div>
    );
}
import React from "react";
import TextLoop from "react-text-loop";
import './landing.css';

import MeSvg from "./MeSvg";






const Landing = () => {
    return (
       
<div className="container">
        <div className="landing-container">
            
                      <h1>
                        Hi, I’m Sona <br />
                        <TextLoop >
                        <span> Web Developer.</span>
                        <span> Engineer.</span>
                        <span> Content Writter.</span>
                        <span> Blogger.</span>
                        <span> Designer.</span>
                        </TextLoop>{" "}
                      </h1>
                

                
        </div>
        <div className="profile-svg">
            <MeSvg />
            
        </div>
       
    </div> 
            
    )
}
export default Landing

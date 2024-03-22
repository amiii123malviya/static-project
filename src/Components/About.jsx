
import React from "react";
import aboutimage from '../images/about.png'


const About=()=>
{
  return(
    <div id='about'>
        <div className="about-image">
            <img src={aboutimage} alt=''/> 
        </div>
   <div className="about-text">
    <h1>LEARN MORE ABOUT US</h1>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, sapiente. Totam voluptatum aliquid tempore aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, totam? Voluptatem distinctio 
    </p>
    <button>READ MORE</button>
   </div>
    </div>
  );
}
export default About;
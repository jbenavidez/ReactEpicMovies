import React from 'react'

import HeroButton from "./HeroButton.js"

import "../containers/App.css"
import Slider from "react-slick";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth:true,
  adaptiveHeight:true,
 
 
  
};
const Hero = () => (
  <div id="hero"  className="Hero"  >
    <div className="col-md-12">
      
    <Slider {...settings} style= "color:Redl">
        <div>
        <div id="hero"  className="Hero" style={{backgroundImage: "url(https://images.alphacoders.com/633/633643.jpg)"}}>
    <div className="content">
      <img className="logo" src="http://www.returndates.com/backgrounds/narcos.logo.png" alt="narcos background"/>
      <h2>Season 2 now available here john</h2>
      <p>The second season of Narcos, an American crime thriller drama web television 
      series produced and created by Chris Brancato, Carlo Bernard, 
      and Doug Miro, follows the story of notorious drug kingpin Pablo 
      Escobar, who became a billionaire through the production and distribution 
      of cocaine, while also focusing on Escobar's interactions with drug lords, DEA 
      agents, and various opposition entities.</p>
      <div className="button-wrapper">
        <HeroButton primary={true} text="Watch now"/>
        <HeroButton primary={false} text="+ My list"/>
      </div>
    </div>
    <div className="overlay"></div>
  </div>
        </div>
        <div>
          <h3> <img className="logo" src="https://images.alphacoders.com/633/633643.jpg" alt="narcos background"/></h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    
       
    </div>
    <div className="overlay"></div>
  </div>
)

export default Hero;
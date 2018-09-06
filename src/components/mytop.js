import React, { Component } from 'react'

 
 
 
import Item from "../components/litem.js"

 
import Slider from "react-slick";

var settings1 = {
 
    infinite: true,
    slickGoTo:5,
    slidesToShow: 5,
    slidesToScroll: 1,
    
   
    
 
  

};
 
 
   
 

 
 

 
export default class myTop extends Component {
 

  componentDidMount(){
    window.scrollTo(0, 0)
 
   
    
  
  }


  render(){
    let mylist =  this.props.mylist1 
    let titleList = ''

    
  titleList = mylist.map((title, i) => {
    let component = <div key={title.id}></div>
     
      let name ="sdsdd";
      const backDrop = `http://image.tmdb.org/t/p/original${title.backdrop_path}`;
      component = (
        <Item  iteAdded = {(addedPost)=>
         this.AddToList(addedPost)
          }  MId ={title.id}   key={title.id} title={title.title} finalToAdd={title} score={title.vote_average} overview={title.overview} releasedate = {title.release_date} backdrop={backDrop}/>
      )
 
    return component
  })

    return(
      <div>

 <div id="hero" className="carousel slide carousel-fade" data-ride="carousel">
      <div className="carousel-inner">
         <div className="item active  bladeRunner2049  " style={{   backgroundPosition: 'center center',backgroundRepeat: 'no-repeat',backgroundSize: '100% 665px',}}>
         <div className="container">
            <div className="row blurb scrollme animateme" data-when="exit" data-from="0" data-to="1" data-opacity="0" data-translatey="100">
               <div className="col-md-9">
                 
                  <h1 style={{textAlign:"center"}}>MY EPIC LIST</h1>
								 
                  
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
      < div className="col-md-12 " style={{marginTop:"30px"}}>
      <h1 style={{marginTop:"10px",textAlign:"center"}}>MY LIST </h1>
      {titleList}
   </div>
   </div>
   
        
    )
  }
}


 
  
 
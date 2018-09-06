import React, { Component } from 'react'

 
 
 

 
 
 
 

 
 

 
export default class Cast extends Component {
 
  render(){
 
 




    return(
<div className="col-md-12 ">
   <div className="movie-card">
      <div className="movie-header1  " style={{backgroundImage:  `url(${this.props.chatpic})`,backgroundRepeat: 'no-repeat' ,backgroundPosition: 'center center', backgroundSize: '100% 100%',}}>
      <div className="header-icon-container">
      </div>
   </div>
   <div className="movie-content">
      <div className="movie-content-header"  >
         < span className="movie-title" style={{textAlign: "center",fontSize:"14px"}}> {this.props.originalName}</span>
      </div>
       
</div>
</div>
</div>
        
    )
  }
}


 
  
 
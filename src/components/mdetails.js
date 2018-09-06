import React, { Component } from 'react'

 
 
 

 
 
 
 

 
 

 
export default class Mdetails extends Component {
 
  render(){
 
    var budget = this.props.budget;
    var budget = new Number(budget);
    let budget1 = budget.toLocaleString(
      undefined, // leave undefined to use the browser's locale,
                 // or use a string like 'en-US' to override it.
      { minimumFractionDigits: 2 }
    );
    
 
    var revenue = this.props.revenue;
    var revenue = new Number(revenue);
    let revenue1 = revenue.toLocaleString(
      undefined, // leave undefined to use the browser's locale,
                 // or use a string like 'en-US' to override it.
      { minimumFractionDigits: 2 }
    );
     let prolist  = []
     let companies = this.props.productions
     if(companies){
      for (var i = 0; i < companies.length; i++) { 
        var mini= companies[i] ;
        var result =" " + mini.name;
        prolist.push(result)
         
      
    }
     }

  
    return(
<div  >
<div ref="titlecategory"  >
            <div className="Title" style={{paddingTop:"10px" }}>
               <h1 style={{fontSize: "30px"}} className="myh1">	PRODUCTION DETAIL </h1>
               <div className="t " style={{paddingTop:"10px",paddingBottom:"50px" }}>
                  <div className="col-md-offset-2 col-md-12 col-lg-offset-3 col-lg-6" style={{ paddingBottom:"50px" }}>
                     <div className="  profile">
                        <div className="col-md-12">
                           <div className="col-xs-12 col-md-10">
                           <p  style={{ fontWeight:"bolder",color:"white" }}><strong style={{ fontWeight:"bolder",color:"#faa82f" }}>   PRODUCTION COMPANIES: </strong>{prolist}   </p>
                              <p  style={{ fontWeight:"bolder",color:"white" }}><strong style={{ fontWeight:"bolder",color:"#faa82f" }}>  BUDGET: </strong> $ {budget1} </p>
                              <p  style={{ fontWeight:"bolder",color:"white" }}><strong style={{ fontWeight:"bolder "  ,color:"#faa82f"}}> REVENUE: </strong> $ {revenue1}  </p>
                              <p  style={{ fontWeight:"bolder",color:"white" }}><strong style={{ fontWeight:"bolder" ,color:"#faa82f" }}> RUN TIME : </strong>  {this.props.runtime} mins </p>
                              <p  style={{ fontWeight:"bolder",color:"white" }}><strong style={{ fontWeight:"bolder" ,color:"#faa82f" }}> RELEASE DATE : </strong>   {this.props.releaseDate}</p>
                              <p  style={{ fontWeight:"bolder",color:"white" }}><strong style={{ fontWeight:"bolder" ,color:"#faa82f" }}> OFFICIAL SITE  : </strong> {this.props.movieLink} </p>
                             
                           </div>
                           <div className="col-xs-12 col-md-2 text-center">
                              <figure>
                                 
                                 <figcaption className="ratings">
                                    <p>Ratings
                                       <a href="#">
                                       <span className="fa fa-star"></span>
                                       </a>
                                       <a href="#">
                                       <span className="fa fa-star"></span>
                                       </a>
                                       <a href="#">
                                       <span className="fa fa-star"></span>
                                       </a>
                                       <a href="#">
                                       <span className="fa fa-star"></span>
                                       </a>
                                       <a href="#">
                                       <span className="fa fa-star-star"></span>
                                       </a> 
                                    </p>
                                 </figcaption>
                              </figure>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
</div>
        
    )
  }
}


 
  
 
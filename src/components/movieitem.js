import React, { Component } from 'react'


 
 
export default class Movieitem extends Component {
 
  render(){
 

 



 
    return(
<div >
<ul className="cart-items">
                     <li className="single-cart-item">
                        <div className="cart-img">
                           <a href="shopping-cart.html"><img src={this.props.chatpic}  alt="" /></a>
                           <span className="cart-sticker">1x</span>
                        </div>
                        <div className="cart-content">
                           <h5 className="product-name"><a href="single-product.html">{this.props.originalName}</a></h5>
                          
                           <span className="product-size"><span>Date</span>: {this.props.mydate}</span>
                           <span className="product-color"><span>Popularity</span>: {this.props.voteaverage}/10</span>
                        </div>
                        
                     </li>
                  </ul>
</div>
        
    )
  }
}


 
  
 
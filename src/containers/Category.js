import React, { Component } from 'react'

import Item from "../components/Item.js"

import "./App.css"
import Slider from "react-slick";

var settings1 = {
 
    infinite: true,
    slickGoTo:5,
    slidesToShow: 5,
    slidesToScroll: 1,
    
   
    
 
  

};

export default class Category extends Component {


  constructor(){
    super()
     
}
AddToList(postSubmitteed){
  this.props.AddToList(postSubmitteed)
    //console.log("postSubmitteed")
}


	state = {
    data: [],
    mounted: false
	}

	loadContent = () => {
    const requestUrl =`https://api.themoviedb.org/3/${this.props.url}&api_key=166624c030b91c943c397020f20525b4`;
    fetch(requestUrl)
      .then(response => response.json())
      .then(data => this.setState({data}))
      .catch(err => console.log("There has been error"))
  }

  componentWillReceiveProps({url}) {
    if(url !== this.props.url && url !== ''){
      this.setState({
        url,
        mounted: true
      }, this.loadContent)   
    }
  }
 
  componentDidMount(){
    if(this.props.url !== '') {
      this.loadContent()
      this.setState({
        mounted: true
      })
    }
  }

	render() {
     let titleList = ''
     let myb2 =''
     let backoptiona ="TitleList background: rgba(0,0,0,0.8);"
     if(this.props.mytop =="Yes"){
      backoptiona =" TitleList red"
      settings1 = {
 
        infinite: true,
        slickGoTo:5,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplaySpeed :3000,
        adaptiveHeight:true,
       
        
     
      
    
    };
    
      
     }
     else{
      if( this.props.mytop =="anime"){
        myb2=""
      }
      else if ( this.props.mytop =="horror"){
        myb2="red"
      }
      else if ( this.props.mytop =="sci"){
        myb2=" "
      }
      else if ( this.props.mytop =="comedic"){
        myb2="red"
      }
      settings1 = {
 
        infinite: true,
        slickGoTo:5,
        slidesToShow: 6,
        slidesToScroll: 1,
        
     
      
    
    }
     }
     
     const results = this.state.data.results
    if(results){
      titleList = results.map((title, i) => {
        let component = <div key={title.id}></div>
        if(i < 21){
          let name = (!title.name) ? title.original_title : title.name;
          const backDrop = `http://image.tmdb.org/t/p/original${title.backdrop_path}`;
          component = (
            <Item avr ={title.vote_average}  votecount={title.vote_count}  iteAdded = {(addedPost)=>
             this.AddToList(addedPost)
              }  MId ={title.id}  cattitle = {this.props.title}  key={title.id} title={title.title} finalToAdd={title} score={title.vote_average} overview={title.overview} releasedate = {title.release_date} backdrop={backDrop}/>
          )
        }
        return component
      })
    }
   
		return(
			<div>
      {results ? (
           <div className={myb2}>
                <div ref="titlecategory" className={backoptiona} data-loaded={this.state.mounted}>
              <div className="Title">
                <h1>{this.props.title}</h1>
                <div className="t ">
                <Slider {...settings1} dots    >
                  {titleList}
                  </Slider>
                </div>
              </div>
            </div>
           </div>
      ) : (
       <div></div>
      )}
    </div>
		)
	}
}
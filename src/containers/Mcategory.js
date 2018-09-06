import React, { Component } from 'react';

 
import Mitem from "../components/Mitem.js";
import "./App.css";

import Slider from "react-slick";
import "../components/styles/style.css";
var settings = {
  infinite: true,
        slickGoTo:5,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed :4000,
        adaptiveHeight:true,
        autoplay:true,
 
 

};

export default class MCategory extends Component {
	state = {
    data: [],
    mounted: false,
    videodec :[]
	}
    
	loadContent = () => {
    const requestUrl =`https://api.themoviedb.org/3/${this.props.url}&api_key=166624c030b91c943c397020f20525b4`;
    fetch(requestUrl)
      .then(response => response.json())
      .then(data => this.setState({data}))
      .catch(err => console.log("There has been error"))
  }

  findTraile = (mID) =>{
    let requestUrl =``;
    fetch(requestUrl)
    .then(response => response.json())
    .then(videodec => this.setState({videodec}))
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
     const results = this.state.data.results
    console.log(results)
    if(results){
      titleList = results.map((title, i) => {
        let component = ''
        let mymovieLink =  `http://api.themoviedb.org/3/movie/${title.id}/videos?api_key=166624c030b91c943c397020f20525b4`;
        if(i < 5){
          let name = (!title.name) ? title.original_title : title.name;
          const backDrop = `http://image.tmdb.org/t/p/original${title.backdrop_path}`;
          component = (
            <Mitem  key={title.id} title={name} score={title.vote_average} overview={title.overview} backdrop={backDrop} MId ={mymovieLink} genders = {title.genre_ids}/>
          )
        }
        return component
      })
    }

		return(
		 
      <div>
      {results ? (
            <div id="hero"  className=" "   >
            <div className=" ">
               <Slider {...settings}  >
               
             
              {titleList}
                
            </Slider>
         </div>
         </div>
      ) : (
       <div></div>
      )}
    </div>
        
		)
	}
}
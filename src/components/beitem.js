import React, { Component } from 'react'

 
import "../components/styles/style2.css";
import ModalVideo from 'react-modal-video';
import Cast from '../components/cast.js'
import Mdetails  from    '../components/mdetails.js'
import Msuggestion  from    '../components/msuggestion.js'
import Slider from "react-slick";

var settings12 = {
 
  infinite: true,
	dots: true,
 
 
	slidesToShow: 10,
	slidesToScroll: 1,
 
	 
 
 
 
	 
	 

	
 
	



};
 
 

 let mycounter = '';

 let mycounter2 = '';
export default class Item extends Component {

	constructor () {
		super()
		this.state = {
		  isOpen: false,
		  data: [],
		  mounted: false,
      videodec :[],
      tester:""
		}
		this.openModal = this.openModal.bind(this)
	  }
	
	  openModal () {
		this.setState({isOpen: true})
	  }
		
	  loadContent = (mines) => {
      let theIDpr =   this.props.id;
		let mymovieLink =  `http://api.themoviedb.org/3/movie/${this.props.id}?api_key=166624c030b91c943c397020f20525b4&append_to_response=credits`;
		let second_mymovieLink =  `http://api.themoviedb.org/3/movie/${this.props.id}/videos?api_key=166624c030b91c943c397020f20525b4`;
		let tester =' https://api.themoviedb.org/3/movie/507569?api_key=166624c030b91c943c397020f20525b4&language=en-US';

		const requestUrl =mymovieLink;
		
		fetch(requestUrl)
		  .then(response => response.json())
		  .then(data => this.setState({data}))
		  .catch(err => console.log("There has been error",))
      this.loadContent2(theIDpr)
		
	 
    }
    

    AddToList22(postSubmitteed){
      let finalvideo = postSubmitteed[0]
      mycounter2 = finalvideo
     

      this.setState({
        tester: mycounter2.key
        })
        //console.log("hello from cat",finalvideo.key)
    }



    loadContent2 = (mines) => {
      
      let second_mymovieLink =  `http://api.themoviedb.org/3/movie/${mines}/videos?api_key=166624c030b91c943c397020f20525b4`;
 
      const requestUrl =second_mymovieLink;
      
      fetch(requestUrl)
        .then(response => response.json())
        .then(data => this.AddToList22(data.results))
      
      
      
      
      
        .catch(err => console.log("There has been error",))
        
      
      
      }


	  componentDidMount(){
      window.scrollTo(0, 0)
		if(this.props.MId !== '') {
		  this.loadContent(this.props.MId)
		  this.setState({
			mounted: true
		  })
		}
	  }
		
  render(){
    console.log("hello from cat",this.state.tester)
	const results = this.state.data;
	let backDrop  = " "
  let titleList = ''
  let theDetails = ''
		//GET GENDER
 
		 
		let mygenderlist =  [{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}] 
		var the_link =''
    let finalyx = []
    let suggestor = ''
		
	if(results.title){
		  backDrop = `http://image.tmdb.org/t/p/original${results.backdrop_path}`;
	 

		const gender_list=results.genres;
		    //GET GENDER LIST :) 
				let finalList =[];
				for (var x = 0; x < gender_list.length; x++) { 
					var result= gender_list[x] ;
					var cleinstr = " "+result.name
          finalyx.push(cleinstr)
          var result1= gender_list[0] ;
          if (result1.id){
            suggestor = result1.id
          }
         
         
          
				 
			}
			let the_cast = results.credits.cast
			titleList = the_cast.map((title, i) => {
        let component = ''
				let mymovieLink =  `http://api.themoviedb.org/3/movie/${title.id}/videos?api_key=166624c030b91c943c397020f20525b4`;
				let theChatPic = `http://image.tmdb.org/t/p/original${title.profile_path}`;
        if(i < 11){
					 
          component = (
            <Cast key={i} characterName= {title.character} originalName = {title.name} chatpic= {theChatPic}/>
          )
        }
        return component
      })
     
	 
	}


 
    

    return(
<div className="  ">
   <div id="hero" className="carousel slide carousel-fade" data-ride="carousel">
      <div className="carousel-inner">
         <div className="item active" style={{backgroundImage:  `url(${backDrop})`,backgroundPosition: 'center center',backgroundRepeat: 'no-repeat',backgroundSize: '100% 665px',}}>
         <div className="container">
         <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId= {this.state.tester} onClose={() => this.setState({isOpen: false})} />
            <div className="row blurb scrollme animateme" data-when="exit" data-from="0" data-to="1" data-opacity="0" data-translatey="100">
               <div className="col-md-9">
                  <span className="title">{finalyx}</span>
                  <h1>{results.title}</h1>
									<p>  {results.overview}</p>
                  <div className="buttons">
                     <span className="certificate">
										 {results.vote_average}
                     </span>
                     <button  onClick={this.openModal}  className="venobox btn btn-default">
                    
                    <span>Play trailer</span>
                    </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
<div>
      {results ? (
				<div>
   <div className=" col-md-12 ">
      <div className ="  col-md-12  red " >
         <div ref="titlecategory"  data-loaded={this.state.mounted}>
            <div className="Title" style={{paddingTop:"10px" }}>
               <h1 style={{fontSize: "30px"}} className="myh1">	CAST </h1>
               <div className="t " style={{paddingTop:"10px",paddingBottom:"50px" }}>
                  <Slider {...settings12}  dots    >
                     {titleList}
                  </Slider>
               </div>
            </div>
         </div>
      </div>
   </div>
 
      <div className ="  col-md-12    " >
      <Mdetails  movieLink = {results.homepage}  releaseDate = {results.release_date} revenue = {results.revenue} 
      runtime = {results.runtime}   budget = {results.budget}  productions = {results.production_companies} 
        />  
      </div>
      <div className ="  col-md-12    " >
      <Msuggestion   myimd= {suggestor}
        />  
      </div>

</div>
      ) : (
       <div></div>
      )}
    </div>
					 
</div>
        
    )
  }
}


 
  
 
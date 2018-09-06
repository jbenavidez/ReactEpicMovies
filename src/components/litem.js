import React, { Component } from 'react'

import "../containers/App.css"

import ListToggle from "../containers/ListToggle.js"

import {Link} from 'react-router-dom'; 



export default class lItem extends Component {

  constructor () {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      isOpen: false,
      data: [],
      mounted: false,
      videodec :[]
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal () {
    this.setState({isOpen: true})
  }
    
  loadContent = (mines) => {
    const requestUrl =mines;
  
    fetch(requestUrl)
      .then(response => response.json())
      .then(data => this.setState({data}))
      .catch(err => console.log("There has been error",))
      
    
 
  }
  componentDidMount(){
    if(this.props.MId !== '') {
      this.loadContent(this.props.MId)
      this.setState({
        mounted: true
      })
    }
  }


  handleSubmit(event){
    
     this.props.iteAdded(event)


  }

  render(){
    const the_movie_id = this.props.MId;
    const results = this.state.data.results;
    const gender_list=this.props.genders;
    let mygenderlist =  [{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}] 
    var the_link =''
    let finalyx = []
    let mytitle  =this.props.title;
    if(mytitle){
      if(mytitle.length > 22){
        mytitle = mytitle.substring(0,20)+'...';
      }
      else{
        mytitle = mytitle
      }
    }
    if(results){
      
      for (var i = 0; i < results.length; i++) { 
        var mini= results[i] ;
        
        the_link = mini.key
      
    }
      //GET GENDER LIST :) 
      let finalList =[];
      for (var x = 0; x < gender_list.length; x++) { 
        var result= gender_list[x] ;
        for (var y = 0; y < mygenderlist.length; y++) { 
            var gender_R= mygenderlist[y]
           if(result == gender_R.id){
            
            var cleinstr = " "+gender_R.name
            finalyx.push(cleinstr);
           }
    
           
     
        }
    }
  
   
    }
   
    return(
      <div className="col-md-3 ">
      <div className="movie-card"  >
          <div className="movie-header " style={{backgroundImage:  `url(${this.props.backdrop})`,backgroundRepeat: 'no-repeat' ,backgroundPosition: 'center center', backgroundSize: '100% 100%',}}>
            <div className="header-icon-container">
            </div>
          </div>
          <div className="movie-content">
            <div className="movie-content-header">
                <a href="#">
                < div className="movie-title">{mytitle}</div>
                </a>
                 
            </div>
            <div className="movie-info">
                <div className="info-section">
                  <label>Relase Date</label>
                  <span>{this.props.releasedate}</span>
                </div>
                <div className="info-section">
                  <label>Screen s</label>
                  <span>{this.props.votecount}</span>
                </div>
                <div className="info-section">
                  <label>Row</label>
                  <span>D</span>
                </div>
                <div className="info-section">
                <Link to={`MyList/${the_movie_id}`} ><button     className="venobox   btn-xs">
                    
                         View
                    </button></Link>  
                    <button  onClick={()=>this.handleSubmit(this.props.finalToAdd)} > ADD</button>
                </div>
            </div>
          </div>
      </div>
    </div>
    )
  }
  


}


 
 

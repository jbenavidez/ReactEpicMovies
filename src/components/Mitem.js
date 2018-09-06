import React, { Component } from 'react'

import "../containers/App.css"
import "../components/styles/mvideo.css";
import ModalVideo from 'react-modal-video';

 let mycounter = '';
export default class Item extends Component {

  constructor () {
    super()
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

  render(){
    const results = this.state.data.results;
    const gender_list=this.props.genders;
    let mygenderlist =  [{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}] 
    var the_link =''
    let finalyx = []
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
        <div>
               
      <div   className="carousel slide carousel-fade" data-ride="carousel">
      <div className="carousel-inner   ">
      
         <div className="item active" style={{backgroundImage:  `url(${this.props.backdrop})`,backgroundPosition: 'center center',backgroundRepeat: 'no-repeat',backgroundSize: '100% 665px',}}>
         <div className="container">
         <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId= {the_link} onClose={() => this.setState({isOpen: false})} />
            <div className="row blurb scrollme animateme" data-when="exit" data-from="0" data-to="1" data-opacity="0" data-translatey="100">
            
               <div className="col-md-9">
                  <span className="title">{finalyx} </span>
                  <h1>{this.props.title}</h1>
                  <p>{this.props.overview}</p>
                  <div className="buttons">
                     <span className="certificate">
                     {this.props.score}
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
        </div>
    )
  }
}


 
  
 
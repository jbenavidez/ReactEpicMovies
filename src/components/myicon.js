import React, { Component } from 'react'
import {Link} from 'react-router-dom';  
import "../containers/App.css"
import Movieitem from '../components/movieitem.js'
import  './styles2/style.css';
 
 
export default class myicon extends Component {

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
    let titleList = ''
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
    let myfinallist = this.props.mylist
   
    titleList = myfinallist.map((title, i) => {
      let component = ''
      let mymovieLink =  `http://api.themoviedb.org/3/movie/${title.id}/videos?api_key=166624c030b91c943c397020f20525b4`;
      const backDrop = `http://image.tmdb.org/t/p/original${title.backdrop_path}`;
      if(i < 5){
        
        component = (
          <Movieitem key={i} voteaverage= {title.vote_average} originalName = {title.title} chatpic= {backDrop} mydate ={title.release_date}/>
        )
      }
      return component
    })   

    return(
      <div className="UserProfile">
   <div className="User">
      
      <div  >
         <div>
            {   myfinallist.length > 0  && 
            <div className="mini-cart">
               <a href="#">
               </a>
               <div className="header-cart">
               {titleList}
                   
                  <div className="checkout">
                  <Link to="/Mytops" ><a  href="checkout.html">Go To List</a>    </Link>
                  </div>
               </div>
            </div>
            }
         </div>
      </div>
   </div>
</div>
    )
  }
  


}
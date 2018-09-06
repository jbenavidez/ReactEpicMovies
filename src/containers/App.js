import React, { Component } from 'react';

import "./App.css"

import Navigation from "../components/Navigation.js"
import Myicon from "../components/myicon.js"
import Hero from "../components/Hero.js"
import ListCategory from "../components/ListCategory.js"
 
import SearchBar from "../components/SearchBar.js"
import Homecat  from "../components/Homecat.js"
import Bitem from '../components/beitem.js'
import Mytop from '../components/mytop.js'
import {Route} from 'react-router-dom';




export default class App extends Component {
      constructor(){
        super()
        this.state =  {
          searchTerm:"",
          searchUrl:"",
          mylist:[]
        }
      }


		 

	handleKeyUp = ({key}) => {
    if(key === 'Enter' && this.state.searchTerm !== ""){
      var searchUrl =  `search/multi?query=${this.state.searchTerm}&api_key=166624c030b91c943c397020f20525b4`;
      this.setState({
        searchUrl
      })
    }
  }

  handleChange = (event) => {
    const searchTerm = event.target.value
    this.setState({
      searchTerm
    })
  }
    AddToList(postSubmitteed){
        this.setState(state =>({
          mylist: state.mylist.concat(postSubmitteed)
        }))
        console.log(this.state.mylist)
    }


	render() {
		return(
			<div>
         <Route exact path='/' render={()=>(

          <div>
          <header className="Header">
       
          <Navigation />
          <div id="search" className="Search">
            <SearchBar 
              onChange={this.handleChange} 
              onKeyUp={this.handleKeyUp} 
              value={this.state.searchTerm}
            />
          </div>
          <Myicon  mylist={this.state.mylist} />
        </header>
        <Hero />
       
        <Homecat searchUrl={this.state.searchUrl} mylist={this.state.mylist}   cAddToList = {(addedPost)=>
         this.AddToList(addedPost)
        }
        />
          </div>
         )}/>




 <Route path='/MyList/:id'  exact  render={(props)=>(
 
    <div>
      <header className="Header">
        
          <Navigation />
          <div id="search" className="Search">
            <SearchBar 
              onChange={this.handleChange} 
              onKeyUp={this.handleKeyUp} 
              value={this.state.searchTerm}
            />
          </div>
          
        </header>
       
      <Bitem id={props.match.params.id}/>
    </div>
    
)}/>
          



 <Route path='/Mytops'     render={(props)=>(
 
 <div>
     <header className="Header">
         
          <Navigation />
          <div id="search" className="Search">
            <SearchBar 
              onChange={this.handleChange} 
              onKeyUp={this.handleKeyUp} 
              value={this.state.searchTerm}
            />
          </div>
           
        </header>
      
   <Mytop  mylist1={this.state.mylist}/>
 </div>
 
)}/>


      </div>
		)
	}
}
import React, { Component } from 'react'

import Category from "../containers/Category.js"

export default class Homecat extends Component {
	constructor(){
        super()
         
	  }
	  AddToList(postSubmitteed){
		  this.props.cAddToList(postSubmitteed)
        //console.log("hello from cat")
    }


	render(){


		const arraycategory = [
			{title: 'Search Results', url: this.props.searchUrl , mytop:"No"},
			{title: 'TRENDING NOW', url: 'genre/12/movies?sort_by=popularity.desc&page=1' , mytop:"Yes"},
			{title: 'BEST HISTORY MOVIES', url: 'genre/36/movies?sort_by=popularity.desc&page=1' , mytop:"anime"},
			{title: 'ANIMATION MOVIES', url: 'genre/16/movies?sort_by=popularity.desc&page=1' , mytop:"horror"},
			{title: 'MISTERY MOVIES', url: 'genre/9648/movies?sort_by=popularity.desc&page=1' , mytop:"sci"},
			{title: ' WESTERN MOVIES', url: 'genre/37/movies?sort_by=popularity.desc&page=1', mytop:"comedic"}
		  ]


		return (arraycategory.map(({title, url,mytop}, index) => {
	    return( 
	    	<Category 
	    		title={title} 
	    		url={url} 
				key={index} 
				mytop = {mytop}
				AddToList = {(addedPost)=>
					this.AddToList(addedPost)
					}
			 
	    	/>
	    )
	}))
	}
	
}
 
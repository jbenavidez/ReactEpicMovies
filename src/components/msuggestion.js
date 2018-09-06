import React from 'react'

import Category from "../containers/Category.js"

const Msuggestion = ( {myimd}) => {
  let genre = myimd
	let arraycategory = `genre/${genre}/movies?sort_by=popularity.desc&page=1`
    
   
    console.log("john here", arraycategory)

 
	    return( 
        <div>
             {genre ? (
          <Category 
          title='MOVIES YOU MIGHT LIKE'
          url= {arraycategory}
        key='1'
        />
      ) : (
       <div></div>
      )}
        </div>
        
	    )
 
}

export default Msuggestion
import React from 'react'

import "../containers/App.css"
import {Link} from 'react-router-dom'; 
const Navigation = () => (
  <div id="navigator" className="Navigation" >
    <nav>
      <ul>
        <li> <Link to="/"  style ={{color:"white", fontWeight:"bolder"}} >Browse</Link></li>
        <li>
          <Link to="/Mytops"   style ={{color:"white", fontWeight:"bolder"}}>My List</Link>
        </li>
 
      </ul>
    </nav>
  </div>
)

export default Navigation
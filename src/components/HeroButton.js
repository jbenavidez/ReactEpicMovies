import React from 'react'

import "../containers/App.css"

const HeroButton = ({primary, text}) =>
	<a 
	  href="#" 
	  className="Button" 
	  data-primary={primary}>
	    {text}
	</a>
	
export default HeroButton;
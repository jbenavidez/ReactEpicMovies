import React, { Component } from 'react'

import "./App.css"

export default class ListToggle extends Component {
  state = {
		toggled:false
	}

	handleClick = () => {
    const toggled = !toggled;
    this.setState({
      toggled
    })
  }

	render() {
		return(
			<div  onClick={this.handleClick} className="ListToggle" data-toggled={this.state.toggled}>
        <div>
          <i className="fa fa-fw fa-plus"></i>
          <i className="fa fa-fw fa-check"></i>
        </div>
      </div>
		)
	}
}
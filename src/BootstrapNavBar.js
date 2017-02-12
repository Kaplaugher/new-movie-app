import React, { Component } from 'react';
import Router, { Link } from 'react-router';

// CUSTOM MODULES

// CUSTOM CSS
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

class BootstrapNavBar extends Component{
	constructor(props) {
		super(props);
	}



	render(){
		return(
			<nav className="navbar navbar-default navbar-inverse">
  				<div className="container-fluid">
    				<div className="navbar-header">
      					<a className="navbar-brand" href="#">Movies</a>
    				</div>
   					<ul className="nav navbar-nav">
      					<li className="active"><Link to="/">Home/Now Playing</Link></li>
					    <li><Link to="upcoming">Upcoming</Link></li>
					    <li><Link to="popular">Popular</Link></li>
					    <li><Link to="topRated">Top Rated</Link></li>				    
    				</ul>
  				</div>
			</nav>
		)
	}
}

export default BootstrapNavBar

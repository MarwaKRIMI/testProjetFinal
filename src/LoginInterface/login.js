import React, { Component } from 'react';
import './login.css'
import * as usersProfiles from '../usersProfiles'
import {Redirect } from 'react-router-dom'
import {  Link } from "react-router-dom";
import img from '../images/cover4.jpg';


class LogIn extends Component {
	constructor (props) {
		super(props) 
		this.state = {
			email : "",
			password : "",
			isAdminConnected : false,
			isUserConnected : false
		}
	}
	onChange = e => {
		this.setState({
			[e.target.name] : e.target.value
		})
	}

	verifConnectedUser = () => {
		if (this.state.email === usersProfiles.admin.email && 
		this.state.password === usersProfiles.admin.password) {
			return this.setState (prevState => ({
				isAdminConnected : !prevState.isAdminConnected
			}))
		} 
		if (this.state.email === usersProfiles.user.email && 
			this.state.password === usersProfiles.user.password) {
			return	this.setState (prevState => ({
					
				isUserConnected : !prevState.isUserConnected
				}))
			} 
		else {
			alert("please to check userName or password")
		}	
	}

 	render() {
		return (
			this.state.isAdminConnected ||  this.state.isUserConnected ? 
			this.state.isAdminConnected && <Redirect to='/home-admin' />	||
			this.state.isUserConnected && <Redirect to='/home-user' />	:		
        	<div className="main-content-agile" style={{display:'flex'}}>
			<div className="image" style={{background:'{img}'}}>
				</div>
                <div className="sub-main-w3">
				<form  >
			<h2 style={{color:'white'}}>Créer votre Compte</h2>
			<div className="form-group">
				<input type="email" onChange={this.onChange} className="form-control textbox email" name="email" placeholder="Email" required=""/>
			</div>
			<div className="form-group">
				<input type="password" onChange={this.onChange} className="form-control textbox psw" name="password" placeholder="Mot de passe" required=""/>
			</div>
			<div className="form-group-2">
				<button className="btn" onClick={(e)=> {
					e.preventDefault()
					this.verifConnectedUser()}}>
				Connecter
				</button>
			</div>
            <Link to="/inscription">
			<p style={{marginLeft:'-350px', color:'white', fontWeight:'bold',fontSize:'20px'}}>S'inscrire</p>
            
            </Link>
		</form>
	
	</div>
    
            </div>
        )
    }
}

export default LogIn;
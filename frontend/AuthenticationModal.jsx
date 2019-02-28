import React, { Component } from 'react';
import IconMessage from './IconMessage';
import Modal from './Modal';

class AuthenticationModal extends Component{
	
	constructor(props){
		super(props);
		this.handleLogin = this.handleLogin.bind(this);
	}
	
	handleLogin(){
		var user = $('#authmodaluser').val().trim();
		var passwd = $('#authmodalpasswd').val();
		this.props.login(user,passwd);
	}
	
	render(){
		return (
			<Modal title='Authentication stage' id='authmodal'>
				<IconMessage header='Hi! Stranger' message='Welcome to wissen, please provide your credentials.'/>
				<form className='ui form'>
					<div className='field'>
						<label htmlFor='user'>Username</label>
						<input type='text' id='authmodaluser' name='user' />
					</div>
					<div className='field'>
						<label htmlFor='passwd'>Password</label>
						<input type='password' id='authmodalpasswd' name='passwd' />
					</div>
					<div className='ui two buttons'>
						<button className='ui button' type='button' onClick={this.handleLogin}>Login</button>
						<div className='or'></div>
						<button className='ui disabled button' type='button'>Register</button>
					</div>
				</form>
			</Modal>
		);
	}
}

export default AuthenticationModal;
import React, { Component } from 'react';
import IconMessage from './IconMessage';
import Modal from './Modal';

class AuthenticationModal extends Component{
	
	constructor(props){
		super(props);

		this.state = {
			user : '',
			lr : 'sd'
		}

		this.handleUserInput = this.handleUserInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleUserInput (e) {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({[name]: value});
	}
	
	handleSubmit(e){
		e.preventDefault();
		login(this.state.user, this.state.passwd, this.props.callback)
	}

	componentDidMount() {
	    $('#authform').form({
	        fields : {
	            user : {
	                identifier : 'user',
	                rules : [
	                    {
	                        type : 'empty',
	                        prompt : 'Username cannot be empty'
	                    }
	                ]
	            },
	            loginerror : {
	                identifier : 'loginerror',
	                rules : [
	                    {
                    	    type : 'empty',
                    	    prompt : 'User/Password do not match'
                    	}
	                ]
	            }
	        }
	    });
	}

	render(){
		return (
			<Modal title='Authentication stage' id='authmodal'>
				<IconMessage type='' icon='id badge' header='Hi! Stranger' message='Welcome to wissen, please provide your credentials.'/>
				<form className='ui form' onSubmit={this.handleSubmit} id='authform'>
					<div className='field'>
						<label htmlFor='user'>Username</label>
						<input type='text' value={this.state.user} onChange={(event) => this.handleUserInput(event)} name='user' />
					</div>
					<div className='field'>
						<label htmlFor='passwd'>Password</label>
						<input type='password' value={this.state.password} onChange={(event) => this.handleUserInput(event)} name='passwd' />
					</div>
					<div class='field'>
                        <input type='text' name='loginerror' />
                    </div>
					<div className='ui error message'></div>
					<div className='ui two buttons'>
						<button className='ui button' type='submit' >Login</button>
						<div className='or'></div>
						<button className='ui button' type='button' onClick={this.props.regaction}>Register</button>
					</div>
				</form>
			</Modal>
		);
	}
}

export default AuthenticationModal;
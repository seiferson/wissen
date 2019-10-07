import React, { Component } from 'react';
import Modal from './Modal';

class RegisterModal extends Component{

	constructor(props){
		super(props);
		this.state = {
			user : '',
			email : '',
			avatar: '',
			passwd : ''
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
		//TODO validation of user input and clean fields
		this.props.action(this.state.user, this.state.passwd, this.state.email, this.state.avatar);
	}

	render(){
		return (
			<Modal title='Register an account' id='regmodal'>
			  <div className="ui medium image">
                <img src="https://avatars.dicebear.com/v2/human/02392383.svg" />
              </div>
              <div className="description">
                <div className="ui header">We've auto-chosen a profile image for you.</div>
                <p>We've grabbed the following image from the <a href="https://www.gravatar.com" target="_blank">gravatar</a> image associated with your registered e-mail address.</p>
                <p>Is it okay to use this photo?</p>
              </div>
              <div className='ui two buttons'>
                <button className='ui button' type='submit' >Create</button>
              </div>
			</Modal>
		);
	}
}

export default RegisterModal;
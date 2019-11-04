import React, {Fragment, Component} from 'react';
import Modal from './Modal';

class RegisterModal extends Component{

	constructor(props){
		super(props);
		this.state = {
			user : '',
			email : '',
			avatar: md5(Math.random().toString()),
			passwd : '',
			cnfpasswd: ''
		}
		this.handleUserInput = this.handleUserInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleSwitchAvatarImage = this.handleSwitchAvatarImage.bind(this);
	}

	handleSwitchAvatarImage() {
	    this.setState({
	        avatar : md5(Math.random().toString())
    	});
	}

	handleUserInput(e) {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({[name]: value});
	}

	handleSubmit(e) {
		e.preventDefault();
		//this.props.action(this.state.user, this.state.passwd, this.state.email, this.state.avatar);
	}

	render(){
		return (
			<Modal title='Register an account' id='regmodal'>
              <div className='ui stackable grid'>
                <div className='four wide column'>
                  <img className="ui bordered image" src={`https://avatars.dicebear.com/v2/bottts/${this.state.avatar}.svg`} />
                  <br/>
                  <button className='fluid ui icon basic button' type='button' onClick={this.handleSwitchAvatarImage}>
                    <i class="redo alternate icon"></i> Switch avatar image
                  </button>
                </div>
                <div className='twelve wide column'>
                  <form className='ui form' onSubmit={this.handleSubmit}>

                      <div className='field'>
                        <label htmlFor='user'>Username</label>
                        <input type='text' value={this.state.user} onChange={(event) => this.handleUserInput(event)} name='user' />
                      </div>
                      <div className='field'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' value={this.state.email} onChange={(event) => this.handleUserInput(event)} name='email' />
                       </div>
                    <div className='two fields'>
                      <div className='field'>
                        <label htmlFor='passwd'>Password</label>
                        <input type='password' value={this.state.password} onChange={(event) => this.handleUserInput(event)} name='passwd' />
                      </div>
                      <div className='field'>
                        <label htmlFor='cnfpasswd'>Confirm password</label>
                        <input type='password' value={this.state.cnfpasswd} onChange={(event) => this.handleUserInput(event)} name='cnfpasswd' />
                      </div>
                    </div>
                    <button className='ui fluid button' type='submit' >Register</button>
                  </form>
                </div>
              </div>
			</Modal>
		);
	}
}

export default RegisterModal;
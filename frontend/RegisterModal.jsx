import React, {Fragment, Component} from 'react';
import Modal from './Modal';

class RegisterModal extends Component{

	constructor(props){
		super(props);

		this.state = {
			user : '',
			email : '',
			avatar: md5(Math.random().toString()),
			password : '',
			confirmpassword: ''
		};

		this.handleUserInput = this.handleUserInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleSwitchAvatarImage = this.handleSwitchAvatarImage.bind(this);
	}

	componentDidMount() {
        $('#regform').form({
            fields : {
                user : {
                    identifier : 'user',
                    rules : [
                        {type : 'empty', prompt : 'Username cannot be empty'},
                        {type : 'maxLength[25]', prompt : 'Username cannot be larger than 25 characters'}
                    ]
                },
                email : {
                    identifier : 'email',
                    rules : [{type : 'email', prompt : 'Please provide a valid email address'}]
                },
                password : {
                    identifier : 'password',
                    rules : [
                        {type : 'empty', prompt : 'Password cannot be empty'},
                        {type : 'minLength[8]', prompt : 'Password should be at least 8 characters long'}
                    ]
                },
                confirmpassword : {
                    identifier : 'confirmpassword',
                    rules : [{type : 'match[password]', prompt : 'Passwords do not match'}]
                }
            },
            onSuccess : function(event, fields){
                event.preventDefault();
            }
        });
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
	    console.log('this is the handlesubmit');
		e.preventDefault();

        if($('#regform').form('is valid')){
            console.log('validation passed');
            createUser(
                this.state.user,
                this.state.confirmpassword,
                this.state.email,
                this.state.avatar,
                this.props.callback
            );
        }
	}

	render(){
		return (
			<Modal title='Register an account' id='regmodal'>
			  <div className='ui stackable grid'>
                <div className='four wide column'>
                  <img
                    className='ui bordered image'
                    src={`https://avatars.dicebear.com/v2/jdenticon/${this.state.avatar}.svg`} />
                  <br/>
                  <button className='fluid ui icon basic button' type='button' onClick={this.handleSwitchAvatarImage}>
                    <i className='redo alternate icon'></i> Switch avatar image
                  </button>
                </div>
                <div className='twelve wide column'>
                  <form className='ui form' onSubmit={this.handleSubmit} id='regform'>
                    <div className='field'>
                      <label htmlFor='user'>Username</label>
                      <input
                        type='text'
                        maxLength={25}
                        value={this.state.user}
                        onChange={(event) => this.handleUserInput(event)}
                        name='user' />
                    </div>
                    <div className='field'>
                      <label htmlFor='email'>Email</label>
                      <input
                        type='email'
                        value={this.state.email}
                        onChange={(event) => this.handleUserInput(event)}
                        name='email' />
                    </div>
                    <div className='two fields'>
                      <div className='field'>
                        <label htmlFor='password'>Password</label>
                        <input
                          type='password'
                          id='password'
                          value={this.state.password} onChange={(event) => this.handleUserInput(event)}
                          name='password' />
                      </div>
                      <div className='field'>
                        <label htmlFor='confirmpassword'>Confirm password</label>
                        <input
                          type='password'
                          value={this.state.confirmpassword}
                          onChange={(event) => this.handleUserInput(event)}
                          name='confirmpassword' />
                      </div>
                    </div>
                    <div className='ui success message'>
                      <div className='header'>Account created</div>
                      <p>Please review your email inbox and follow the link to activate your account</p>
                    </div>
                    <div className='ui error message' id='regdisplayerrors'></div>
                    <button className='ui fluid button' type='submit' >Register</button>
                  </form>
                </div>
              </div>
			</Modal>
		);
	}
}

export default RegisterModal;
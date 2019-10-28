import React, {Component, Fragment} from 'react';
import TopMenu from './TopMenu';
import AuthenticationModal from './AuthenticationModal';
import LinkIconLabel from './LinkIconLabel';
import IconMessage from './IconMessage';
import RegisterModal from './RegisterModal';
import ToDoList from './ToDoList';

class Home extends Component {

	constructor(props) {
		super(props);

		this.state = {
        	user : $.cookie('authuser'),
        	avatar : $.cookie('avatar')
        };

		this.handleStateChange = this.handleStateChange.bind(this);
		this.handleAuthModalAction = this.handleAuthModalAction.bind(this);

        checkTokenFromCookies(this.handleStateChange, function(){});



		this.handleRegisterModalAction = this.handleRegisterModalAction.bind(this);
		this.handleRegister = this.handleRegister.bind(this);
	}

	handleStateChange(attribute, value) {
	    this.setState({[attribute]: value});
	}
	
	handleAuthModalAction(){
		checkTokenFromCookies(
		    this.handleStateChange,
		    function () {
		        if($.cookie('authuser') === 'anonymous'){
		            $('#authform').form('clear');
		            $('[name="loginerror"]').val('value');
		            $('#authmodal').modal('show');
                }
		    }
		);
	}

	handleRegisterModalAction(){
	    $('#regmodal').modal('show');
	}

	handleRegister(user, password, email, avatar) {
        $.ajax({
        	type: 'POST',
        	url: '/accounts',
        	headers: {
        		'Accept' : 'application/json'
        	},
        	contentType: 'application/json',
        	data: JSON.stringify({
        		'password' : password,
        		'nickname' : user,
        		'email' : email,
        		'avatarSeed' : avatar
        	}),
        	error: function(XMLHttpRequest) {
        		console.log('not right');
        	},
        	success: function(resultData) {
        		console.log('ok');
        	}
        });
	}
	
	render(){
		return(
			<Fragment>
				<TopMenu user={this.state.user} action={this.handleAuthModalAction} avatar={this.state.avatar} />
				<div className='ui container'>
					<div className='ui segment'>
						<h2 className='ui center aligned icon header'>
							<i className='circular chess rook icon'></i>
							Wissen
						</h2>
					</div>
					<div className='ui stackable two column grid'>
						<div className='column'>
                            <ToDoList user={this.state.user}/>
						</div>
					</div>
				</div>
				<AuthenticationModal callback={this.handleStateChange} regaction={this.handleRegisterModalAction} />
				<RegisterModal action={this.handleRegister}/>
			</Fragment>
		);
	}
	
}

export default Home;
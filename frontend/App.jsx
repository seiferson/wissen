import React, { Component, Fragment } from 'react';
import TopMenu from './TopMenu';
import AuthenticationModal from './AuthenticationModal';
import Tracker from './Tracker';

class App extends Component{
	
	constructor(props){
		super(props);
		
		//Function register
		this.login = this.login.bind(this);
		this.validateToken = this.validateToken.bind(this);
		this.showAuthModal = this.showAuthModal.bind(this);
		
		this.validateToken();
		
		this.state = {
			userName : $.cookie('authuser')
		}
	}
	
	validateToken(){
		if($.cookie('authuser') != undefined  && $.cookie('authuser') !== 'Anonymous' && $.cookie('authtoken') != undefined) {
			$.ajax({
				type: 'GET',
				url: '/oauth/check_token?token=' + $.cookie('authtoken'),
				headers: {
					'Authorization' : 'Basic bWFzdGVyOjEyMzQ1Ng==',
					'Accept' : 'application/json'
				},
				success: function(response) {
					//Nothing to do
				},
				error: function(XMLHttpRequest) {
					$.removeCookie('authuser');
					$.removeCookie('authtoken');
					$.removeCookie('hashuser');
					$.cookie('authuser', 'Anonymous');
				}
			});
		} else {
			$.cookie('authuser', 'Anonymous');
		}
	}
	
	
	
	showAuthModal(){
		this.validateToken();
		if($.cookie('authuser') == undefined || $.cookie('authuser') === 'Anonymous'){
			$('#authmodal').modal('show');
		}
	}
	
	login(user,passwd){
		var that = this;
		$.ajax({
			type: 'POST',
			url: '/oauth/token',
			headers: {
				'Authorization' : 'Basic bWFzdGVyOjEyMzQ1Ng==',
				'Accept' : 'application/json'
			},
			contentType: 'application/x-www-form-urlencoded',
			data: {
				password : passwd,
				username : user,
				grant_type : 'password'
			},
			error: function(XMLHttpRequest) {
				if(XMLHttpRequest.status === 400) {
				}
			},
			success: function(resultData) {
				$.cookie('authtoken', resultData.access_token);
				$.cookie('authuser', user);
				$.cookie('hashuser', (md5(user)).toUpperCase());
				$('#authmodal').modal('hide');
				that.setState({
					userName : $.cookie('authuser')
				});
			}
		});
	}
	
	render(){
		
		return (
			<Fragment>
				<TopMenu userName={this.state.userName} action={this.showAuthModal} />
				<Tracker />
				<AuthenticationModal login={this.login} />
			</Fragment>
		);
	}
}

ReactDOM.render( <App/>, document.getElementById('root'));

export default App;

import React, { Component, Fragment } from 'react';
import TopMenu from './TopMenu';
import AuthenticationModal from './AuthenticationModal';
import Form from './Form';

class App extends Component{
	
	constructor(props){
		super(props);
		this.state = {
			userName : 'Anonymous'
		}
		this.login = this.login.bind(this);
	}
	
	showAuthModal(){
		$('#authmodal').modal('show');
	}
	
	login(user,passwd){
		var that = this;
		$.ajax({
			type: 'POST',
			url: "/oauth/token",
			headers: {
				"Authorization" : "Basic bWFzdGVyOjEyMzQ1Ng==",
				"Accept" : "application/json"
			},
			contentType: "application/x-www-form-urlencoded",
			data: {
				password : passwd,
				username : user,
				grant_type : "password"
			},
			error: function(XMLHttpRequest) {
				if(XMLHttpRequest.status === 400) {
				}
			},
			success: function(resultData) {
				$.cookie("authtoken", resultData.access_token);
				$.cookie("authuser", user);
				$.cookie("hashuser", (md5(user)).toUpperCase());
				$("#authmodal").modal("hide");
				that.setState({
					userName : $.cookie("authuser")
				})
			}
		});
	}
	
	render(){
		
		return (
			<Fragment>
				<div className="ui top attached menu">
					<div className="ui item">
						<a href="/"><h3 className="ui header">Wissen</h3></a>
					</div>
					<div className="ui right item" onClick={this.showAuthModal}>
						<i className="large user circle outline icon"></i>
						<span>{this.state.userName}</span>
					</div>
				</div>
				<AuthenticationModal login={this.login}/>
			</Fragment>
		);
	}
}

ReactDOM.render( <App/>, document.getElementById('root'));

export default App;

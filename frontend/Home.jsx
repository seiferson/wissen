import React, {Component, Fragment} from 'react';
import TopMenu from './TopMenu';
import AuthenticationModal from './AuthenticationModal';

class Home extends Component {

	constructor(props) {
		super(props);
		
		this.handleAuthModalAction = this.handleAuthModalAction.bind(this);
		this.handleAuthentication = this.handleAuthentication.bind(this);
		this.handleAuthenticationResult = this.handleAuthenticationResult.bind(this);
		
		checkTokenFromCookies();
		
		this.state = {
			user : $.cookie('authuser')
		};
	}
	
	handleAuthModalAction(){
		checkTokenFromCookies();
		if($.cookie('authuser') === 'anonymous'){
			$('#authmodal').modal('show');
		}
	}

	handleAuthentication(user,password){
		login(user,password,this.handleAuthenticationResult);
	}
	
	handleAuthenticationResult(resultFlag){
		if(resultFlag){
			$('#authmodal').modal('hide');	
			this.setState({
				user : $.cookie('authuser')
			});
		}
	}
	
	render(){
		return(
			<Fragment>
				<TopMenu user={this.state.user} action={this.handleAuthModalAction} />
				<AuthenticationModal action={this.handleAuthentication} />
			</Fragment>
		);
	}
	
}

export default Home;
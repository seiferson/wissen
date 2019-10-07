import React, {Component, Fragment} from 'react';
import TopMenu from './TopMenu';
import AuthenticationModal from './AuthenticationModal';
import LinkIconLabel from './LinkIconLabel';
import IconMessage from './IconMessage';
import RegisterModal from './RegisterModal';

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

	handleRegisterModalAction(){
	    $('#regmodal').modal('show');
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
				<div className='ui container'>
					<div className='ui segment'>
						<h2 className='ui center aligned icon header'>
							<i className='circular chess rook icon'></i>
							Wissen
						</h2>
					</div>
					<div className='ui stackable two column grid'>
						<div className='column'>
							<IconMessage type='info' icon='sticky note' header='Welcome'>
								<p>{"Seiferson's personal lab for software development"}</p>
								<div className='ui labels'>
									<LinkIconLabel color='gray' icon='github' url='https://github.com/seiferxx' text='seiferxx' />
									<LinkIconLabel color='blue' icon='square linkedin' url='https://twitch.tv/seiferson' text='Cuauhtemoc Herrera' />
									<LinkIconLabel color='red' icon='google' url='http://google.com' text='seifer.ch@gmail.com' />
									<LinkIconLabel color='pink' icon='instagram' url='http://google.com' text='seiferson_' />
									<LinkIconLabel color='blue' icon='playstation' url='http://google.com' text='seif145' />
									<LinkIconLabel color='gray' icon='steam' url='http://google.com' text='seifer.ch' />
									<LinkIconLabel color='purple' icon='twitch' url='https://twitch.tv/seiferson' text='seiferson' />
								</div>
							</IconMessage>
						</div>
					</div>
				</div>
				<AuthenticationModal action={this.handleAuthentication} regaction={this.handleRegisterModalAction} />
				<RegisterModal />
			</Fragment>
		);
	}
	
}

export default Home;
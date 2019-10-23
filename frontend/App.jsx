import React, {Component, Fragment} from 'react';
import Home from './Home';

class App extends Component {
	
	constructor(props) {
		super(props);

		this.handleStateChange = this.handleStateChange.bind(this);
		
		if($.cookie('layout') === undefined){
        	$.cookie('layout','home');
        }

        if($.cookie('authuser') === undefined){
        	$.cookie('authuser', 'anonymous');
        	$.cookie('avatar', md5(Math.random().toString()));
        }
		
		this.state = {
			layout : $.cookie('layout')
		}
	}

	handleStateChange(attribute, value) {
        this.setState({[name]: value});
    }
	
	render(){
		if(this.state.layout === 'home'){
			return (<Home layoutCallback={this.handleStateChange}/>);
		}
		return (<Fragment />);
	}
}

ReactDOM.render( <App/>, document.getElementById('root'));

export default App;

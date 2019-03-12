import React, { Component, Fragment } from 'react';
import Home from './Home';

class App extends Component {
	
	constructor(props) {
		super(props);
		
		this.handleSwitchLayout = this.handleSwitchLayout.bind(this);
		
		loadContextFromCookies();
		
		this.state = {
			layout : $.cookie('layout')
		}
	}
	
	handleSwitchLayout(newLayout){
		//TODO validate layout
		$.cookie('layout', newLayout);
		this.setState({
			layout : newLayout
		});
	}
	
	render(){
		if(this.state.layout === 'home'){
			return (<Home layoutCallback={this.handleSwitchLayout}/>);
		} 
		return (<Fragment />);
	}
}

ReactDOM.render( <App/>, document.getElementById('root'));

export default App;

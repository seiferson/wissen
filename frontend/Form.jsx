import React, {Component} from 'react';

class Form extends Component{

	render(){
		return (
		  <form className='ui form'>
		    {this.props.children}
		  </form>
		);
	}
}

export default Form;
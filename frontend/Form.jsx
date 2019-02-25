import React, { Component } from 'react';

class Field extends Component{
	
	render(){
		return (
			<div className='field'>
				<label htmlFor={this.props.name}>{this.props.label}</label>
				<input type={this.props.type} id={this.props.id} name={this.props.name} />
			</div>
		);
	}
}

class Form extends Component{
	
	render(){
		return (
			<form className='ui form'>
				{this.props.fields.map((entry, i) =>{
					return(
						<Field id={entry.id} name={entry.name} type={entry.type} label={entry.label} />
					);
				})}
			</form>
		);
	}
}

export default Form;     
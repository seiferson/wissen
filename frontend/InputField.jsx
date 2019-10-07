import React, {Component} from 'react';

class InputField extends Component {

	render() {
		return (
		  <div className='field'>
		    <label htmlFor={this.props.name}>{this.props.label}</label>
		    <input
		      type={this.props.type}
		      id={this.props.name}
		      name={this.props.name}
		      value={this.props.var}
		    />
			</div>
		);
	}
}

export default InputField;
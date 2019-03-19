import React, { Component } from 'react';

class LinkIconLabel extends Component {
	
	render(){
		return (
			<a className={`ui circular ${this.props.color} label`} href={this.props.url}>
				<i className={`${this.props.icon} icon`}></i>
				{this.props.text}
			</a>
		);
	}

}

export default LinkIconLabel;
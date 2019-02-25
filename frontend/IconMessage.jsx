import React, { Component } from 'react';

class IconMessage extends Component{
	
	render(){
		return (
			<div className="ui icon message">
				<i className="id badge icon" />
				<div className="content">
					<div className="header">{this.props.header}</div>
					<p>{this.props.message}</p>
				</div>
			</div>
		);
	}
}

export default IconMessage;
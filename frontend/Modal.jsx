import React, { Component } from 'react';

class Modal extends Component{
	
	componentDidMount() {
		$(`#${this.props.id}`).modal({allowMultiple: false});
	}
	
	render(){
		return (
			<div className="ui modal" id={this.props.id}>
				<i className="close icon" />
				<div className="header">{this.props.title}</div>
				<div className="content">{this.props.children}</div>
			</div>
		);
	}
}

export default Modal;

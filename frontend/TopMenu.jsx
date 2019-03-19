import React, { Component } from 'react';

class TopMenu extends Component{

	render(){
		return (
			<div className="ui top attached menu">
				<div className="ui item">
					<a href="/"><h3 className="ui header">Wissen</h3></a>
				</div>
				<div className="ui right item" onClick={this.props.action}>
					<i className="large user circle outline icon"></i>
					<span>{this.props.user}</span>
				</div>
			</div>
		);
	}
}

export default TopMenu;

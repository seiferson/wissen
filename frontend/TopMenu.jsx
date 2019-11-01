import React, { Component } from 'react';

class TopMenu extends Component{

    constructor(props){
        super(props);
    }

	render(){
		return (
			<div className="ui top attached menu">
				<div className="ui item">
					<a href="/"><h3 className="ui header">Wissen</h3></a>
				</div>
				<div className="ui right item" onClick={this.props.action}>
					<img className="ui bordered avatar image" src={`https://avatars.dicebear.com/v2/bottts/${this.props.avatar}.svg`} />
					<span>{this.props.user}</span>
				</div>
			</div>
		);
	}
}

export default TopMenu;

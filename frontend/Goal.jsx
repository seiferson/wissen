import React, { Component } from 'react';

class Goal extends Component {
	
	componentDidMount(){
		$('.ui.progress').progress();
	}

	render(){
		let color = getGoalColor(this.props.obj);
		let progress = calculateGoalProgress(this.props.obj);
		let mainClass = `ui ${color} segment`;
		let flagClass = `${color} flag checkered icon`;
		let labelClass = `ui top right attached ${color} label`;
		return(
			<div className={mainClass}>
				<div className={labelClass}>{formatDate(this.props.obj.date)}</div>
				<h3 className="ui center aligned header">
					<div className="content">{this.props.obj.title} <i className={flagClass} /></div>
				</h3>
				<div className="ui progress" data-percent={progress} id={this.props.obj.id}>
					<div className="bar"></div>
					<div className="label">{this.props.obj.state}</div>
				</div>
			</div>
		);
	}
}

export default Goal;
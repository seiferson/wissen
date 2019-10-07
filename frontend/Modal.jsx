import React, {Component} from 'react';

class Modal extends Component{
	
	componentDidMount() {
		$(`#${this.props.id}`).modal({allowMultiple: false});
	}
	
	render(){
		return (
			<div className={`ui ${this.props.mtype} modal`} id={this.props.id}>
				<div className='header'>{this.props.title}</div>
				<div className={`${this.props.ctype} content`}>{this.props.children}</div>
			</div>
		);
	}
}

export default Modal;

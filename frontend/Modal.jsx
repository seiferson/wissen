import React, {Component} from 'react';

class Modal extends Component{
	
	componentDidMount() {
		$(`#${this.props.id}`).modal({allowMultiple: false});
	}
	
	render(){
	    let title;
	    if( this.props.title != undefined){
            title = <div className='header'>{this.props.title}</div>
	    }
		return (
			<div className={`ui ${this.props.mtype} modal`} id={this.props.id}>
			    {title}
				<div className={`${this.props.ctype} content`}>
				    {this.props.children}
				</div>
			</div>
		);
	}
}

export default Modal;

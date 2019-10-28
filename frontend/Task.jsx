import React, {Component} from 'react';

class Task extends Component {


	render(){
	    var task = this.props.task;
	    var iconClass = getTaskIconClass(task.completed, task.expired, task.dueDate, task.expirationDate);

		return(
		    <div class="item">
		        <i class={`large ${iconClass} middle aligned icon`} onClick={this.props.callback}></i>
		        <div class="content" onClick={this.props.action}>
		            <div class="header">{task.title}</div>
		            <div class="description">{task.description}</div>
                </div>
            </div>
		);
	}
}

export default Task;
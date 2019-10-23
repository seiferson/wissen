import React, {Component} from 'react';

class Task extends Component {

	render(){
	    var iconClass = getTaskIconClass(task.completed, task.expired, task.dueDate, task.expirationDate);

		return(
		    <div class="item">
		        <i class={`large ${iconClass} middle aligned icon`}></i>
		        <div class="content">
		            <div class="header">{task.title}</div>
		            <div class="description">{task.description}</div>
                </div>
            </div>
		);
	}
}

export default Task;
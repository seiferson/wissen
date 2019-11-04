import React, {Component} from 'react';

class Task extends Component {

	render(){
	    var task = this.props.task;
	    var iconClass = getTaskIconClass(task.completed, task.expired, task.dueDate, task.expirationDate);
        var that = this;
		return(
		    <div className="item">
		        <i className={`large ${iconClass} middle aligned icon`} onClick={function(){
                    
		        }}></i>
		        <div class="content" onClick={function(){
                    that.props.task.viewAction();
                    $('#taskmodal').modal('show');
                }}>
		            <div class="header">{task.title}</div>
		            <div class="description">{task.description}</div>
                </div>
            </div>
		);
	}
}

export default Task;
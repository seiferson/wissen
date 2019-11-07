import React, {Component} from 'react';

class Task extends Component {

    render(){
        var iconClass = getTaskIconClass(this.props.task.completed, this.props.task.dueDate);
        var that = this;
        return(
            <div className='item'>
              <i className={`large ${iconClass} middle aligned icon`} onClick={function(){}}></i>
              <div className='content' onClick={function(){
                that.props.task.viewAction();
                 $('#taskmodal').modal('show');
              }}>
                <div className='header'>{this.props.task.title}</div>
                <div className='description'><pre>{this.props.task.description}</pre></div>
              </div>
            </div>
        );
    }
}

export default Task;
import React, {Component} from 'react';

class Task extends Component {

    render(){
        var iconClass = getTaskIconClass(this.props.task.completed, this.props.task.dueDate);
        var that = this;
        return(
            <div className='item'>
              <i className={`large ${iconClass} middle aligned icon`} onClick={function () {
                that.props.task.patchAction({completed : !that.props.task.completed});
              }}></i>
              <div className='content' onClick={this.props.task.viewAction}>
                <div className='header'>{this.props.task.title}</div>
                <div className='description'><pre style={{margin: '0'}}>{this.props.task.description}</pre></div>
              </div>
            </div>
        );
    }
}

export default Task;
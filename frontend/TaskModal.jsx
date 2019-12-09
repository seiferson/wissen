import React, {Component} from 'react';
import Modal from './Modal';

class TaskModal extends Component {

    render(){
        return(
            <Modal id='taskmodal' mtype='basic'>
              <div className='ui orange fluid card'>
                <div className='content'>
                  <div className='header'>{this.props.task.title}</div>
                  <div className='meta'>
                    <span className='right floated time'>{this.props.task.creationDate}</span>
                    <a>{this.props.task.category}</a>
                  </div>
                  <p><br/></p>
                  <p style={{color:'black'}}><pre>{this.props.task.description}</pre></p>
                </div>
                <div className='extra content'>
                  <div className="ui fluid transparent left icon input">
                    <i className="flag outline icon"></i>
                    <input type="text" placeholder="Add an update" />
                  </div>
                </div>
              </div>
            </Modal>
        );
    }
}

export default TaskModal;
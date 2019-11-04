import React, {Component} from 'react';
import Modal from './Modal';

class TaskModal extends Component {

    render(){
        return(
            <Modal id='taskmodal' mtype='basic'>
                <div className="ui fluid card">
                    <div className="content">
                        <div className="header">{this.props.task.title}</div>
                        <div className="meta">
                            <span className='right floated time'>{this.props.task.creationDate}</span>
                            <a>Category</a>
                        </div>
                        <p><br/></p>
                        <p style={{color:'black'}}>{this.props.task.description}</p>
                    </div>
                    <div className="extra content">
                        <div className="right floated author">
                            <img className ="ui avatar image" src={`https://avatars.dicebear.com/v2/bottts/${this.props.avatar}.svg`} /> {this.props.user}
                        </div>
                    </div>
                </div>
            </Modal>
        );
    }
}

export default TaskModal;
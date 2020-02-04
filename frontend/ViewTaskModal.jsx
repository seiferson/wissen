import React, {Component, Fragment} from 'react';
import Modal from './Modal';

class ViewTaskModal extends Component {

    render(){
        if(this.props.task === undefined) {
            return (<Fragment />);
        }

        var that = this;

        var formattedDate = dateDiffFormat(new Date(), new Date(this.props.task.creationDate)) + ' ago';
        var dueDateFormatted = formatDate(this.props.task.dueDate);

        return(
            <Modal id='taskmodal' modalType='basic' >
              <div className='ui fluid card'>
                <div className='content'>
                  <div className='meta'>
                    <span className='right floated'>{formattedDate}</span>
                    <a>{this.props.task.category}</a>
                  </div>
                  <span className='ui top right attached label' onClick={function() {
                    that.props.parentStateCallback({mode: 'edit'}, function() {$('#createtaskmodal').modal('show');});
                  }}>
                    <i className="edit outline grey icon"></i>
                    Due {dueDateFormatted}
                  </span>
                  <h4 className='ui header'>{this.props.task.title}</h4>
                  <p style={{color:'black'}}><pre>{this.props.task.description}</pre></p>
                </div>
              </div>
            </Modal>
        );
    }
}

export default ViewTaskModal;
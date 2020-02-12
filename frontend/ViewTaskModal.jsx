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
                  <i class="right floated trash alternate outline grey icon"></i>
                  <i class="right floated edit outline grey icon" onClick={function() {
                    that.props.parentStateCallback({mode: 'edit'}, function() {$('#createtaskmodal').modal('show');});
                  }}></i>
                  <div className='header'>{this.props.task.title}</div>
                  <div className='meta'>
                    {formattedDate}
                    <span className='right floated'>Due {dueDateFormatted}</span></div>
                  <div className='description'>
                    <p style={{color:'black'}}><pre>{this.props.task.description}</pre></p>
                  </div>
                </div>
              </div>
            </Modal>
        );
    }
}

export default ViewTaskModal;
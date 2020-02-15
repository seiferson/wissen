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

        var tags = (<Fragment />);
        if(this.props.task.tags != undefined && this.props.task.tags.length > 0) {
            tags = (<div className="ui labels">
              {this.props.task.tags.map((entry, i) =>{ return(
                  <div className="ui teal label">
                    <i className="tag icon"></i>
                    {entry}
                  </div>
              );})}
            </div>);
        }

        return(
            <Modal id='taskmodal' modalType='basic' >
              <div className='ui fluid card'>
                <div className='content'>
                  <i class="right floated trash alternate outline grey icon" onClick={function() {
                    that.props.task.deleteAction();
                  }}></i>
                  <i class="right floated edit outline grey icon" onClick={function() {
                    that.props.parentStateCallback({mode: 'edit'}, function() {$('#createtaskmodal').modal('show');});
                  }}></i>
                  <div className='header'>{this.props.task.title}</div>
                  <div className='meta'>
                    {formattedDate}
                    <span className='right floated'>Due {dueDateFormatted}</span></div>
                  <div className='description'>
                    <p style={{color:'black'}}><pre>{this.props.task.description}</pre></p>
                    {tags}
                  </div>
                </div>
                <div class="extra content">
                  <div class="right floated author">
                    <img class="ui avatar image" src={`https://avatars.dicebear.com/v2/jdenticon/${this.props.task.id}.svg`}/> {this.props.task.id}
                  </div>
                </div>
              </div>
            </Modal>
        );
    }
}

export default ViewTaskModal;
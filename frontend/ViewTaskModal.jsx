import React, {Component, Fragment} from 'react';
import Modal from './Modal';

class ViewTaskModal extends Component {

    constructor(props){
        super(props);

        this.state = {
            update : ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    }

    handleSubmit(e){
        e.preventDefault();

        this.props.task.updates.push({
            content : this.state.update,
            date : (new Date()).toJSON(),
            avatar : this.props.avatar,
            user : this.props.user
        });

        this.props.task.patchAction({updates: this.props.task.updates});
        this.setState({update : ''});
    }

    render(){
        if(this.props.task === undefined) {
            return (<Fragment />);
        }

        var that = this;

        var formattedDate = dateDiffFormat(new Date(), new Date(this.props.task.creationDate)) + ' ago';
        var dueDateFormatted = formatDate(this.props.task.dueDate);
        var updates = (<div className="ui message">No updates so far!</div>);

        if(this.props.task.updates.length > 0) {
            updates = (
                <div className="ui comments">{this.props.task.updates.map((entry, i) =>{return(
                  <div className="comment">
                    <a className="avatar">
                      <img src={`https://avatars.dicebear.com/v2/jdenticon/${entry.avatar}.svg`} />
                    </a>
                    <div className="content">
                      <a className="author">{entry.user}</a>
                      <div className="metadata"><span>{formatDate(entry.date)}</span></div>
                      <div className="text">{entry.content}</div>
                    </div>
                  </div>);})}
                </div>
            );
        }

        return(
            <Modal id='taskmodal' modalType='basic' >
              <div className='ui fluid card'>
                <div className='content'>
                  <div className='meta'>
                    <span className='right floated'>{formattedDate}</span>
                    <a>{this.props.task.category}</a>
                  </div>
                  <div className='ui segment'>
                    <span className='ui top right attached label' onClick={function() {
                        that.props.parentStateCallback({mode: 'edit'}, function() {$('#createtaskmodal').modal('show');});
                      }}>
                      <i className="edit outline grey icon"></i>
                      Due {dueDateFormatted}
                    </span>
                    <h4 className='ui header'>{this.props.task.title}</h4>
                    <p style={{color:'black'}}><pre>{this.props.task.description}</pre></p>
                  </div>
                  <h4 className='ui dividing header'>Updates</h4>
                  {updates}
                </div>
                <div className='extra content'>
                  <form onSubmit={this.handleSubmit}>
                  <div className='ui fluid transparent left icon input'>
                    <i className='flag outline icon'></i>
                    <input
                      type='text' placeholder='Add an update'
                      value={this.state.update}
                      name='update'
                      onChange={(event) => this.handleUserInput(event)} />
                  </div>
                  </form>
                </div>
              </div>
            </Modal>
        );
    }
}

export default ViewTaskModal;
import React, {Component} from 'react';
import Modal from './Modal';

class TaskModal extends Component {

    constructor(props){
        super(props);

        this.state = {
            update : '',
            task : {}
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);
    }

    static getDerivedStateFromProps(props, prevState){
        return {task : props.task};
    }

    handleUserInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    }

    handleSubmit(e){
        e.preventDefault();
        var xtask = this.state.task;
        xtask.updates.push({
            content : this.state.update,
            date : (new Date()).toJSON(),
            avatar : this.props.avatar,
            user : this.props.user
        });
        this.state.task.patchAction();
        this.setState({task : xtask});
        this.setState({update : ''});
    }

    render(){
        var formattedDate = dateDiffFormat(new Date(), new Date(this.state.task.creationDate)) + ' ago';
        var dueDateFormatted = formatDate(this.state.task.dueDate);
        var updates = undefined;

        if(this.props.task.updates.length > 0) {
            updates = (
                <div className="ui comments">{this.state.task.updates.map((entry, i) =>{return(
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
        } else {
            updates = (
                <div className="ui message">No updates so far!</div>
            );
        }

        return(
            <Modal id='taskmodal' mtype='basic'>
              <div className='ui fluid card'>
                <div className='content'>
                  <div className='meta'>
                    <span className='right floated'>{formattedDate}</span>
                    <a>{this.state.task.category}</a>
                  </div>
                  <div class="ui segment">
                    <span
                      class="ui top right attached label"
                      onClick={function(){
                        $('#cretaskdisplayerrors').empty();
                        $('#createtaskform').form('clear');
                        $('#createtaskmodal').modal('show');
                        }}
                    >
                      <i className="edit outline grey icon"></i>
                      Due {dueDateFormatted}
                    </span>
                    <h4 className='ui header'>{this.state.task.title}</h4>
                    <p style={{color:'black'}}><pre>{this.state.task.description}</pre></p>
                  </div>
                  <h4 className="ui dividing header">Updates</h4>
                  {updates}
                </div>
                <div className='extra content'>
                  <form onSubmit={this.handleSubmit}>
                  <div className="ui fluid transparent left icon input">
                    <i className="flag outline icon"></i>
                    <input
                      type="text" placeholder="Add an update"
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

export default TaskModal;
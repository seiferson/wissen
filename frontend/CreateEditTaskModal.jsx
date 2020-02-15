import React, {Component} from 'react';
import Modal from './Modal';

class CreateEditTaskModal extends Component {

    constructor(props){
        super(props);

        this.state = {
            title: '',
            description : '',
            duedate : (new Date()).toISOString().substring(0,16),
            tags: [],
            tag: '',
            category : '',
            formTitle: '',
            buttonText: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleInit = this.handleInit.bind(this);
        this.handleTagsKeyDownEvent = this.handleTagsKeyDownEvent.bind(this);
        this.handleRemoveTagEvent = this.handleRemoveTagEvent.bind(this);
    }

    componentDidMount() {
        $('#createtaskform').form({
            fields: {
                title : {
                    identifier : 'title',
                    rules : [
                        {type : 'empty', prompt : 'You must provide a title for the task'},
                        {type : 'maxLength[70]', prompt : 'Title cannot be larger than 70 characters'}
                    ]
                }
            },
            onSuccess : function(event, fields){
                event.preventDefault();
            },
            keyboardShortcuts: false
        });
    }

    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    }

    handleSubmit(e) {
        e.preventDefault();
        var that = this;

        if($('#createtaskform').form('is valid')){
            if(this.props.mode === 'create') {
                $.ajax({
                    type: 'POST',
                    url: '/api/v1/tasks',
                    headers: {
                        'Authorization' : 'Bearer ' + this.props.token,
                        'Accept' : 'application/json'
                    },
                    contentType: 'application/json',
                    data: JSON.stringify({
                        'title' : that.state.title,
                        'dueDate' : that.state.duedate,
                        'description' : that.state.description,
                        'tags' : that.state.tags,
                    }),
                    error: function(XMLHttpRequest) {
                    },
                    success: function(resultData) {
                        setTimeout(function() {
                            that.props.getTasks();
                            $('#createtaskmodal').modal('hide');
                        }, 300);
                    }
                });
            } else if(this.props.mode === 'edit') {
                this.props.patchTask({
                    'title': this.state.title,
                    'description': this.state.description,
                    'dueDate': this.state.duedate,
                    'tags': this.state.tags
                }, this.props.task);
                setTimeout(function() {
                    $('#createtaskmodal').modal('hide');
                }, 300);
            }
        }
    }

    handleInit() {
        if(this.props.mode === 'create') {
            $('#cretaskdisplayerrors').empty();
            $('#createtaskform').form('clear');
            this.setState({
                formTitle: 'Create task',
                title: '',
                description: '',
                dueDate : (new Date()).toISOString().substring(0,16),
                tags : [],
                tag: '',
                buttonText: 'Create'
            });
        } else if(this.props.mode === 'edit') {
            this.setState({
                formTitle: 'Edit task ' + this.props.task.id,
                title: this.props.task.title,
                description: this.props.task.description,
                dueDate : (new Date(this.props.task.dueDate)).toISOString().substring(0,16),
                tags: this.props.task.tags,
                tag: '',
                buttonText: 'Edit'
            });
        }
   }

    handleTagsKeyDownEvent(event) {
        if(event.keyCode === 13) {
            event.preventDefault();
            if(!this.state.tags.includes(this.state.tag)){
                var current = this.state.tags;
                current.push(this.state.tag);

                this.setState({
                    tags: current,
                    tag: ''
                });
            } else {
                this.setState({
                    tag: ''
                });
            }
        }
    }

    handleRemoveTagEvent(tag) {
       var current = this.state.tags.filter(e => e !== tag);
       this.setState({
           tags: current
       });
    }

    render() {
        var that = this;
        return (
            <Modal id='createtaskmodal' onOpeningCallback={this.handleInit}>
              <form className='ui small form' id='createtaskform' onSubmit={this.handleSubmit}>
                <h4 className='ui dividing header'>{this.state.formTitle}</h4>
                <div className='field'>
                  <label>Title</label>
                  <input
                    type='text'
                    name='title'
                    maxLength={70}
                    value={this.state.title}
                    onChange={(event) => this.handleUserInput(event)} />
                </div>
                <div className='field'>
                  <label>Description</label>
                  <textarea
                    rows='2'
                    name='description'
                    value={this.state.description}
                    onChange={(event) => this.handleUserInput(event)} />
                </div>
                <div className='two fields'>
                  <div className='field'>
                    <label>Tags</label>
                    <input
                      type='text'
                      name='tag'
                      id='tagref'
                      value={this.state.tag}
                      onChange={(event) => this.handleUserInput(event)}
                      onKeyDown={(event) => this.handleTagsKeyDownEvent(event)} />
                  </div>
                  <div className='field'>
                    <label>Due date</label>
                    <input
                      type='datetime-local'
                      name='duedate'
                      value={this.state.duedate} onChange={(event) => this.handleUserInput(event)} />
                  </div>
                </div>
                <div className='two fields'>
                  <div className='field'>
                    <div className="ui labels">
                      {this.state.tags.map((entry, i) =>{ return(
                          <div class="ui teal label">
                            <i class="tag icon"></i>
                            {entry}
                            <i class="delete icon" onClick={function() {
                              that.handleRemoveTagEvent(entry);
                            }}></i>
                          </div>
                      );})}
                    </div>
                  </div>
                </div>
                <div className='ui error message' id='cretaskdisplayerrors'></div>
                <button className='ui small blue fluid button' type='submit' >{this.state.buttonText}</button>
              </form>
            </Modal>
        );
    }
}

export default CreateEditTaskModal;
import React, {Component} from 'react';
import Modal from './Modal';

class ManageTaskModal extends Component {

    constructor(props){
        super(props);

        this.state = {
            title : '',
            description : '',
            duedate : (new Date()).toISOString().substring(0,16),
            category : ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);
    }

    static getDerivedStateFromProps(props, prevState){
        $('#categoryDropdown').dropdown({
            onChange : function(value, text, $selectedItem) {
                console.log('something');
            }
        });


        return null;
    }

    componentDidMount() {
        $('#createtaskform').form({
            fields : {
                title : {
                    identifier : 'title',
                    rules : [
                        {type : 'empty', prompt : 'You must provide a title for the task'},
                        {type : 'maxLength[70]', prompt : 'Title cannot be larger than 70 characters'}
                    ]
                },
                category : {
                    identifier : 'category',
                    rules : [
                        {type : 'empty', prompt : 'You must choose a category for the task'},
                    ]
                }

            },
            onSuccess : function(event, fields){
                event.preventDefault();
            }
        });
    }

    handleUserInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    }

    handleSubmit(e){
        e.preventDefault();
        if($('#createtaskform').form('is valid')){
            createTask(this.state.title, this.state.description, this.state.duedate, this.state.category, this.props.callback);
            let that = this;
            setTimeout(function(){
                that.setState({
                    title : '',
                    description : '',
                    duedate : (new Date()).toISOString().substring(0,16),
                    category : ''
                });
                that.props.callback('mtmTask', {});
            }, 500);
        }
    }

    render(){
        return (
            <Modal id='createtaskmodal'>
              <form className='ui form' id='createtaskform' onSubmit={this.handleSubmit}>
                <h4 className='ui dividing header'>{this.state.componentTitle}</h4>
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
                    <label>Due date</label>
                    <input
                      type='datetime-local'
                      name='duedate'
                      value={this.state.duedate} onChange={(event) => this.handleUserInput(event)} />
                  </div>
                  <div className='field'>
                    <label>Category</label>
                    //Select a category
                  </div>
                </div>
                <div className='ui error message' id='cretaskdisplayerrors'></div>
                <button className='ui small blue fluid button' type='submit' >Create</button>
              </form>
            </Modal>
        );
    }
}

export default ManageTaskModal;
import React, {Component} from 'react';
import Modal from './Modal';

class CreateTaskModal extends Component {

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

    componentDidMount() {
        $('.ui.dropdown').dropdown();

        $('#createtaskform').form({
            fields : {
                title : {
                    identifier : 'title',
                    rules : [
                        {type : 'empty', prompt : 'You must provide a title for the task'},
                        {type : 'maxLength[70]', prompt : 'Title cannot be larger than 70 characters'}
                    ]
                },

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
        createTask(this.state.title, this.state.description, this.state.duedate, this.props.callback);
    }

    render(){
        return (
            <Modal id='createtaskmodal'>
                <form className="ui form" id='createtaskform' onSubmit={this.handleSubmit}>
                    <h3 class="ui dividing header">New task</h3>
                    <div class="field">
                        <label>Title</label>
                        <input
                            type="text"
                            name="title"
                            maxLength={70}
                            value={this.state.title}
                            onChange={(event) => this.handleUserInput(event)}
                        />
                    </div>
                    <div class="field">
                        <label>Description</label>
                        <textarea
                            rows="2"
                            name="description"
                            value={this.state.description}
                            onChange={(event) => this.handleUserInput(event)}
                        />
                    </div>
                    <div className="two fields">
                        <div className="field">
                            <label>Due date</label>
                            <input type="datetime-local" name="duedate" value={this.state.duedate} onChange={(event) => this.handleUserInput(event)} />
                        </div>
                        <div className="field">
                            <label>Category</label>
                            <select class="ui fluid dropdown">
                                <option value="Misc">Misc</option>
                                <option value="Chores">Chores</option>
                            </select>
                        </div>
                    </div>
                    <button className='ui fluid button' type='submit' >Create</button>
                </form>
            </Modal>
        );
    }
}

export default CreateTaskModal;
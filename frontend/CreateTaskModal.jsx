import React, {Component} from 'react';
import Modal from './Modal';

class CreateTaskModal extends Component {

    constructor(props){
        super(props);

        this.state = {
            title : '',
            description : '',
            duedate : undefined
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
     }

     render(){
         return (
            <Modal id='createtaskmodal'>
                <form className="ui form">
                    <h3 class="ui dividing header">New task</h3>
                    <div class="field">
                        <label>Title</label>
                        <input type="text" name="title" value={this.state.title} onChange={(event) => this.handleUserInput(event)} />
                    </div>
                    <div class="field">
                        <label>Description</label>
                        <textarea rows="2" name="description" value={this.state.description} onChange={(event) => this.handleUserInput(event)} />
                    </div>
                    <div className="fields">
                        <div className="eight wide field">
                            <label>Due date</label>
                            <input type="datetime-local" name="duedate" value={this.state.duedate} onChange={(event) => this.handleUserInput(event)} />
                        </div>
                    </div>
                    <button className='ui fluid button' type='submit' >Create</button>
                </form>
            </Modal>
        );
     }
}

export default CreateTaskModal;
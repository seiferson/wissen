import React, {Component, Fragment} from 'react';
import Task from './Task';

class ToDoList extends Component {
    constructor(props){
        super(props);

        this.state = {
            user : this.props.user,
            tasks : []
        }

        this.handleStateChange = this.handleStateChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
    	this.handleUserInput = this.handleUserInput.bind(this);

    	getToDoList(this.handleStateChange);
    }

    handleStateChange(attribute, value) {
        this.setState({[attribute]: value});
    }

    componentWillReceiveProps(props) {
        getToDoList(this.handleStateChange);
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
        if(this.props.user === 'anonymous'){
            return <Fragment />
        }
    	return(
    		<div className='ui segment'>
    		    <h3 className="ui dividing header"><i class="fitted clipboard list icon"></i> Tasks</h3>
    		    <div className="ui relaxed divided list">
                {this.state.tasks.map((entry, i) =>{
                    return(
                    	<Task task={entry} />
                    );
                })}
                </div>
                <button className='ui fluid button' type='button' onClick={this.props.action} >Add task</button>
    		</div>
    	);
    }
}

export default ToDoList;
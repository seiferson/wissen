import React, {Component, Fragment} from 'react';
import Task from './Task';

class ToDoList extends Component {

    constructor(props){
        super(props);

        this.state = {
            filters : ['todo']
        }
    }

    static getDerivedStateFromProps(props, prevState){
        $('.ui.dropdown').dropdown();
        return null;
    }

    componentDidMount() {
        $('.ui.dropdown').dropdown();
    }

    render(){
        if(this.props.user === 'anonymous'){
            return <Fragment />
        }

        return(
            <div className='ui segment'>
              <h3 className='ui dividing header'><i className='fitted clipboard list icon'></i> Tasks</h3>
              <div className='ui form' id='taskfilterform'>
                <div className='field'>
                  <label>Filter</label>
                  <select multiple={true} value={this.state.filters} className='ui selection dropdown'>
                    <option value='todo'>ToDo</option>
                    <option value='completed'>Completed</option>
                  </select>
                </div>
              </div>
              <div className='ui relaxed divided list'>{
                this.props.tasks.map((entry, i) =>{
                  return(<Task task={entry} callback={this.props.callback}/>);
                })
              }</div>
              <button className='ui fluid button' type='button' onClick={function(){
                $('#cretaskdisplayerrors').empty();
                $('#createtaskform').form('clear');
                $('#createtaskmodal').modal('show');
              }} >Add task</button>
            </div>
        );
    }
}

export default ToDoList;
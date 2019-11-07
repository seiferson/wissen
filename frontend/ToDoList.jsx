import React, {Component, Fragment} from 'react';
import Task from './Task';

class ToDoList extends Component {

    render(){
        if(this.props.user === 'anonymous'){
            return <Fragment />
        }

        return(
            <div className='ui segment'>
              <h3 className='ui dividing header'><i className='fitted clipboard list icon'></i> Tasks</h3>
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
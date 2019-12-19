import React, {Component, Fragment} from 'react';
import Task from './Task';

class ToDoList extends Component {

    constructor(props){
        super(props);
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

        var tx = undefined;
        console.log(this.props.tasks);
        if(this.props.tasks.length > 0) {
            tx = (
              <div className='ui relaxed divided list'>
                {this.props.tasks.map((entry, i) =>{
                  return(<Task task={entry} callback={this.props.callback}/>);
                })}
              </div>
            );
        } else {
            tx = (<div>Empty</div>);
        }

        return(
            <div className='ui segment'>
              <h4 className='ui dividing header'>Tasks</h4>
              {tx}
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
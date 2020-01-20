import React, {Component, Fragment} from 'react';
import Task from './Task';

class ToDoList extends Component {

    constructor(props){
        super(props);
    }

    static getDerivedStateFromProps(props, prevState){
        //$('.ui.dropdown').dropdown();
        return null;
    }

    componentDidMount() {
        //$('.ui.dropdown').dropdown();
    }

    render(){
        if(this.props.user === 'anonymous'){
            return <Fragment />
        }

        var tx = undefined;
        let that = this;
        if(this.props.tasks.length > 0) {
            tx = (
              <div className='ui relaxed divided list'>
                {this.props.tasks.map((entry, i) =>{
                  return(<Task task={entry} callback={this.props.callback}/>);
                })}
              </div>
            );
        } else {
            tx = (<div className="ui message"><i class="coffee icon"></i> You are all set!</div>);
        }

        return(
            <div className='ui segment'>
              <h4 className='ui dividing header'>Tasks</h4>
              {tx}
              <button className='ui right floated tiny blue button' type='button' onClick={function(){
                $('#cretaskdisplayerrors').empty();
                $('#createtaskform').form('clear');
                $('#createtaskmodal').modal('show');
              }} ><i class="plus icon"></i> Add task</button>
              <div style={{clear:'both'}}></div>
            </div>
        );
    }
}

export default ToDoList;
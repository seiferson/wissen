import React, {Component, Fragment} from 'react';
import Task from './Task';

class TaskDashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selected : 'to do',
            filters : [
                'past due',
                'completed'
            ]
        }
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
              <div className='ui attached segment'>
              <div className='ui relaxed divided list'>
                {this.props.tasks.map((entry, i) =>{
                  return(<Task task={entry} callback={this.props.callback}/>);
                })}
              </div>
              </div>
            );
        } else {
            tx = (<div class="ui attached segment"><div className="ui message"><i class="coffee icon"></i> You are all set!</div></div>);
        }

        return(
            <Fragment>
            <div class="ui top attached menu">
              <div class="header item"><i class="tasks icon"></i> Tasks {this.state.selected}</div>
              <div class="right menu">
                  <div class="ui item"><i class="plus icon"></i></div>
                  <div class="ui dropdown item">
                    <i class="filter icon"></i>
                    <i class="dropdown icon"></i>
                    <div class="menu">
                      {this.state.filters.map((entry, i) =>{
                        return(<div class="item">{entry}</div>);
                      })}
                    </div>
                  </div>
                </div>
              </div>
            {tx}
            </Fragment>
        );
    }
}

export default TaskDashboard;
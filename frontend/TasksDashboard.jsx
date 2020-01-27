import React, {Component, Fragment} from 'react';
import Task from './Task';
import CreateEditTaskModal from './CreateEditTaskModal';
import ViewTaskModal from './ViewTaskModal';

class TasksDashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tasks: [],
            task: undefined,
            selected : 'to do',
            url: '/api/v1/tasks/search/todo',
            filters : [
                'past due',
                'completed'
            ],
            mode: 'create'
        };

        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleGetTasks = this.handleGetTasks.bind(this);
        this.handlePatchTask = this.handlePatchTask.bind(this);
    }

    handleStateChange(object, callback) {
        this.setState(object, callback);
    }

    handlePatchTask(attributes, task) {
        var that = this;

        $.ajax({
            type: 'PATCH',
            url: '/api/v1/tasks/' + task.id,
            headers: {
                'Authorization' : 'Bearer ' + that.props.token,
                'Accept' : 'application/json'
            },
            contentType: 'application/json',
            data: JSON.stringify(attributes),
            error: function(XMLHttpRequest) {

            },
            success: function(resultData) {
                that.setState({'task' : task}, function() {that.handleGetTasks();});
            }
        });
    }

    handleGetTasks() {
        var that = this;

        this.props.authCallback(function() {
            $.ajax({
                type: 'GET',
                url: that.state.url,
                headers: {
                    'Authorization' : 'Bearer ' + that.props.token,
                    'Accept' : 'application/json'
                },
                contentType: 'application/x-www-form-urlencoded',
                success: function(data) {
                    data.forEach(function(element){

                        element.viewAction = function() {
                            that.setState({task: element}, function() {
                                $('#taskmodal').modal('show');
                            });
                        }

                        element.patchAction = function(attributes) {
                            that.handlePatchTask(attributes, element);
                            that.handleGetTasks();
                            that.setState({task: element});
                        }
                    });

                    that.setState({tasks: data});
                }
            });
        }, function() {});
    }

    componentDidMount() {
        var that =this;

        $('#taskfiltermenu').dropdown({
            onChange : function(value, text, $selectedItem) {
                var prev = that.state.selected;
                var newx = that.state.filters.filter(e => e !== value);
                newx.push(prev);

                var xurl = '/api/v1/tasks/search/todo';
                if(value === 'completed'){
                    xurl = '/api/v1/tasks/search/completed'
                } else if(value === 'past due') {
                    xurl = '/api/v1/tasks/search/pastdue'
                }

                that.setState({
                    selected: value,
                    filters: newx,
                    url: xurl
                }, that.handleGetTasks());
            }
        });

        this.handleGetTasks();
    }

    componentDidUpdate(prevProps, prevState) {
        var that =this;
        $('#taskfiltermenu').dropdown({
            onChange : function(value, text, $selectedItem) {
                var prev = that.state.selected;
                var newx = that.state.filters.filter(e => e !== value);
                newx.push(prev);

                var xurl = '/api/v1/tasks/search/todo';
                if(value === 'completed'){
                    xurl = '/api/v1/tasks/search/completed'
                } else if(value === 'past due') {
                    xurl = '/api/v1/tasks/search/pastdue'
                }

                that.setState({
                    selected: value,
                    filters: newx,
                    url: xurl
                }, that.handleGetTasks());
            }
        });

        var prevSignature = md5(JSON.stringify(prevState.tasks) + prevProps.user + prevProps.token);
        var currSignature = md5(JSON.stringify(this.state.tasks) + this.props.user + this.props.token);

        if(prevSignature !== currSignature){
            this.handleGetTasks();
        }
    }

    render() {
        if(this.props.user === 'anonymous') {
            return (<Fragment />);
        }

        var tasks = (<Fragment/>);
        var that = this;

        if(this.state.tasks.length > 0) {
            tasks = (
              <div className='ui relaxed divided list'>{this.state.tasks.map((entry, i) =>{return(
                <Task task={entry} />);})}
              </div>
            );
        } else {
            tasks = (<div className="ui message"><i class="coffee icon"></i> You are all set!</div>);
        }

        return(
            <Fragment>
              <div className="ui top attached menu">
                <div className="header item"><i className="tasks icon"></i> Tasks {this.state.selected}</div>
                <div className="right menu">
                  <div class='ui item' onClick={function() {
                    that.setState({mode: 'create'}, function() {$('#createtaskmodal').modal('show');});
                  }}><i className='plus icon'></i> Add a task</div>
                  <div className='ui dropdown item' id='taskfiltermenu'>
                    <i className='filter icon'></i>
                    <i className='dropdown icon'></i>
                    <div className='menu'>{this.state.filters.map((entry, i) =>{return(
                      <div className='item'>{entry}</div>);})}
                    </div>
                  </div>
                </div>
              </div>
              <div className='ui bottom attached segment'>
                {tasks}
                <div style={{clear:'both'}}></div>
              </div>
              <ViewTaskModal
                user={this.props.user}
                avatar={this.props.avatar}
                task={this.state.task}
                parentStateCallback={this.handleStateChange}/>
              <CreateEditTaskModal
                token={this.props.token}
                mode={this.state.mode}
                task={this.state.task}
                patchTask={this.handlePatchTask}
                getTasks={this.handleGetTasks}/>
            </Fragment>
        );
    }
}

export default TasksDashboard;
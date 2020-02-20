import React, {Component, Fragment} from 'react';
import Task from './Task';
import Pagination from './Pagination';
import ChartComponent from './ChartComponent';
import CreateEditTaskModal from './CreateEditTaskModal';
import ViewTaskModal from './ViewTaskModal';

class TasksDashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tasks: [],
            task: undefined,
            filters: [
                {
                    name: 'To do',
                    url: '/api/v1/tasks/search/todo?size=5&page=',
                    color: 'teal'
                }, {
                    name: 'Past due',
                    url: '/api/v1/tasks/search/pastdue?size=5&page=',
                    color: 'red'
                }, {
                    name: 'Completed',
                    url: '/api/v1/tasks/search/completed?size=5&page=',
                    color: 'green'
                }, {
                    name: 'Tag',
                    url: '/api/v1/tasks/search/bytag?size=5'
                }
            ],
            selectedFilter : {
                name: 'To do',
                url: '/api/v1/tasks/search/todo?size=5&page='
            },
            mode: 'create',
            pages: 1,
            currentPage: 1,
            tag: ''
        };

        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleGetTasks = this.handleGetTasks.bind(this);
        this.handlePatchTask = this.handlePatchTask.bind(this);
        this.handleDeleteTask = this.handleDeleteTask.bind(this);
        this.handleTagsKeyDownEvent = this.handleTagsKeyDownEvent.bind(this);
    }

    handleStateChange(object, callback) {
        this.setState(object, callback);
    }

    componentDidMount() {
        var that =this;

        this.setState({selectedFilter: this.state.filters[0]});

        $('#taskfiltermenu').dropdown({
            onChange : function(value, text, $selectedItem) {
                if(text === undefined) {
                    return;
                }

                that.setState({
                    selectedFilter: that.state.filters.find(obj => {return obj.name === value}),
                    currentPage: 1
                }, function() {
                    that.handleGetTasks();
                });
            },
            selectOnKeydown: false,
            onShow: function() {
                $('#taginput').val('');
                $('#taskfiltermenu').dropdown('clear');
            }
        });

        this.handleGetTasks();
    }

    componentDidUpdate(prevProps, prevState) {
        var that =this;

        $('#taskfiltermenu').dropdown({
            onChange : function(value, text, $selectedItem) {
                if(text === undefined) {
                    return;
                }

                that.setState({
                    selectedFilter: that.state.filters.find(obj => {return obj.name === value}),
                    currentPage: 1
                }, function() {
                    that.handleGetTasks();
                });

            },
            selectOnKeydown: false,
            onShow: function() {
                $('#taginput').val('');
                $('#taskfiltermenu').dropdown('clear');
            }
        });

        var prevSignature = md5(JSON.stringify(prevState.tasks) + prevProps.user + prevProps.token);
        var currSignature = md5(JSON.stringify(this.state.tasks) + this.props.user + this.props.token);

        if(prevSignature !== currSignature){
            this.handleGetTasks();
        }
    }

    handleDeleteTask(task) {
        var that = this;

        $.ajax({
            type: 'DELETE',
            url: '/api/v1/tasks/' + task.id,
            headers: {
                'Authorization' : 'Bearer ' + that.props.token,
                'Accept' : 'application/json'
            },
            contentType: 'application/json',
            error: function(XMLHttpRequest) {

            },
            success: function(resultData) {
                that.handleGetTasks();
                setTimeout(function() {
                    $('#taskmodal').modal('hide');
                }, 100);
            }
        });
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
                url: that.state.selectedFilter.url + (that.state.currentPage - 1),
                headers: {
                    'Authorization' : 'Bearer ' + that.props.token,
                    'Accept' : 'application/json'
                },
                contentType: 'application/x-www-form-urlencoded',
                success: function(data) {
                    that.setState({
                        pages: data.totalPages,
                        currentPage: data.number + 1
                    });
                    data.content.forEach(function(element){

                        element.viewAction = function() {
                            that.setState({task: element}, function() {
                                $('#taskmodal').modal('show');
                            });
                        }

                        element.patchAction = function(attributes) {
                            that.handlePatchTask(attributes, element);
                        }

                        element.deleteAction = function() {
                            that.handleDeleteTask(element);
                        }
                    });

                    that.setState({tasks: data.content});
                }
            });
        }, function() {});
    }

    handleTagsKeyDownEvent(event) {
        var that = this;

        if(event.keyCode === 13) {
            event.preventDefault();
            var filter = {...(this.state.filters.find(obj => {return obj.name === 'Tag'}))};
            filter.url = filter.url + '&tags=' + $('#taginput').val() +'&page=';
            filter.name = filter.name + ': ' + $('#taginput').val();
            $('#taskfiltermenu').dropdown('hide');
            this.setState({
                selectedFilter: filter,
                currentPage: 1
            }, function() {
                that.handleGetTasks();
            });
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
            tasks = (<div className='ui message'><i class='coffee icon'></i> You are all set!</div>);
        }

        return(
            <Fragment>
              <div className='ui top attached menu'>
                <div className='header item'><i className='tasks icon'></i>{this.state.selectedFilter.name}</div>
                <div className='right menu'>
                  <div class='ui item' onClick={function() {
                    that.setState({mode: 'create'}, function() {$('#createtaskmodal').modal('show');});
                  }}><i className='fitted plus icon'></i></div>
                  <div className='ui dropdown icon item' id='taskfiltermenu'>
                    <i className='fitted filter icon'></i>
                    <i className='dropdown icon'></i>
                    <div className='menu'>
                      <div class="header">Search tags</div>
                      <div class='ui input'>
                        <input
                          type='text'
                          id='taginput'
                          onKeyDown={(event) => this.handleTagsKeyDownEvent(event)}/>
                      </div>
                      <div class='header'><i class='filter icon'></i>Filters</div>
                      <div class='divider'></div>
                      {this.state.filters.map((entry, i) =>{if(entry.name !== 'Tag') return(
                      <div className='item' data-value={entry.name}>
                        <div class={"ui " + entry.color + " empty circular label"}></div>{entry.name}
                      </div>
                      );})}
                    </div>
                  </div>
                </div>
              </div>
              <div className='ui bottom attached segment'>
                {tasks}
                <Pagination
                  pages={this.state.pages}
                  current={this.state.currentPage}
                  prevCallback={function() {
                    if(that.state.currentPage > 1) {
                        var n = that.state.currentPage - 1;
                        that.setState({'currentPage': n}, that.handleGetTasks);
                    }
                  }}
                  nextCallback={function() {
                      if(that.state.currentPage < that.state.pages) {
                          var n = that.state.currentPage + 1;
                          that.setState({'currentPage': n}, that.handleGetTasks);
                      }
                  }}/>
                <div style={{clear:'both'}}></div>
              </div>
              <ViewTaskModal
                user={this.props.user}
                avatar={this.props.avatar}
                task={this.state.task}
                parentStateCallback={this.handleStateChange} />
              <CreateEditTaskModal
                token={this.props.token}
                mode={this.state.mode}
                task={this.state.task}
                patchTask={this.handlePatchTask}
                getTasks={this.handleGetTasks} />
            </Fragment>
        );
    }
}

export default TasksDashboard;
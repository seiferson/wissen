import React, {Component, Fragment} from 'react';
import TopMenu from './TopMenu';
import AuthenticationModal from './AuthenticationModal';
import LinkIconLabel from './LinkIconLabel';
import IconMessage from './IconMessage';
import RegisterModal from './RegisterModal';
import ToDoList from './ToDoList';
import ManageTaskModal from './ManageTaskModal';
import TaskModal from './TaskModal';
import TaskDashBoard from './TaskDashBoard';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user : $.cookie('authuser'),
            avatar : $.cookie('avatar'),
            tasks : [],
            currentTask : {updates : []}
        };

        this.handleStateChange = this.handleStateChange.bind(this);

        checkTokenFromCookies(this.handleStateChange, function(){});
    }

    handleStateChange(attribute, value) {
        this.setState({[attribute]: value});
    }

    render(){
        return(
            <Fragment>
              <TopMenu user={this.state.user} callback={this.handleStateChange} avatar={this.state.avatar} />
              <div className='ui container'>
                <div className='ui segment'>
                  <h2 className='ui center aligned icon header'>
                    <i className='circular chess rook icon'></i>
                    Wissen
                  </h2>
                </div>
                <div className='ui stackable two column grid'>
                  <div className='column'>
                  </div>
                  <div className='column'>
                    <ToDoList user={this.state.user} tasks={this.state.tasks} callback={this.handleStateChange}/>
                  </div>
                </div>
              </div>
              <AuthenticationModal callback={this.handleStateChange} />
              <RegisterModal callback={this.handleStateChange} />
              <ManageTaskModal callback={this.handleStateChange}/>
              <TaskModal user={this.state.user} avatar={this.state.avatar} task={this.state.currentTask} callback={this.handleStateChange} />
            </Fragment>
        );
    }

}

export default Home;
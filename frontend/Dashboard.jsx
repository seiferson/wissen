import React, {Component, Fragment} from 'react';
import TasksDashboard from './TasksDashboard';

class Dashboard extends Component{

    render() {
        return(
            <div class="ui container">
                <TasksDashboard
                  authCallback={this.props.authCallback}
                  user={this.props.user}
                  token={this.props.token}
                  avatar={this.props.avatar} />
            </div>
        );
    }
}

export default Dashboard;
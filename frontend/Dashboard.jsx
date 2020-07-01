import React, {Component, Fragment} from 'react';
import TasksDashboard from './TasksDashboard';

class Dashboard extends Component{

    render() {
        return(
            <div class="ui container">
              <div className='ui stackable two column grid'>
                <div className='column'>
                  <TasksDashboard
                    authCallback={this.props.authCallback}
                    user={this.props.user}
                    token={this.props.token}
                    avatar={this.props.avatar} />
                </div>
              </div>
            </div>
        );
    }
}

export default Dashboard;
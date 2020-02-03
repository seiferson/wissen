import React, {Component, Fragment} from 'react';
import TasksDashboard from './TasksDashboard';
import Content from './Content';

class Home extends Component {

    render(){
        return(
            <Fragment>
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
                    <TasksDashboard
                        authCallback={this.props.authCallback}
                        user={this.props.user}
                        token={this.props.token}
                        avatar={this.props.avatar}/>
                  </div>
                </div>
              </div>
            </Fragment>
        );
    }

}

export default Home;
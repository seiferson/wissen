import React, {Component, Fragment} from 'react';
import TasksDashboard from './TasksDashboard';
import IconMessage from './IconMessage';
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
                <IconMessage
                  type='info'
                  icon='laptop code'
                  header='Welcome!'
                  message='This is a very large description that should give all the possible information about the project' />
                <div className='ui stackable two column grid'>
                  <div className='column'>

                  </div>
                  <div className='column'>
                    <TasksDashboard
                        authCallback={this.props.authCallback}
                        user={this.props.user}
                        token={this.props.token}
                        avatar={this.props.avatar} />
                  </div>
                </div>
              </div>
              <footer>
                <div className="ui secondary segment">The footer</div>
              </footer>
            </Fragment>
        );
    }

}

export default Home;
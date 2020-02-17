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
                    <i className='circular laptop code icon'></i>
                    Wissen
                  </h2>
                </div>
                <div className='ui basic segment'></div>
                <div className='ui stackable two column grid'>
                  <div className='column'>
                    <div className='ui icon message'>
                      <i className='file code outline icon'></i>
                      <div className='content'>
                        <div className='header'>Welcome!</div>
                        <p>
                          This is a personal project to showcase some programming techniques and frameworks,
                          it currently features a personal task manager and a simple content management system.
                        </p>
                        <p>
                          The initial idea behind the project was to create a flashcard repository or "knowledge base"
                          (thus the name "Wissen", which means knowledge in german), but since 2016 this has been my
                          playground for learning new technologies and frameworks. The last two years have seen the
                          higher peak of activity.
                        </p>
                        <p>
                          You can follow the development of this project, collaborate and raise bugs on github.
                        </p>
                        <div className='ui labels'>
                          <a className='ui grey label' href='https://github.com/seiferxx/wissen'>
                            <i className='github icon'></i> wissen
                          </a>
                          <a className='ui grey label' href='https://github.com/Seiferxx/wissen/tree/development-heroku'>
                            <i className='code branch icon'></i> dev branch
                          </a>
                          <a className='ui grey label' href='https://github.com/Seiferxx/wissen/issues'>
                            <i className='bug icon'></i> bugs
                          </a>
                          <a className='ui grey label' href='https://github.com/Seiferxx/wissen/projects/2'>
                            <i className='project diagram icon'></i> project
                          </a>
                        </div>
                      </div>
                    </div>
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
            </Fragment>
        );
    }

}

export default Home;
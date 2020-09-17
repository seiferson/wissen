import React, {Component, Fragment} from 'react';
import TasksDashboard from './TasksDashboard';

class Home extends Component {

    render(){
        var welcome_message = (
            <div className='ui icon message'>
              <i className='file code outline icon'></i>
              <div className='content'>
                <div className='header'>Welcome!</div>
                <p>
                  This is a personal project to showcase some programming techniques and frameworks,
                  it currently features a note app.
                </p>
                <p>
                  The initial idea behind the project was to create a flashcard repository or "knowledge base"
                  (thus the name "Wissen", which means knowledge in german), but since 2016 this has been my
                  playground for software development. Having the last two years the higher peak of activity.
                </p>
                <p>
                  You can follow the development of this project, collaborate and raise bugs on github.
                </p>
                <div className='ui labels'>
                  <a className='ui grey label' href='https://github.com/seiferxx/wissen'>
                    <i className='github icon'></i>wissen
                  </a>
                  <a className='ui grey label' href='https://github.com/Seiferxx/wissen/tree/development-heroku'>
                    <i className='code branch icon'></i>dev branch
                  </a>
                  <a className='ui grey label' href='https://github.com/Seiferxx/wissen/issues'>
                    <i className='bug icon'></i>bugs
                  </a>
                  <a className='ui grey label' href='https://github.com/Seiferxx/wissen/projects/2'>
                    <i className='project diagram icon'></i>project
                  </a>
                </div>
                <p>
                  If you have any concern regarding the project please contact me
                </p>
                <div className='ui labels'>
                  <div className='ui grey label'>
                    <i className='google icon'></i>seifer.ch@gmail.com
                  </div>
                  <a className='ui grey label' href='https://twitter.com/Seiferson'>
                    <i className='twitter icon'></i>@Seiferson
                  </a>
                </div>
              </div>
            </div>
        );

        return(
            <Fragment>
              <div className='ui container'>
                <div className='ui segment'>
                  <h2 className='ui center aligned icon header'>
                    <i className='circular laptop code icon'></i>
                    Wissen
                  </h2>
                </div>
                <div className='ui stackable two column grid'>
                  <div className='column'>
                    {welcome_message}
                  </div>
                  <div className='column'>
                  </div>
                </div>
              </div>
            </Fragment>
        );
    }

}

export default Home;
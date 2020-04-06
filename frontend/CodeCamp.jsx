import React, {Component, Fragment} from 'react';

class CodeCamp extends Component{

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    componentDidMount() {
    }

    render() {
        return(
            <div class="ui container">
              <div className='ui segment'>
                <h2 className='ui center aligned icon header'>
                  <i className='circular campground icon'></i>
                  <div class="content">Code camp</div>
                </h2>
              </div>
            </div>
        );
    }
}

export default CodeCamp;
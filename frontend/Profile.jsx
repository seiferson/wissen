import React, {Component, Fragment} from 'react';

class Profile extends Component {

    render(){
        return (
            <div className='ui container'>
              <div className='ui stackable grid'>
                <div className='ui five wide column'>
                  <div className='ui fluid card'>
                    <div className='image'>
                      <img src={`https://avatars.dicebear.com/v2/jdenticon/${this.props.avatar}.svg`} />
                    </div>
                    <div className='content'>
                      <div className='header'>{this.props.user}</div>
                      <div className='meta'>
                        <a>Paladin</a>
                      </div>
                      <div className='description'>
                        This is a short bio text that users can place
                      </div>
                    </div>
                    <div className='extra content'>
                      <span className='right floated'>Joined in 2013</span>
                      <span><i className='award teal icon'></i>75 achievements</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

        );
    }

}

export default Profile;
import React, {Component, Fragment} from 'react';

class Profile extends Component {

    render(){
        return (
            <div className="ui container">
              <div className="ui stackable grid">
                <div className="ui five wide column">
                  <div class="ui card">
                            <div class="image">
                              <img src={`https://avatars.dicebear.com/v2/jdenticon/${this.props.avatar}.svg`} />
                            </div>
                            <div class="content">
                              <div class="header">{this.props.user}</div>
                              <div class="meta">
                                <a>Paladin</a>
                              </div>
                              <div class="description">
                                This is a short bio text that users can place
                              </div>
                            </div>
                            <div class="extra content">
                              <span class="right floated">
                                Joined in 2013
                              </span>
                              <span>
                                <i class="award icon"></i>
                                75 achievements
                              </span>
                            </div>
                          </div>
                    </div>
                </div>
            </div>

        );
    }

}

export default Profile;
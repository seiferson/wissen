import React, {Component, Fragment} from 'react';
import Home from './Home';
import Notes from './Notes';
import TopMenu from './TopMenu';
import AuthenticationModal from './AuthenticationModal';
import RegisterModal from './RegisterModal';

const TOKEN_ENDPOINT = '/oauth/';
const CHECK_TOKEN_ENDPOINT = TOKEN_ENDPOINT + 'check_token?token=';
const MANAGE_TOKEN_ENDPOINT = TOKEN_ENDPOINT + 'token?token=';

class App extends Component {

    constructor(props) {
        super(props);

        var local_layout = localStorage.getItem('layout');
        var local_user = localStorage.getItem('user');
        var local_avatar = localStorage.getItem('avatar');

        this.state = {
            layout: local_layout == null ? 'home' : local_layout,
            user: local_user == null ? 'anonymous' : local_user,
            avatar: local_avatar == null ? 'avatar' : local_avatar
        }

        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleAuthValidation = this.handleAuthValidation.bind(this);
        this.handleRevokeToken = this.handleRevokeToken.bind(this);
    }

    componentDidMount() {
        this.handleAuthValidation(function(){}, function(){});
    }

    handleStateChange(object, callback) {
        this.setState(object, callback);
    }

    handleAuthValidation(onSuccessCallback, onErrorCallback) {
        var that = this;
        var local_authtoken = localStorage.getItem('authtoken');

        if(local_authtoken != null) {

            fetch(CHECK_TOKEN_ENDPOINT + local_authtoken, {
                method: 'post',
                headers: {
                    'Authorization' : 'Basic bWFzdGVyOjEyMzQ1Ng==',
                    'Accept' : 'application/json'
                }
            })
            .then(function(response) {
                if (response.status !== 200) {
                    localStorage.removeItem('authtoken');
                    that.setState({
                        user: 'anonymous',
                        avatar: 'avatar'
                    }, onErrorCallback());
                } else {
                    onSuccessCallback();
                }
            });
        } else {
            that.setState({
                user: 'anonymous',
                avatar: 'avatar'
            }, onErrorCallback());
        }
    }

    handleRevokeToken() {
        var that = this;

        fetch(MANAGE_TOKEN_ENDPOINT + localStorage.getItem('authtoken'), {
            method: 'delete',
            headers: {
                'Authorization' : 'Basic bWFzdGVyOjEyMzQ1Ng==',
                'Accept' : 'application/json'
            }
        })
        .then(function(response) {
            if (response.status === 200) {
                localStorage.removeItem('authtoken');
                that.setState({
                    user: 'anonymous',
                    avatar: 'avatar',
                    layout: 'home'
                }, function() {
                    $('body').toast({
                        title: 'Bye bye',
                        showIcon: 'door closed',
                        position: 'top left',
                        className: {toast: 'ui message'}
                    });
                });
            }
        });
    }

    render() {
        var layout = (<Fragment />);

        if(this.state.layout === 'home') {
            layout = (<Home
                parentStateCallback={this.handleStateChange}
                authCallback={this.handleAuthValidation}
                user={this.state.user}
                avatar={this.state.avatar}
            />);
        } else if(this.state.layout === 'notes') {
            layout = (<Notes
                parentStateCallback={this.handleStateChange}
                authCallback={this.handleAuthValidation}
                user={this.state.user}
                avatar={this.state.avatar}
            />);
        }

        return (
            <Fragment>
              <TopMenu
                user={this.state.user}
                avatar={this.state.avatar}
                parentStateCallback={this.handleStateChange}
                signOut={this.handleRevokeToken}/>
              {layout}
              <AuthenticationModal parentStateCallback={this.handleStateChange} />
              <RegisterModal />
            </Fragment>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));

export default App;

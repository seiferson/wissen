import React, { Component } from 'react';
import IconMessage from './IconMessage';
import Modal from './Modal';

class AuthenticationModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user : '',
            password : ''
        }

        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClearState = this.handleClearState.bind(this);
    }

    handleClearState() {
        this.setState({user: '', password: ''});
        $('#authdisplayerrors').empty();
        $('#authform').form('clear');
        $("[name='loginerror']").val('value');
    }

    handleUserInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    }

    handleSubmit(e) {
        e.preventDefault();
        var that = this;

        if($('#authform').form('is valid')) {
            $.ajax({
                type: 'POST',
                url: '/oauth/token',
                headers: {
                    'Authorization' : 'Basic bWFzdGVyOjEyMzQ1Ng==',
                    'Accept' : 'application/json'
                },
                contentType: 'application/x-www-form-urlencoded',
                data: {
                    password : that.state.password,
                    username : that.state.user,
                    grant_type : 'password'
                },
                error: function(XMLHttpRequest) {
                    $('[name="loginerror"]').val('');
                    $('#authform').form('validate form');
                    $('[name="loginerror"]').val('value');
                },
                success: function(data) {
                    $.cookie('authtoken', data.access_token);
                    $.cookie('authuser', that.state.user);
                    $('#authmodal').modal('hide');

                    var xData = data;

                    $.ajax({
                        type: 'GET',
                        url: '/api/v1/accounts/' + that.state.user,
                        headers: {
                            'Authorization' : 'Bearer ' + data.access_token,
                            'Accept' : 'application/json'
                        },
                        success: function(data) {
                            $.cookie('avatar', data.avatarSeed);
                            that.props.parentStateCallback({
                                user: that.state.user,
                                token: xData.access_token,
                                avatar: data.avatarSeed
                            });
                        }
                    });
                }
            });
        }
    }

    componentDidMount() {
        $('#authform').form({
            fields : {
                user : {
                    identifier : 'user',
                    rules : [{type : 'empty', prompt : 'Username cannot be empty'}]
                },
                loginError : {
                    identifier : 'loginerror',
                    rules : [{type : 'empty', prompt : 'User/Password do not match'}]
                }
            },
            onSuccess : function(event, fields) {
                event.preventDefault();
            }
        });
    }

    render(){
        return (
            <Modal id='authmodal' onOpeningCallback={this.handleClearState}>
              <IconMessage
                icon='id badge'
                header='Hi! Stranger'
                message='Welcome to wissen, please provide your credentials or register to use the system'/>
              <form className='ui form' onSubmit={this.handleSubmit} id='authform'>
                <div className='field'>
                  <label htmlFor='user'>Username</label>
                  <input
                    type='text'
                    value={this.state.user}
                    onChange={(event) => this.handleUserInput(event)} name='user' />
                </div>
                <div className='field'>
                  <label htmlFor='password'>Password</label>
                  <input
                    type='password'
                    value={this.state.password}
                    onChange={(event) => this.handleUserInput(event)} name='password' />
                </div>
                <div className='field'>
                  <input type='text' name='loginerror' style={{display:'none'}}/>
                </div>
                <div className='ui error message' id='authdisplayerrors'></div>
                <div className='ui two buttons'>
                  <button className='ui button' type='submit' >Login</button>
                  <div className='or'></div>
                  <button className='ui button' type='button' onClick={function() {
                      $('#regmodal').modal('show');
                  }}>Register</button>
                </div>
              </form>
            </Modal>
        );
    }
}

export default AuthenticationModal;
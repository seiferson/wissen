import React, {Component, Fragment} from 'react';

class TopMenu extends Component{

    componentDidMount() {
        $('#topmenudropdown').dropdown();
    }

    componentDidUpdate() {
        $('#topmenudropdown').dropdown();
    }

    render() {
        var that = this;
        var userItem = (<Fragment />);
        var menu = (<Fragment />);

        if(that.props.user === 'anonymous') {
            userItem = (
                <div className='ui item' onClick={function() {
                   $('#authmodal').modal('show');
                }}>
                  <i className='sign in alternate icon'></i>Sign in
                </div>
            );
        } else {
            userItem = (
                <div className='ui borderless item'>
                  <img
                    className='ui bordered avatar image'
                    src={`https://avatars.dicebear.com/v2/jdenticon/${this.props.avatar}.svg`} />
                  <span>{this.props.user}</span>
                </div>
            );

            menu = (
                <div className='ui dropdown icon item' id='topmenudropdown'>
                  <i className='bars icon'></i>
                    <div className='menu'>
                      <div className='item' onClick={function() {
                        $.cookie('layout','home');
                        that.props.parentStateCallback({
                          layout: 'home'
                        });
                      }}>
                        <i className='home icon'></i>Home
                      </div>
                      <div className='divider'></div>
                      <div className='item' onClick={function() {
                        $.cookie('layout','profile');
                        that.props.parentStateCallback({
                          layout: 'profile'
                        });
                      }}>
                        <i className='id card outline icon'></i>Profile
                      </div>
                      <div className='item' onClick={function() {
                        $.cookie('layout','finance');
                        that.props.parentStateCallback({
                          layout: 'finance'
                        });
                      }}>
                        <i className='chart line icon'></i>Finance
                      </div>
                      <div className='item' onClick={function() {
                        $.cookie('layout','dashboard');
                        that.props.parentStateCallback({
                          layout: 'dashboard'
                        });
                      }}>
                        <i className='columns icon'></i>Dashboard
                      </div>
                      <div className='item'onClick={function() {
                        $.cookie('layout','codecamp');
                          that.props.parentStateCallback({
                            layout: 'codecamp'
                          });
                      }}>
                        <i className='campground icon'></i>Code camp</div>
                      <div className='divider'></div>
                      <div className='item' onClick={this.props.signOut}>
                        <i className='sign out alternate icon'></i>Sign out
                      </div>
                    </div>
                </div>
            );
        }

        return (
            <div className='ui top attached menu'>
              <div className='ui item' onClick={function() {
                $.cookie('layout','home');
                that.props.parentStateCallback({
                    layout: 'home'
                });
              }}>
                <h3 className='ui header'>Wissen</h3>
              </div>
              <div className='ui item'><i className='campground icon'></i><span className='mobile hidden'>Code camp</span></div>
              <div className='right menu'>
                {userItem}
                {menu}
              </div>
            </div>
        );
    }
}

export default TopMenu;
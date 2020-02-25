import React, { Component } from 'react';

class TopMenu extends Component{

    render() {
        var that = this;

        return (
            <div className='ui top attached menu'>
              <div className='ui item'>
                <a href='/'><h3 className='ui header'>Wissen</h3></a>
              </div>
              <div className='ui right item' onClick={function() {
                  if(that.props.user === 'anonymous') {
                      $('#authmodal').modal('show');
                  } else {
                      that.props.parentStateCallback({layout: 'profile'}, function(){});
                  }
              }}>
                <img
                  className='ui bordered avatar image'
                  src={`https://avatars.dicebear.com/v2/jdenticon/${this.props.avatar}.svg`} />
                <span>{this.props.user}</span>
              </div>
            </div>
        );
    }
}

export default TopMenu;
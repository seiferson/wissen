import React, { Component } from 'react';

class TopMenu extends Component{

	render(){
	    let that = this;
		return (
			<div className="ui top attached menu">
				<div className="ui item">
					<a href="/"><h3 className="ui header">Wissen</h3></a>
				</div>
				<div className="ui right item" onClick={function(){
				    checkTokenFromCookies(
                        that.props.callback,
                        function(){
                            if($.cookie('authuser') === 'anonymous'){
                                $('#authdisplayerrors').empty();
                                $('#authform').form('clear');
                                $('[name="loginerror"]').val('value');
                                $('#authmodal').modal('show');
                            }
                        }
                    );
				}}>
					<img className="ui bordered avatar image" src={`https://avatars.dicebear.com/v2/bottts/${this.props.avatar}.svg`} />
					<span>{this.props.user}</span>
				</div>
			</div>
		);
	}
}

export default TopMenu;

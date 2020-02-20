
        $('.ui.search')
          .search({
            minCharacters : 3,
            apiSettings   : {
              onResponse: function(githubResponse) {
                var
                  response = {
                    results : []
                  }
                ;
                $.each(githubResponse.content, function(index, item) {
                  var
                    maxResults = 8
                  ;
                  if(index >= maxResults) {
                    return false;
                  }

                  response.results.push({
                    title       : item.title,
                    description : item.description.slice(0, 40)
                  });
                });
                return response;
              },
              url: '/api/v1/tasks/search/bytag?tag={query}&size=5&page=0',
              headers: {
                  'Authorization' : 'Bearer ' + that.props.token,
                  'Accept' : 'application/json'
              }
            }
          })
        ;




         <div class="ui right aligned category search item">
                            <div class="ui transparent icon input">
                              <input class="prompt" type="text" placeholder="Search by tag" />
                              <i class="search link icon"></i>
                            </div>
                            <div class="results"></div>
                          </div>

import React, { Component } from 'react';
import Goal from './Goal';

class Tracker extends Component {

	constructor(props){
		super(props);

		this.state = {
			title : '',
			priority : '',
			goals : []
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.addGoal = this.addGoal.bind(this);
		this.handleUserInput = this.handleUserInput.bind(this);
	}

	componentDidMount(){

	}

	addGoal(goal){
		var goalsx = this.state.goals;
		goalsx.push(goal);
		this.setState({
			goals : goalsx
		});
	}

	handleSubmit(e){
		e.preventDefault();


		var goal = {
			title : this.state.title,
			priority :  this.state.priority,
			date : new Date().getTime(),
			owner : $.cookie('hashuser'),
			id : 'smething',
			state : 'active'
		};
		this.setState({title: ''});
		this.setState({priority: ''});
		this.addGoal(goal);
	}

	handleUserInput (e) {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({[name]: value});
	}

	render(){
		return(
			<div className='ui segment'>
				<form className='ui form' onSubmit={this.handleSubmit}>
					<h4 className="ui dividing header">New goal</h4>
					<div className="stackable fields">
						<div className='twelve wide field'>
							<label htmlFor='goal'>Goal</label>
							<input type='text' maxLength={50} value={this.state.title} onChange={(event) => this.handleUserInput(event)} name='title' required="required"/>
						</div>
						<div className='four wide field'>
							<label>Priority</label>
							<select value={this.state.priority} onChange={(event) => this.handleUserInput(event)}  name='priority' required="required">
								<option value="">Select</option>
								<option value="0">Top</option>
								<option value="1">High</option>
								<option value="2">Mid</option>
								<option value="3">Low</option>
							</select>
						</div>
					</div>
					<p />
					<button type='submit' className='ui button'>Create goal</button>
					<p />
				</form>
				<h4 className="ui dividing header">Goals</h4>
				{this.state.goals.map((entry, i) =>{
					return(
						<Goal obj={entry} />
					);
				})}
			</div>
		);
	}
}

export default Tracker;







<p>{"Project info"}</p>
									<div className='ui labels'>
										<LinkIconLabel color='' icon='github' url='https://github.com/seiferxx/wissen' text='wissen' />
										<LinkIconLabel color='' icon='code branch' url='https://github.com/seiferxx/wissen' text='0.0.4_1812' />
									</div>
									<div className="ui segment">
										<div className="ui list">
											<h4 className="ui header">Technologies used</h4>
											<div className="item">
												<i className="npm circular icon"></i>
												<div className='content'>npm v6.7.0</div>
											</div>
											<div className="middle aligned item">
												<i className="node circular icon"></i>
												<div className='content'>node v10.15.1</div>
											</div>
											<div className="middle aligned item">
												<i className="react circular icon"></i>
												<div className='content'>react v16.8.3</div>
											</div>
											<div className="middle aligned item">
												<i className="leaf circular icon"></i>
												<div className='content'>spring v2.0.3.RELEASE</div>
											</div>
											<div className="middle aligned item">
												<i className="coffee circular icon"></i>
												<div className='content'>java v1.8</div>
											</div>
											<div className="middle aligned item">
												<i className="database circular icon"></i>
												<div className='content'>mongo</div>
											</div>
										</div>
									</div>



      class TopMenu extends React.Component{

        static defaultProps = {
          userName : 'Anonymous'
        }

        constructor(props){
          super(props);
        }

        handleClick(){
          $(".modal").modal("show");
        }

        render(){
          return (
            <div className="ui top attached menu">
              <div className="ui item">
                <a href="/"><h3 className="ui header">Wissen</h3></a>
              </div>
              <div className="ui right item" onClick={this.handleClick}>
                <i className="large user circle outline icon"></i>
                <span>{this.props.userName}</span>
              </div>
            </div>
          );
        }
      }

      class Modal extends React.Component{
        
        static defaultProps = {
          id : '',
          title : 'Empty modal',
          children : <p>Empty modal</p>
        }

        render(){
          return (
            <div className="ui modal" id={this.id}>
              <i className="close icon"></i>
              <div className="header">{this.props.title}</div>
              <div className="content">{this.props.children}</div>
            </div>
          );
        }
      }

      class IconMessage extends React.Component{
        static defaultProps = {
          header : 'Title',
          message : 'Message goes here'
        }
       
        render(){
          return (
            <div className="ui icon message">
              <i className="id badge icon"></i>
              <div className="content">
                <div className="header">{this.props.header}</div>
                <p>{this.props.message}</p>
              </div>
            </div>
          );
        }
      }
      
      class Form extends React.Component{
      	handleClick(){
          this.props.func();
        }

        render(){
          return (
            <form className="ui form">
              {this.props.fields.map((entry, i) =>{
              	return(
              	  <div className="field">
              	    <label for={entry.name}>{entry.text}</label>
              	    <input type={entry.type} id={entry.id} name={entry.name}/>
              	  </div>
          	    );
              })}
              <button className="ui button" type="button" onClick={this.handleClick}>Login</button>
            </form>
          );
        }
      }


      ReactDOM.render( <App/>, document.getElementById('root'));
      $('.ui.modal').modal({allowMultiple: false});
      
      var loginFormData = [
            {
              name : 'user',
              id : 'user',
              type : 'text',
              text : 'User'
            },
            {
              name : 'passwd',
              id : 'passwd',
              type : 'password',
              text : 'Password'
            }
          ];
          
 //         <TopMenu/>
 //             <Modal title='Authentication stage' id='authmodal'>
 //               <IconMessage message='Welcome to wissen, please provide your credentials.' header='Hi! Stranger'/>
 //               <Form fields={loginFormData} />
 //             </Modal>
 
 
  <div class="field">
            <label>Password</label>
            <input type="password" id="passwd" name="passwd"/>
          </div>
          <div class="ui two buttons">
            <button class="ui button" type="button" onclick="authenticate()">Login</button>
            <div class="or"></div>
            <button class="ui button" type="button" id="tgrm">Register</button>
          </div>
        </form>
        
        
        /**
 * Session token validation
 */
//<![CDATA[

function validateToken(){
	
}
//]]>

/*eslint-disable no-undef */
$('.ui.dropdown').dropdown();
$('.ui.modal').modal({allowMultiple: false});
$('#regmod').modal('attach events', '#tgrm');
$('.progress').progress();
$('.message .close').on('click', function(){$(this).closest('.message').transition('fade');});
$('.ui.accordion').accordion();

/**Main UI load function**/
$(document).ready(function(){
	validateToken();
});

/**
 * Used to raise the modal for authentication
 */
function showAuthModal(origin){
	if($.cookie("authuser") === undefined && $.cookie("authtoken") === undefined) {
		$("#wrongcredentials").addClass("hidden");
		
		if(origin === "menuButton"){
			$("#usageNotex").addClass("hiddenf");
			$("#welcomeNotex").removeClass("hiddenf");
		} else if(origin === "feature"){
			$("#welcomeNotex").addClass("hiddenf");
			$("#usageNotex").removeClass("hiddenf");
		}
		$("#authmod").modal("show");
	}
}

function logout(){
	$.removeCookie("authuser");
	$.removeCookie("authtoken");
	$.removeCookie("hashuser");
	//load
}

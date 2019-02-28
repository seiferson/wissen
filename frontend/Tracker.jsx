import React, { Component } from 'react';


class Goal extends Component {
	render(){
		let icon;
		
		if(this.props.priority === '0'){
			icon = 	<i className='id flag checkered red icon' />;
		} else if (this.props.priority === '1'){
			icon = 	<i className='id flag checkered yellow icon' />;
		} else if (this.props.priority === '2'){
			icon = 	<i className='id flag checkered green icon' />;
		} else if (this.props.priority === '3'){
			icon = 	<i className='id flag checkered blue icon' />;
		} else {
			icon = 	<i className='id flag checkered purple icon' />;
		}
		
		return(
			<div className='item'> {icon} {this.props.title}  {this.props.priority}</div>
		);
	}
}

class Tracker extends Component{
	
	componentDidMount(){
		$('.dropdown').dropdown();
	}
	
	constructor(props){
		super(props);
		
		this.state = {
			goals : []
		}
		
		this.handleSubmit = this.handleSubmit.bind(this);
		this.addGoal = this.addGoal.bind(this);
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
			'title' : $('#goalinput').val().trim(),
			'priority' :  $('#priorityselector').val()
		};
		 $('#goalinput').val('');
		 $('.dropdown').dropdown('clear');
		this.addGoal(goal);
	}
	
	render(){
		return(
			<div className='ui container'>
				<form className='ui form' onSubmit={this.handleSubmit}>
					<div className="fields">
						<div className='thirteen wide field'>
							<label htmlFor='goal'>Goal</label>
							<input type='text' id='goalinput' name='goal' />
						</div>
						<div className='three wide field'>
							<label>Priority</label>
							<div className="ui fluid selection dropdown">
								<input type='hidden' name='priority' id='priorityselector' />
								<i className="dropdown icon"></i>
								<div className="default text">Select</div>
								<div className="menu">
									<div className='item' data-value="0"><i className='id red circle icon' />Top</div>
									<div className='item' data-value="1"><i className='id yellow circle icon' />High</div>
									<div className='item' data-value="2"><i className='id green circle icon' />Mid</div>
									<div className='item' data-value="3"><i className='id blue circle icon' />Low</div>
								</div>
							</div>
						</div>
					</div>
					<button type='submit' className='ui button'>Create goal</button>
				</form>
				<div className='ui list'>
					{this.state.goals.map((entry, i) =>{
						return(
							<Goal title={entry.title} priority={entry.priority} />
						);
					})}
				</div>
			</div>
		);
	}	
}

export default Tracker;
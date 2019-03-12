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
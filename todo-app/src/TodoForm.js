import React from 'react';
import { withRouter } from 'react-router-dom';

class TodoForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleChange(e) {
		this.setState({
			input: e.target.value
		})
	}
	
	handleSubmit(e) {
		e.preventDefault();
		this.props.handleSubmit(this.state.input);
		this.setState({
			input: ''
		});
		this.props.history.push('/todos');
	}
	
	render() {
		const {input} = this.state;
		
		return (
			<form onSubmit={this.handleSubmit}>
				<input onChange={this.handleChange} type="text" value={input}/>
				<button type="submit">Add</button>
			</form>
		);
	}
}

export default withRouter(TodoForm);
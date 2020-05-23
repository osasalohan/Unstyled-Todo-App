import React from 'react';
import { connect } from 'react-redux';
import { Switch, Link, Route } from 'react-router-dom';
import { addTodo, removeTodo, updateTodo, loadTodos } from './actionCreators';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
	}
	
	handleSubmit(todo) {
		this.props.addTodo(todo);
	}
	
	handleDelete(id) {
		this.props.removeTodo(id);
	}
	
	handleUpdate(todo) {
		this.props.updateTodo(todo);
	}
	
	componentDidMount() {
		this.props.loadTodos();
	}
	
	render() {
		const {todos} = this.props;
		
		return (
			<div>
				<h1>Todo App</h1>
				<h2>
					<Link to="/todos">View Todos</Link>
				</h2>
				<h2>
					<Link to="/todos/new">Add Todo</Link>
				</h2>
				<Switch>
					<Route exact path="/todos">
						<TodoList 
							todos={todos} 
							handleDelete={this.handleDelete}
							handleUpdate={this.handleUpdate}
						/>
					</Route>
					<Route exact path="/todos/new">
						<TodoForm handleSubmit={this.handleSubmit} />
					</Route>
				</Switch>
			</div>
		);
	}
}

function mapStateToProps(reduxState) {
	return {
		todos: reduxState.todos
	}
}

export default connect(mapStateToProps, {addTodo, removeTodo, updateTodo, loadTodos})(App);

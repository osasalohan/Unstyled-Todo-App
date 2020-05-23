import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
	handleDelete(id) {
		this.props.handleDelete(id);
	}
	
	handleUpdate(todo) {
		this.props.handleUpdate(todo);
	}
	
	render() {
		const todos = this.props.todos.map((t) => (
			<Todo
				key={t._id}
				todo={t}
				removeTodo={this.handleDelete.bind(this, t._id)}
				updateTodo={this.handleUpdate.bind(this, t)}
			/>
		));

		return (
			<ul>
				{todos}
			</ul>
		);
	}
}

export default TodoList;
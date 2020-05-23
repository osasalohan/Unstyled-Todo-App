import React from 'react';

const Todo = ({todo, removeTodo, updateTodo}) => {
	const style = {
		textDecoration: todo.completed ? 'line-through' : 'none' 
	}
	
	return (
		<li style={style}>
			<span onClick={updateTodo}>
				{todo.name}
			</span>
			<span onClick={removeTodo}> X </span>
		</li>
	)
}

export default Todo;
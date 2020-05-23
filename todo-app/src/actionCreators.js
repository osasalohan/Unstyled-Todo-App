export const LOAD_TODOS = 'LOAD_ TODOS';
export const ADD_TODO = 'ADD_ TODO';
export const REMOVE_TODO = 'REMOVE_ TODO';
export const UPDATE_TODO = 'UPDATE_ TODO';

const APIURL = '/api/todos/';

const handleLoadTodos = data => ({
	type: LOAD_TODOS,
	data
});

const handleAddTodo = task => ({
	type: ADD_TODO,
	task
});

const handleRemoveTodo = id => ({
	type: REMOVE_TODO,
	id
});

const handleUpdateTodo = id => ({
	type: UPDATE_TODO,
	id
});

export const loadTodos = () => {
	return dispatch => {
		return fetch(APIURL)
		.then(res => res.json())
		.then(data => dispatch(handleLoadTodos(data)))
		.catch(err => dispatch(err))
	}
}

export const addTodo = todo => {
	return dispatch => {
		return fetch(APIURL, {
  		method: 'POST',
  		headers: { 'Content-Type': 'application/json' },
  		body: JSON.stringify({ name: todo }),
		})
		.then(res => res.json())
		.then(task => dispatch(handleAddTodo(task)))
		.catch(err => dispatch(err))
	}
}

export const removeTodo = id => {
	const deleteURL = APIURL + id;
	return dispatch => {
		return fetch(deleteURL, {method: 'DELETE'})
		.then(res => res.json())
		.then(data => dispatch(handleRemoveTodo(id)))
		.catch(err => dispatch(err))
	}
}

export const updateTodo = todo => {
	const updateURL = APIURL + todo._id;
	return dispatch => {
		return fetch(updateURL, {
  			method: 'PUT',
  			headers: { 'Content-Type': 'application/json' },
  			body: JSON.stringify({ completed: !todo.completed }),
		})
		.then(res => res.json())
		.then(updatedTodo => dispatch(handleUpdateTodo(updatedTodo._id)))
		.catch(err => dispatch(err))
	}
}
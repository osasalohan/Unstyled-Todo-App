import { ADD_TODO, REMOVE_TODO, UPDATE_TODO, LOAD_TODOS } from './actionCreators';

const initialState = {
	todos: []
}

function rootReducer(state=initialState, action) {
	switch(action.type) {
		case LOAD_TODOS:
			return {todos: action.data}
		case ADD_TODO:
			const newState = {...state};
			return {
				todos: [...newState.todos, action.task]
			}
		case REMOVE_TODO:
			const todos = state.todos.filter(t => t._id !== action.id);
			return {todos}
		case UPDATE_TODO:
			const updatedTodos = state.todos.map(t => {
				let status = t.completed;
				return (
					t._id === action.id ?
					{...t, completed: !status} :
					t
				)});
			return {todos: updatedTodos}
		default:
			return state
	}
}

export default rootReducer;
$(document).ready(function(){
	$.getJSON('/api/todos')
	.then(addTodos)
	.catch(handleError);
	
	$('#todoInput').keypress(function(){
		if(event.which == 13){
			createTodo();
		}
	});
	
	$('.list').on('click', 'li', function(){
		completeTodo($(this));
	})
	
	$('.list').on('click', 'span', function(event){
		event.stopPropagation();
		deleteTodo($(this).parent())
		$(this).parent().remove();
	});
});

function addTodos(data){
	data.forEach(function(todo){
		addTodo(todo);
	});
}

function addTodo(todo){
	var newTodo = $('<li class="task">' + todo.name + '<span>X</span></li>');
	newTodo.data('id', todo._id);
	newTodo.data('completed', todo.completed);
	if(todo.completed){
		newTodo.addClass('done');
	}
	$('.list').append(newTodo);
}

function handleError(err){
	console.log(err);
}

function createTodo(){
	var userInput = $('#todoInput').val();
	$.post('/api/todos', {name: userInput})
	.then(function(newTodo){
		$('#todoInput').val('');
		addTodo(newTodo);
	})
	.catch(handleError);
}
	
function deleteTodo(todo){
	var deleteUrl = '/api/todos/' + todo.data('id');
	$.ajax({
		method: 'DELETE',
		url: deleteUrl
	})
	.then(function(data){
		console.log(data.message);
	})
	.catch(handleError);
}

function completeTodo(todo){
	var updateUrl = '/api/todos/' + todo.data('id');
	var isDone = !todo.data('completed')
	$.ajax({
		method: 'PUT',
		url: updateUrl,
		data: {completed: isDone}
	})
	.then(function(updatedTodo){
		todo.toggleClass('done');
		todo.data('completed', isDone);
	})
	.catch(handleError);
}
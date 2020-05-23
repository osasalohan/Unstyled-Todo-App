var db = require('../models');

exports.getTodos = function(req, res){
	db.Todo.find()
	.then(todo => {
		res.json(todo);
	})
	.catch(err => {
		res.send(err);
	});
}

exports.createTodo = function(req, res){
	db.Todo.create(req.body)
	.then(todo => {
		res.json(todo);
	})
	.catch(err => {
		res.send(err);
	});
}

exports.showTodo = function(req, res){
	db.Todo.findById(req.params.todoId)
	.then(todo => {
		res.json(todo);
	})
	.catch(err => {
		res.send(err);
	});
}

exports.updateTodo = function(req, res){
	db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
	.then(todo => {
		res.json(todo);
	})
	.catch(err => {
		res.send(err);
	});
}

exports.deleteTodo = function(req, res){
	db.Todo.deleteOne({_id: req.params.todoId})
	.then(() => {
		res.json({message: 'Todo Deleted'});
	})
	.catch(err => {
		res.send(err);
	});
}

module.exports = exports
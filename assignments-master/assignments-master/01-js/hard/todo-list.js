/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {

  constructor(todos) {
    this.todos = []
  }
add(todo)
{
  this.todos.push(todo);
}
remove(indexOfTodo){
  if(this.todos.length==0)
  {
    console.log("The todo list is empty");
  }
  else{
    this.todos.splice(indexOfTodo);
  }

}
update(index,updatedTodo){
  if(index>=this.todos.length)
  {
    return this.todos;
  }
  this.todos[index]=updatedTodo;
}

getAll(){
  return this.todos;
}

get(indexOfTodo){
  if(indexOfTodo >= this.todos.length){
    return null;
  }
  return this.todos[indexOfTodo]
}
clear(){
  this.todos=[];
}

}

module.exports = Todo;

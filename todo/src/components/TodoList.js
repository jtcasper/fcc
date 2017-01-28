import React, { Component } from 'react';
import TodoListItem from './TodoListItem';

class TodoList extends Component {

  constructor(props){
    super(props);
    this.state = {todos: [ { text: "Write a todo list app that scales"},
    { text: "Learn to map over arrays in javascript"} ] };
  }

  render(){
    return(
      <div>
        <ul className="list-group">
          {this.state.todos.map((todoItem, index) =>  {
            return <TodoListItem
              item={todoItem.text} />

          } )}
        </ul>
      </div>
    );
  }
}

export default TodoList;

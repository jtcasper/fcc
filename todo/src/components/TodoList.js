import React, { Component } from 'react';
import TodoListItem from './TodoListItem';

class TodoList extends Component {

  constructor(props){
    super(props);
    this.state = {todos: [] };
  }

  componentDidMount(){
    this.setState({ todos: [ { text: "Write a todo list app that scales"},
    { text: "Learn to map over arrays in javascript"} ]})
  }

  deleteTodo = (index) => {
    this.setState( { todos: [...this.state.todos.slice(0, index),
                             ...this.state.todos.slice(index+1) ] } )
  }

  render(){
    return(
      <div>
        <ul className="list-group">
          {this.state.todos.map((todoItem, index) =>  {
            return <TodoListItem
              deleteTodo={this.deleteTodo}
              item={todoItem.text}
              key={index}
              index={index}
            />

          } )}
        </ul>
      </div>
    );
  }
}

export default TodoList;

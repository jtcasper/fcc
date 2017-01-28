import React, { Component } from 'react';

class TodoListItem extends Component {

  constructor(props){
    super(props);
  }

  onDeleteClick = () => {
    this.props.deleteTodo(this.props.index);
  }

  render(){
    return(
      <div>
        <li className="list-group-item">
          {this.props.item}
          <button className="btn btn-danger btn-xs pull-right"
                  onClick={this.onDeleteClick}
            >
            Delete
          </button>
        </li>
      </div>
    );
  }
}

export default TodoListItem;

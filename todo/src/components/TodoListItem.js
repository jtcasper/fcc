import React, { Component } from 'react';

class TodoListItem extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <li className="list-group-item">
          {this.props.item}
        </li>
      </div>
    );
  }
}

export default TodoListItem;

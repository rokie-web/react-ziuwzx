import React, {Component} from 'react';

class  TodoItem extends Component {
  render() {
  return (
      <div className='TodoApp-item'>
        <label>
          <input 
            type="checkbox" 
            defaultChecked={this.props.item.completed} 
            onChange={() => console.log('Changed!')} 
          />

          <span>{this.props.item.text}</span>
        </label>
      </div>
    )
  }
}

export default TodoItem;

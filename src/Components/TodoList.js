import React, {Component, PureComponent} from 'react';
import TodoItem from './TodoItem'

class TodoList extends PureComponent{



  render() {

    // console.log('TodoList Render: ', this.props.todoList);

    const todoList =  this.props.todoList.map((todo)=>{
      return(
        <TodoItem key={todo.todoId}
                  handleDelete={() => {this.props.handleDelete(todo.todoId)}}
                  todo={todo}/>
        )
    })

    return(
      <section className='TodoList_section'>
        {todoList}
      </section>
    )
  }
}

export default TodoList;
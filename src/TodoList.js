import React from 'react'
import Todo from './Todo'
import $ from 'jquery'

class TodoList extends React.Component {
  constructor() {
    super()

    this.state = {
      todos: []
    }
  }

  loadTodos() {
    $.get("http://localhost:3001/todos.json", (function(data) {
      this.setState({
        todos: data,
      })
    }).bind(this))
  }

  componentDidMount() {
    this.loadTodos()
  }

  componentDidUpdate() {
    this.loadTodos()
  }

  createTodo(event){
    event.preventDefault();

    let newTodo = {
      title: this.refs.title.value,
    };

    $.ajax({
      type: "POST",
      url: "http://localhost:3001/todos.json",
      data: JSON.stringify({
        todo: newTodo
      }),
      contentType: "application/json",
      dataType: "json"
    }).done(function( data ) {
      // alert( "Data saved: " + data )
    })
    .fail(function(error) {
      console.log(error);
    });
  }

  renderTodo(todo, index) {
    console.log(todo)
    return (
      <Todo
        key={todo.id}
        title={todo.title}/>
    )
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.todos.map(this.renderTodo.bind(this))}
        </ul>

        <form onSubmit={this.createTodo.bind(this)}>
          <input type="text" className="form-control" ref="title" placeholder="Todo..." />
          <button type="submit" className="btn btn-primary">Create Todo</button>
        </form>
      </div>
    )
  }
}

export default TodoList

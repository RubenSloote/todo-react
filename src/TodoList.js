import React from 'react'
import $ from 'jquery'

class TodoList extends React.Component {
  constructor() {
    super()

    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    $.get("http://localhost:3001/todos.json", (function(data) {
      this.setState({
        todos: data,
      })
    }).bind(this))
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
      alert( "Data saved: " + data );
    })
    .fail(function(error) {
      console.log(error);
    });
  }

  render() {
    let todos = this.state.todos.map(function(todo) {
      return <li key={todo.id}><h1>{todo.title}</h1></li>
    })

    return (
      <div>
        <ul>
          {todos}
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

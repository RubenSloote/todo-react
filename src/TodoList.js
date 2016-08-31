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

  render() {
    let todos = this.state.todos.map(function(todo) {
      return <li key={todo.id}><h1>{todo.title}</h1></li>
    })

    return (
      <ul>
        {todos}
      </ul>
    )
  }
}

export default TodoList

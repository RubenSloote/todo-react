import React from 'react'

class TodoList extends React.Component {
  constructor() {
    super()

    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    this.setState({
      todos: [
        { title: 'Do the laundry', completed: false },
        { title: 'Conquer the world', completed: true },
        { title: 'Clean up room', completed: false }
      ]
    })
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

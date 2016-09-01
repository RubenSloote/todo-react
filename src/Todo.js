import React from 'react'

class Todo extends React.Component {
  render () {
    return (
      <li>
        <h1>{this.props.title}</h1>
      </li>
    )
  }
}

export default Todo

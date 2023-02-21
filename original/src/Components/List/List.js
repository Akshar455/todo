import React, { useState } from 'react'
import Todo from './Todo/Todo';

function List() {
  const [todo, setTodo] = useState([]);

  const addTodo = todo => {
    if(!todo.text || /^\$*$/.test(todo.text)) {
      return;
    }

    const newTodo = [todo, ...todo];
    setTodo(newTodo);
    console.log(...todo);

  };

  return (
    <div>
    <h1>TODO</h1>
    <Todo onSubmit={addTodo} />

    </div>
  )
}

export default List
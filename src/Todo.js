import React, {useState, useEffect} from "react";
import axios from "axios";

function Todo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
      setTodos(response.data);
    })
    .catch((error) => {
      console.error('Error fetching data', error);
    });
  }, []);

  return (
    <div className="Todo">
      <header className="todolist">Todo List</header>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;

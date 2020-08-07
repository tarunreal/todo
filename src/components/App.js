import React, { useState } from "react";
import "./app.css";

function Todo({ todo, index, completeTodo }) {
  return (
    <div
      className="todo"
      onClick={() => completeTodo(index)}
    >
     <span className="sNo"></span>{index+1}. <span className="text"   style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>{todo.text}</span>

    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form className="formContainer" onSubmit={handleSubmit}>
      <input
        type="text"
        className="inputField"
        value={value}
        placeholder="Enter your todo here"
        onChange={e => setValue(e.target.value)}
      />
      <div className="btnAdd"  onClick={handleSubmit}>ADD</div>
    </form>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: "I have to bring something from somewhere",
      isCompleted: false
    },
    {
      text: "My second todo",
      isCompleted: false
    },
    {
      text: "Something else",
      isCompleted: true
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted === true?newTodos[index].isCompleted=false:newTodos[index].isCompleted=true ;
    setTodos(newTodos);
  };


  return (
    <div className="mainContiner">
      <div className="todo-list">
      <TodoForm addTodo={addTodo} />
      <div className="todoWrapper">
        {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
            />
            
          ))}
      </div>
      </div>
    </div>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  useEffect(filterHandler, [todos, status]);
  return (
    <div className="App">
      <header>
        <h1>Satyam's Todo List</h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus} filteredTodos={filteredTodos} />
      <TodoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos} />
      <footer>
        <span><a href="https://github.com/satyam-52" target="_blank" rel="noreferrer"><i class="fab fa-github fa-2x"></i></a></span>
        <span><a href="https://www.linkedin.com/in/satyamdua-18101999/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin-in fa-2x"></i></a></span>
      </footer>
    </div>
  );
}

export default App;

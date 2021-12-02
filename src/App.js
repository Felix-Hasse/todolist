import React,{useState} from 'react';
import './App.scss';
import Form from './components/Form.js';
import TodoList from './components/TodoList.js';
 <script src="https://kit.fontawesome.com/0ff2bfb665.js" crossorigin="anonymous"></script>

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
  <header>
    <h1>To Do</h1>
    </header> 
    <Form inputText={inputText} 
    todos={todos} 
    setTodos={setTodos} 
    setInputText={setInputText} />
    <TodoList todos={todos}/>
    </div>
  );
}

export default App;

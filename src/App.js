import React,{useState} from 'react';
import './App.scss';
import Form from './components/Form.js';
import TodoList from './components/TodoList.js';

function App() {
  const [inputText, setInputText] = useState('');
  return (
    <div className="App">
  <header>
    <h1>To Do</h1>
    </header> 
    <Form setInputText={setInputText} />
    <TodoList />
    </div>
  );
}

export default App;

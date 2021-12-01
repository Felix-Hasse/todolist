
import './App.scss';
import Form from './components/Form.js';
import TodoList from './components/TodoList.js';

function App() {
  return (
    <div className="App">
  <header>
    <h1>To Do</h1>
    </header> 
    <Form />
    <TodoList />
    </div>
  );
}

export default App;

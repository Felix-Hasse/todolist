import React from 'react';


  const Form = ({setInputText,todos,setTodos,inputText}) => {
      const inputTextHandler = (e) => {
          console.log(e.target.value);
          setInputText(e.target.value);
      };
      const submitTodoHandler = (e) => {
            e.preventDefault();
            setTodos([...todos,{text:inputText,completed:false,id:Math.random()*100}]);
            setInputText('');
        
      }
      const statusHandler=(e)=>{
        console.log(e.target.value);
      }
      return (
          <form>
                <input value={inputText} onChange={inputTextHandler} type="text" class='todo-input' />
                <button onClick={submitTodoHandler} className='todo-button' type= 'submit'>
                    To do
                </button>
                <div className='select'>
                    <select className='todos' class='filter-todo'>
                        <option value='all'>All</option>
                        <option value='completed'>Completed</option>
                        <option value='uncompleted'>Uncompleted</option>
                    </select>
                </div>
          </form>
      )
  }

  export default Form;
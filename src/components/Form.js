import React from 'react';


  const Form = ({setInputText}) => {
      const inputTextHandler = (e) => {
          console.log(e.target.value);
          setInputText(e.target.value);
      };
      return (
          <form>
                <input onChange={inputTextHandler} type="text" class='todo-input' />
                <button className='todo-button' type= 'submit'>
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
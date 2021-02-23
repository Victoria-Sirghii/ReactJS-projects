import React from 'react';

const Form = ({setInputText, todos, setTodos, inputText, setSelectStatus}) => {
    //here i can write javascript code and function
    const inputTextHandler = (e) =>{
        setInputText(e.target.value)
    }
    const submitTodoHandler = (e) =>{
        e.preventDefault();
        setTodos([
            ...todos, 
            {text: inputText, completed: false, id: Math.random() * 1000}
        ]);
        setInputText("");
    }
    const selectHandler = (e) =>{
        setSelectStatus(e.target.value)
    }
      return (
          <form>
              <input 
                    value={inputText} 
                    onChange={inputTextHandler} 
                    type="text" 
                    className="todo-input"
                />
              <button onClick={submitTodoHandler} className="todo-button" type="submit">
                  <i className="fas fa-plus-square"></i>
              </button>
              <div className="select">
                  <select onChange={selectHandler} name="todos" className="filter-todo">
                      <option value="all">All</option>
                      <option value="Completed">Completed</option>
                      <option value="Uncompleted">Uncompleted</option>
                  </select>
              </div>
          </form>
      )
}
export default Form;
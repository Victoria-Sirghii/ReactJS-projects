import './App.css';
import { useState, useEffect } from "react";
//importing components
import Form from "./components/form"
import TodoList from "./components/TodoList";


function App() {
  //State stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [selectStatus, setSelectStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
    //USE EFFECT
    useEffect(() => {
      getLocalTodos();
    }, [])
    useEffect(() => {
        filterHandler();
        saveLocalTodos();
    }, [todos, selectStatus])
  //functions and events
  const filterHandler = () =>{
    switch (selectStatus){
      case "Completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "Uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break; 

    }
  };
  const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
  }
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal)
    }
  }
  return (
    <div className="App">
      <header>
        <h1>My Todo List</h1>
      </header>
      <Form inputText={inputText}
            todos={todos}
            setTodos={setTodos}
            setInputText={setInputText}
            setSelectStatus = {setSelectStatus}
            />
      <TodoList 
            filteredTodos = {filteredTodos} 
            setTodos={setTodos} 
            todos={todos}/>
    </div>
  );
}

export default App;

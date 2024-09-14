import "./components/todo/todo.css";
import TodoNew from "./components/todo/todoNew";
import TodoData from "./components/todo/todoData";
import reactLogo from "./assets/react.svg";
import { useState } from "react";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { Outlet } from "react-router-dom";

const App = () => {
  const [todoList, setTodoList] = useState([
    // {id:1, name:"Learning React"},
    // {id:2, name:"Matching Youtube"}
  ]);

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000000),
      name: name,
    };

    setTodoList([...todoList, newTodo]);
  };

  const deleteTodo = (id) => {
    const newTodo = todoList.filter((item) => item.id !== id);
    setTodoList(newTodo);
  };

  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // addNewTodo();

  return (
    <>
      <Header />
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew addNewTodo={addNewTodo} />

        {todoList.length === 0 ? (
          <div className="todo-image">
            <img src={reactLogo} className="logo"></img>
          </div>
        ) : (
          <TodoData todoList={todoList} deleteTodo={deleteTodo} />
        )}
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default App;

import './components/todo/todo.css';
import TodoNew from './components/todo/todoNew';
import TodoData from './components/todo/todoData';
import reactLogo from './assets/react.svg'
import { useState } from 'react';

const App = ()=> {

  const [todoList, setTodoList] = useState([
    {id:1, name:"Learning React"},
    {id:2, name:"Matching Youtube"}
  ])

  const trietnhm = 'Chiet';
  const age = 12;
  const data = {
    address: "hanoi",
    country: "VietNam",
  }

  const addNewTodo = (name)=>{
    alert(`call me ${name}`)
  }

  // addNewTodo();

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoData
        name={trietnhm}
        age={age}
        data={data}
        todoList={todoList}
      />
      <div className='todo-image'>
        <img src={reactLogo} className='logo'></img>
      </div>
    </div>
  )
}

export default App

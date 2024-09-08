import './components/todo/todo.css';
import TodoNew from './components/todo/todoNew';
import TodoData from './components/todo/todoData';
import reactLogo from './assets/react.svg'

const App = ()=> {

  const trietnhm = 'Chiet';
  const age = 12;
  const data = {
    address: "hanoi",
    country: "VietNam",
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew/>
      <TodoData
        name={trietnhm}
        age={age}
        data={data}/>
      <div className='todo-image'>
        <img src={reactLogo} className='logo'></img>
      </div>
    </div>
  )
}

export default App

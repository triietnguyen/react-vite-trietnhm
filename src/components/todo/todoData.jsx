const TodoData = (props) => {

    const {name, age, data, todoList} = props
    console.log(">>> check props: ", props)
    return (
        <div className='todo-data'>
        <div>{name}</div>
        <div> Learning React</div>
        <div> Watching Youtube</div>
        <div>
          {JSON.stringify(todoList)}
        </div>
      </div>
    )
}

export default TodoData
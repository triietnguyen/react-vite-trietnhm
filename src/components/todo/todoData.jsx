const TodoData = (props) => {

    const {name, age, data} = props
    return (
        <div className='todo-data'>
        <div>{name}</div>
        <div> Learning React</div>
        <div> Watching Youtube</div>
      </div>
    )
}

export default TodoData
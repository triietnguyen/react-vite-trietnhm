const TodoNew = (props) => {
    console.log('check props from parent', props)
    const {addNewTodo} = props

    // addNewTodo("Chiet");
    return (
        <div className='todo-new'>     
            <input type="text"></input>
            <button>Add</button>
        </div>
    )
}

export default TodoNew
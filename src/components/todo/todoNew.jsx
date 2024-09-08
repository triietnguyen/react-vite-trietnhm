const TodoNew = (props) => {
    console.log('check props from parent', props)
    const {addNewTodo} = props

    // addNewTodo("Chiet") //fire
    const handleClick = () => {
        alert("click me")
    }

    const handleOnChange = (name) => {
        console.log(">>> handleOnChange", name)
    }

    return (
        <div className='todo-new'>     
            <input 
                type="text" 
                onChange={(event)=> handleOnChange(event.target.value)}></input>
            <button 
                style={{cursor:"pointer"}} 
                onClick={handleClick}
            >Add</button>
        </div>
    )
}

export default TodoNew
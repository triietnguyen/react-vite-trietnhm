import { useState } from "react"

const TodoNew = (props) => {

    // const valueInput = "eric";
    const [valueInput, setValueInput] = useState("eric")

    const {addNewTodo} = props

    // addNewTodo("Chiet") //fire
    const handleClick = () => {
        console.log(">>> check valueInput: ", valueInput)
    }

    const handleOnChange = (name) => {
        setValueInput(name)
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
            <div>My text input is = {valueInput}</div>
        </div>
    )
}

export default TodoNew
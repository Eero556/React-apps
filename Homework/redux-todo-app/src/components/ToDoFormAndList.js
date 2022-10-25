import { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import "../App.css"

function ToDoFormAndList() {
    const [itemText, setItemText] = useState("")

    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos);

    const handleSubmit = (event) => {
        event.preventDefault()
        // use redux to store a new todo
        dispatch(addTodo(itemText))
        setItemText("")
    }

    const removeItem = (id) => {
        // use redux
        dispatch(removeTodo(id))
    }

    const addTodo = (text) => {
        return { type: "ADD_TODO", text: text, id: Math.random() };
    }

    const removeTodo = (id) => {
        return { type: "REMOVE_TODO", id: id };
    }

    return (
        <div className="App">
            <h1>Redux AddTodo</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' value={itemText} onChange={event => setItemText(event.target.value)} placeholder="Write a new todo here" />
                <input type='submit' value='Add' />
            </form>
            <ul>
                {todos.map(item => (
                    <div className="item" key={item.id}>
                        <li>
                            {item.text + " "} <span onClick={() => removeItem(item.id)}> x </span>
                        </li>
                    </div>

                ))}
            </ul>
        </div>
    )
}

export default ToDoFormAndList;

import './App.css';
import {useState} from "react"

function App() {
  const [items,setItems] = useState([])
  const [message, setMessage] = useState('');
  const handlesubmit = (event) => {
    event.preventDefault()
    if(message){
      setItems([...items, {id: items.length, value: message}])
      setMessage("")
    }
    
  }

  const remove = (id) =>{
    const newList = items.filter((item) => item.id !== id)
    setItems(newList)
  }

  
  

  return (
    <div className="App">
      <h1>TODOLIST</h1>
      <form onSubmit={handlesubmit}>
      <button>Add todo</button>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      </form>
      
      <div>
        {items.map((item) =>(<div key={item.id}>
          <li>{item.value}<span onClick={() => remove(item.id)}>X</span></li>
          
        </div>))}
      </div>

      
    </div>
  )
}

export default App;

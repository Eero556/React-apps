import "./App.css";
import { Provider} from "react-redux";
import { createStore } from "redux";
import ToDoFormAndList from "./components/ToDoFormAndList";
import todosReducer from "./Reducers/todoreducer";
function App() {

  
  

  const store = createStore(todosReducer)
  return (
    <Provider store={store}>
        <ToDoFormAndList/>
    </Provider>
  );
}

export default App;


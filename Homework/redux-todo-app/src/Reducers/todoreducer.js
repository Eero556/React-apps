const todosReducer = (state = { todos:[] }, action) => {
    switch (action.type) {
      case 'ADD_TODO': 
        return { // returning a copy of orignal state 
        ...state, //copying the original state
        todos: [...state.todos, {text: action.text, id: action.id}] //new todos array 
        }
      case 'REMOVE_TODO':
        const newTodos = state.todos.filter(todo => todo.id !== action.id);
        return {
          ...state, 
          todos: newTodos
        }
      default: return state;
    }
  } 

export default todosReducer
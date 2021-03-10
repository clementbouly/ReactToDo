export const initialTodo = [
    { id: 1, content: "coder en react avec le sourire", completed: false },
    { id: 2, content: "manger une pomme", completed: false },
    { id: 3, content: "manger une carotte", completed: false }
  ];

export function todoReducer(state, action) {
  const {payload} = action
    switch (action.type) {
      case "ADD_TASK":
        return [...state, payload];
      case "REMOVE_TASK":
        return state.filter((todo) => todo !== payload);
      case "EDIT_TASK":
        return state.map((todo) => todo.id === payload.id ? { ...todo, content : payload.content } : todo);
      case "COMPLETE_TASK":
        return state.map((todo) => todo === payload ? { ...todo, completed: !payload.completed } : todo);
      default:
        return state;
    }
  }
  

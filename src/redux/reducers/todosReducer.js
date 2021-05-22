import { v4 as uuidv4 } from "uuid";

const ADD_TODO = 'ADD-TODO';
const UPDATE_NEW_TODO = 'UPDATE-NEW-TODO';

let initialState = {
   todos: [],
   newTodoText: '',
};

let todosReducer = (state = initialState, action) => {
   switch(action.type) {
      case ADD_TODO: 
      let newTodo = {
         id: uuidv4(),
         text: state.newTodoText,
      }
      state.todos.push(newTodo);
      state.newTodoText = '';
      return state;
   
      case UPDATE_NEW_TODO:
         state.newTodoText = action.newText 
      return state;

      default: 
         return state;
      }
}

export default todosReducer;

export const addTodoAction = (todo) => ({
   type: ADD_TODO,
})

export const updateNewTodoAction = () => {
   type: UPDATE_NEW_TODO,
   newText: 
}
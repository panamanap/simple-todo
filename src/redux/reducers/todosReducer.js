import { v4 } from "uuid";

const ADD_TODO = 'ADD_TODO';
const UPDATE_TODO = 'UPDATE_TODO';
const DELETE_TODO = 'DELETE_TODO';
const EDIT_TODO = 'EDIT_TODO';

const initialState = [];

let todosReducer = (state = initialState, action) => {
   switch(action.type) {
      case ADD_TODO: 
        state.push({
          text: action.payload,
          checked: false,
          id: v4(),
        })
        return [...state];
        
      case UPDATE_TODO: {
        const { id, ...data } =  action.payload;
        const index = state.findIndex(todo => todo.id === id);
        
        state[index] = {
          ...state[index], // { text, checked, id }  
          ...data,//  { checked }
        };
        return [...state];
      }
        
      case EDIT_TODO: {
         // debugger
         const { id, text } =  action.payload;
         const index = state.findIndex(todo => todo.id === id);
         state[index] = {
            ...state[index],
            text: text,
         }
         // debugger
         return [...state]
      }

      case DELETE_TODO:
        const id =  action.payload;
        const index = state.findIndex(todo => todo.id === id);
        if (index === -1) {
          return state;
        }
        state.splice(index, 1);
      return [...state];
      default: 
         return state;
      }
}

export default todosReducer;

export const addTodoAction = (text) => ({
   type: ADD_TODO,
   payload: text,
})


export const deleteTodoAction = (id) => ({
  type: DELETE_TODO,
  payload: id,
})

export const updateTodoAction = (id, data) => ({
   type: UPDATE_TODO,
   payload: {
     id: id,
     ...data,
   },
})

export const editTodoAction = (id, text) => ({
   type: EDIT_TODO,
   payload: {
      id,
      text,
   }
})
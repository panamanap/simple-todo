import { combineReducers, createStore } from 'redux';
import todosReducer from './reducers/todosReducer';

let reducers = combineReducers({
   todos: todosReducer,
})

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : []

let store = createStore(
   reducers, 
   persistedState,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  
);

store.subscribe(() => {
   localStorage.setItem('reduxState', JSON.stringify(store.getState()))
} )

export default store;
import { useState, useEffect } from 'react';
import TodosItem from './Components/TodoItem/TodoItem';
import Header from './Components/Header/Header';
import AddTodo from './Components/AddTodo/AddTodo';
import styles from './Todo.module.css';
import { addTodoAction } from './redux/reducers/todosReducer';

const Todo = ({store, dispath}) => {

   let quantityTasks = store.getStore().todos.length;

   const addTodo = todo => {
      dispath(addTodoAction(todo))
   }

   return(
      <div className= {styles.todoWrapper}>
         <Header quantityTasks={quantityTasks}/>
         <AddTodo addTodo= {addTodo} dispath={dispath} store={store}/>
         <ul className={styles.content}>
            {store.getStore().todos.map(item => <TodosItem key={item.id} item={item}/>)}
         </ul>
      </div>
   )
}

export default Todo;
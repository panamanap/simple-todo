import { useState, useEffect } from 'react';
import TodosItem from './TodoItem/TodoItem';
import Header from './Header/Header';
import AddTodo from './AddTodo/AddTodo';
import styles from './Todo.module.css';
import { v4 as uuidv4 } from "uuid";


const Todo = () => {
   const [todos, setTodos] = useState([]);
   let quantityTasks = todos.length;

   useEffect(()=> {  
      setTodos(JSON.parse(localStorage.getItem('todos') || []));
   },[])

   useEffect(()=> { 
      localStorage.setItem('todos', JSON.stringify(todos ))
   },[todos])

   const addTodo = todo => {
      let newTodo = {
         id: uuidv4(),
         todo,
      }
      console.log()

      setTodos([...todos, newTodo]);
   }

   const deleteTodo = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
   };

   return(
      <div className= {styles.todoWrapper}>
         <Header quantityTasks={quantityTasks}/>
         <AddTodo addTodo= {addTodo}/>
         <ul className={styles.content}>
            {todos.map(item => <TodosItem key={item.id} item={item} deleteTodo={deleteTodo}/>)}
         </ul>
      </div>
   )
}

export default Todo;
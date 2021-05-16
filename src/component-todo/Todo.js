import { useState, useEffect } from 'react';
import TodosItem from './TodoItem/TodoItem';
import Header from './Header/Header';
import AddTodo from './AddTodo/AddTodo';
import Footer from './Footer/Footer';
import styles from './Todo.module.css';
import { v4 as uuidv4 } from "uuid";


const Todo = () => {
   
   const [todos, setTodos] = useState([]);

   useEffect( () => {
      let data = localStorage.getItem('todos') || [];
      setTodos(JSON.parse(data));
   },[])

   useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
   },[todos])

   let quantityTasks = todos.length;

   const addTodo = todo => {
      let newTodo = {
         id: uuidv4(),
         todo,
         completed: false,
      }
      console.log()

      setTodos([...todos, newTodo]);
   }

   const deleteTodo = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
   };

   return(
      <div className= {styles.todoWrapper}>
         <Header/>
         <AddTodo addTodo= {addTodo}/>
         <ul className={styles.content}>
            {todos.map(item => <TodosItem 
               key={item.id} 
               item={item} 
               deleteTodo={deleteTodo}
               completed={item.completed}
            />)
            }
         </ul>
         <Footer quantityTasks={quantityTasks}/>
      </div>
   )
}

export default Todo;
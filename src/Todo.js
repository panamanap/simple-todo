import Header from './Components/Header/Header';
import AddTodo from './Components/AddTodo/AddTodo';
import { TodoList } from './Components/TodoList/TodoList';
import styles from './Todo.module.css';

const Todo = () => {
   return(
      <div className= {styles.todoWrapper}>
         <Header/>
         <AddTodo/>
         <TodoList />
      </div>
   )
}

export default Todo;
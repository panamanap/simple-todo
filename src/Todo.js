import Header from './сomponents/Header/Header';
import AddTodo from './сomponents/AddTodo/AddTodo';
import { TodoList } from './сomponents/TodoList/TodoList';
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



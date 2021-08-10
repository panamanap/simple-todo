import s from './Header.module.css';
import { useSelector } from "react-redux";
import { selectTodoCount } from "../../redux/selectors";

const Header = () => {
   const countTodos = useSelector(selectTodoCount);

   return (
      <header className={s.todosHeader} >
         <h1 className={s.title}>
            Todo List
         </h1>
         <div className = {s.quantityTasks}>
         Tasks: {countTodos}
      </div>
      </header>
   )
}

export default Header;
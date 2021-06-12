import s from "./TodoList.module.css";
import { useSelector } from "react-redux";
import { selectTodos } from "../../redux/selectors";
import { TodoItem } from "../TodoItem";

export const TodoList = () => {
  const todos = useSelector(selectTodos);

   return (
      <ul className={s.content}>
         {todos.map(item => <TodoItem key={item.id} {...item}/>)}
      </ul>
   )
}
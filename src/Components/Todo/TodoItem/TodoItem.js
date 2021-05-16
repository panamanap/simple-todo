import { useState } from "react";
import styles from "./TodoItem.module.css";


const TodosItem = ({deleteTodo, item}) => {
   const [completed, setCompleted] = useState(false);
   
   let clsName = (completed) ? `${styles.wrapperText} ${styles.completed}` : `${styles.wrapperText}`; 
   return (
      <li className={styles.todoItem}>
         <label className={clsName}>
            <input 
               className={styles.inputCheckbox}
               type="checkbox" 
               checked={completed} 
               onChange={()=> {setCompleted(!completed)}}/> 
            {item.todo}
         </label>
         <button 
            className={styles.deleteTodo} 
            onClick={() => deleteTodo(item.id)}>
            🗑️
         </button>
      </li>
   )
}

export default  TodosItem;
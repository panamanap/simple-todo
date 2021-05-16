import {useState} from "react";
import styles from "./TodoItem.module.css";

const TodosItem = ({completed,deleteTodo, item}) => {
   let clName = '';

   
   const [checked, setChecked]= useState(completed);

   if(checked) {
      clName = styles.completed;
   }

   return (
      <li className={`${styles.todoItem}  ${clName}`}>
         <label className={styles.wrapperTask}>  
            <input
               className={styles.checkInput}
               type="checkbox"
               checked={checked}
               onChange={() => setChecked(!checked) }
            />
            <span className={styles.text}>{item.todo}</span>
         </label>
         <button 
            className={styles.deleteTodo} 
            onClick={() => deleteTodo(item.id)}
         >🗑️</button>
      </li>
   )
}

export default  TodosItem;
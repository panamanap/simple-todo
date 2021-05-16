import {useState} from 'react';
import styles from './AddTodo.module.css';

const AddTodo = ({addTodo}) => {
   const [text, setText] = useState('');

   const handleSubmit = (event) => {
      event.preventDefault();
      if(!text) {
         alert("Enter task");
         return;
      }
      setText("");
      addTodo(text);
   }

   const hadleChange = (event)=> setText(event.target.value);

   return (
         <form    
            className={styles.todoForm} 
            onSubmit={handleSubmit}>
            <input 
               className={styles.inputText} 
               type="text" 
               name="input" 
               value={text}
               onChange={hadleChange} 
               placeholder="Add task..." 
               autoFocus
            />
            <button 
            type="submit" 
            className={styles.btnSubmit}> 📝</button>
         </form>
  )
}

export default AddTodo;
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
      <div className={styles.formWrapper}>
         <form 
            className={styles.todoForm} 
            onSubmit={handleSubmit}>
               <input 
                  className={styles.textInput}  
                  type="text" 
                  name="input" 
                  value={text} 
                  onChange={hadleChange} 
                  placeholder="Add task..." 
                  autoFocus
               />
               <button type="submit" >📝</button>
         </form>
      </div>
  )
}

export default AddTodo;
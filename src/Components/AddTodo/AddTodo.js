// import {useState} from 'react';
import { updateNewTodoAction } from '../../redux/reducers/todosReducer';
import store from '../../redux/store';
import styles from './AddTodo.module.css';

const AddTodo = ({dispath, addTodo, store}) => {
   // const [text, setText] = useState('');

   const handleSubmit = (event) => {
      event.preventDefault();
      if(!text) {
         alert("Enter task");
         return;
      }
      addTodo(text);
   }

   const hadleChange = (event)=>  {
      let text =  event.target.value;
      dispath(updateNewTodoAction(text))
   }

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
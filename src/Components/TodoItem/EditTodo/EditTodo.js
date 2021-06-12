import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTodoAction } from '../../../redux/reducers/todosReducer';
import s from './EditTodo.module.css';


const EditTodo = ({text, id, handleEdit }) => {
   const [newText, setNewText] = useState(text);
   const dispatch = useDispatch();

   const handleChange = (e) => {
     setNewText(e.target.value);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if(newText === '') return;
      dispatch(editTodoAction(id, newText));
      handleEdit();
   };

   return (
      <form className={s.wrapperEdit} >
         <input
            className={s.editInput}
            type="text" 
            name="edit"
            value = {newText}
            onChange={handleChange}
            autoFocus
         />
         <button
            onClick={handleSubmit}
            className={s.btnEdit}>
            ✔
         </button>
      </form>
   )
}



export default EditTodo;
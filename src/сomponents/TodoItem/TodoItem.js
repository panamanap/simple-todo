import React, { useState } from "react";
import s from "./TodoItem.module.css";
import { useDispatch } from "react-redux";
import { updateTodoAction, deleteTodoAction} from "../../redux/reducers/todosReducer";
import EditTodo from "./EditTodo/EditTodo";

export const TodoItem = ({ id, text, checked}) => {
   const dispatch = useDispatch();
   const [edit, setEdit] = useState(true);

   const handleChecking = () => {
      dispatch(updateTodoAction(id, {
         checked: !checked,
      }))
  };

   const handleDelete = () => {
      dispatch(deleteTodoAction(id))
      setEdit('');
   };

   const handleEdit = () => {
      setEdit(!edit)
   };

   const clsName = (checked) ? `${s.wrapperText} ${s.completed}` : `${s.wrapperText}`; 

   return (
      <li className={s.todoItem}>
         <label className={clsName}>
            <input 
               className={s.inputCheckbox}
               type="checkbox"
               checked={checked}
               onChange={handleChecking}
            />
            { edit ? text : <EditTodo handleEdit={handleEdit} text = {text} id={id}/> }
         </label>
         <div>
            <button className={s.btnTodo} onClick={handleEdit}> 
               📝
            </button>
            <button className={s.btnTodo} onClick={handleDelete}> 
               🗑️
            </button>
         </div>
      </li>
   )
}
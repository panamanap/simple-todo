import s from "./AddTodo.module.css";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../../redux/reducers/todosReducer";
import { useState } from "react";

const AddTodo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") return;
    dispatch(addTodoAction(text));
    setText("");
  };

  return (
    <form className={s.todoForm}>
      <input
        className={s.inputText}
        type="text"
        name="input"
        value={text}
        onChange={handleChange}
        placeholder="Add task..."
        autoFocus
      />
      <button onClick={handleSubmit} className={s.btnSubmit}>
        📄
      </button>
    </form>
  );
};

export default AddTodo;

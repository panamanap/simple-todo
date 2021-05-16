import styles from './Header.module.css';

const Header = ({quantityTasks}) => {
   return (
      <header className={styles.todosHeader} >
         <h1 className={styles.title}>
            Todo List
         </h1>
         <div className = {styles.quantityTasks}>
         Tasks: {quantityTasks}
      </div>
      </header>
   )
}

export default Header;
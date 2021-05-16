import styles from './Footer.module.css';

const Footer = ({quantityTasks}) => {
   return (
      <footer className = {styles.todoFooter}>
         Tasks: {quantityTasks}
      </footer>
   )
}

export default Footer;
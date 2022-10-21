import styles from "./Footer.module.css"


interface FooterProps {
  onDeleteAllTasks: () => void;
  onDeleteDoneTasks: () => void;
}

export function Footer({onDeleteAllTasks, onDeleteDoneTasks }:FooterProps) {

  function handleDeleteAllTasks() {
    onDeleteAllTasks();
    
  }
  function handleDeleteDoneTasks() {
    onDeleteDoneTasks();
    
  }

  return(
    <footer className={styles.footer}>
        <button title={'Deleta todas as tarefas'}
          onClick={handleDeleteAllTasks}
        >Limpar Lista</button>        
        <button
          onClick={handleDeleteDoneTasks}
        >Deletar concluídas</button>
      </footer>    
  )
}
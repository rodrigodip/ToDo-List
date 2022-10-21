import styles from "./Footer.module.css"


interface FooterProps {
  onDeleteAllTasks: () => void;
  onDeleteDoneTasks: () => void;
}

export function Footer({onDeleteAllTasks, onDeleteDoneTasks }:FooterProps) {

  

  return(
    <footer className={styles.footer}>
        <button title={'Deleta todas as tarefas'}
          onClick={onDeleteAllTasks}
        >Limpar Lista</button>        
        <button
          onClick={onDeleteDoneTasks}
        >Deletar concluídas</button>
      </footer>    
  )
}
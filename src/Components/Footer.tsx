import styles from "./Footer.module.css"

export function Footer() {
  return(
    <footer className={styles.footer}>
        <button title={'Deleta todas as tarefas'}
          //onClick={deleteAllTasks}
        >Limpar Lista</button>        
        <button
          //onClick={deleteDoneTasks}
        >Deletar concluídas</button>
      </footer>    
  )
}
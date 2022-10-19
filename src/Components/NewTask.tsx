import { Trash } from 'phosphor-react';
import { ChangeEvent } from 'react';
import styles from './NewTask.module.css'


export interface NewTaskProps {
  id: number;
  content: string;
  onDeleteTask:  (id:number) => void;
  onChechTask:   (id:number) => void; 
  onUNchechTask: (id:number) => void; 
}
export function NewTask({ content, id, onChechTask, onUNchechTask, onDeleteTask }:NewTaskProps) {

  
  function handleDeleteTask (){
    //console.log('Deletado')
    onDeleteTask(id);
  }

  function handleChechTaskChange(event: ChangeEvent<HTMLInputElement>) {
    if (event?.target.checked){
      //console.log('Checked!')
      onChechTask(id);
    }else{
      onUNchechTask(id);
      //console.log('NOT Checked!')      
    }
  }


  return(
    <article>
      
      <label className={styles.tarefa}>        
        <input className={styles.checkboxRound}
          name={'rodrigo'}
          type={'checkbox'}
          onChange={handleChechTaskChange}
        />
        <p id='taskContent'>{content}</p>
      </label>
      <button 
      className={styles.delButton}
      title='Deletar tarefa.'
      onClick={handleDeleteTask}
      ><Trash size={18}/></button>

    </article>
  )
}

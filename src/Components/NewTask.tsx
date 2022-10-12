import { Key, Trash } from 'phosphor-react';
import { useState, ChangeEvent } from 'react';
import styles from './NewTask.module.css'


interface NewTaskProps {
  id: number;
  content: string;
  
}

export function NewTask({ content, id, checked }:NewTaskProps) {

  const [isCheckedList, setIsCheckedList] = useState <NewTaskProps[]> ([
    
  ])
  
  let isChecked: boolean = checked;

  function handleCheckboxChange(event: ChangeEvent<HTMLInputElement>) {
    
    const newCheckedTaskList = {
      id: id,
      content: content,
      checked: event?.target.checked
    }

    if(event?.target.checked){
      setIsCheckedList([...isCheckedList, newCheckedTaskList])
    }else{
     
     }
    console.log(isCheckedList);
    console.log(isCheckedList.keys())
  }

  return(
    <article>
      
      <label className={styles.tarefa}>        
        <input className={styles.checkboxRound}
          type={'checkbox'}
          checked={checked}
          onChange={handleCheckboxChange}

        />
        <p id='taskContent'>{content}</p>
      </label>
      <button className={styles.delButton}
      title='Deletar tarefa.'
      ><Trash size={18}/></button>

    </article>
  )
}

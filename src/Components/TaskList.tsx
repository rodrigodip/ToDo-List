import { useState,ChangeEvent} from 'react';
import { NewTask } from './NewTask'
import styles from './TaskList.module.css'


export function TaskList() {

// State & Handler => AddNewTask <form>

  const [newTaskAdded, setTaskAdded] = useState([
    { 
      id: 1,
      content: "teste tarefa 01",
    },

  ])

  function handleAddNewTask() {
    event?.preventDefault();
    
    const newTaskText = {
      id: newTaskAdded.length + 1,
      content: newContentText,
      checked: true,
    }

    setTaskAdded([...newTaskAdded, newTaskText]);
    setNewContentText('')
  }
//--//

// State & Handler => ContentText <texteArea>

  const [newContentText, setNewContentText] = useState('')

  function handleContentTextChange(event: ChangeEvent<HTMLInputElement>) {
    setNewContentText(event?.target.value);
  }

//--//

  let taskCount:number = newTaskAdded.length;//Stores number of Tasks

  return(    
    <div>

      <form
      onSubmit={handleAddNewTask}
      className={styles.addTarefaForm}
      >
        <input
          type="text"
          name="taskTextarea"
          autoComplete='off'
          placeholder="Adicione uma nova tarefa"
          maxLength={75}
          onChange={handleContentTextChange}
          value={newContentText}
          required={true}
        >
        </input>

        <button type='submit'>
          <p>Criar</p>
          <img src="./src/assets/btn_add_tarefa.svg"/>
        </button>

      </form>

      <header>

        <div className={styles.taskCount}>
          <p>Tarefas criadas</p>
          <span>{taskCount}</span>
        </div>
        <div className={styles.doneTaskCount}>
          <p>Concluídas</p>
          <span>{`2 de ${taskCount}`}</span>
        </div>
      </header>
      <main>
        {newTaskAdded.map(task =>{
          return(
            <NewTask
            key={task.id}
            id={task.id}
            content={task.content}
            checked={false}
            />
          )
        })}
      </main>
      
    </div>     
  )
}
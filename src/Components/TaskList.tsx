import { useState,ChangeEvent} from 'react';
import { NewTask } from './NewTask'
import styles from './TaskList.module.css'

interface TaskContent {
  id: number;
  content: string;
  checked: boolean;
}


export function TaskList() {

// State & Handler => AddNewTask <form>

  const [newTaskAdded, setTaskAdded] = useState<TaskContent[]>
  ([/*New tasks collection */])

  function handleAddNewTask() {
    event?.preventDefault();
    
    const newTaskContent = {
      id: Math.random(),
      content: newContentText,
      checked: false,
    }

    setTaskAdded([...newTaskAdded, newTaskContent]);
    //console.log(newTaskText);
    //console.log(newTaskAdded);
    setNewContentText('')
  }
//--//

// State & Handler => ContentText <texteArea>

  const [newContentText, setNewContentText] = useState('')

  function handleContentTextChange(event: ChangeEvent<HTMLInputElement>) {
    setNewContentText(event?.target.value);
  
  }  
//--//

  const [chekedList, setCheckedList] = useState<TaskContent[]>([
    {
      id: 1,
      content: 'teste checkedList',
      checked: false,
    },
    {
      id: 2,
      content: 'teste checkedList 02',
      checked: true,
    },
  ])

  

//--//
  let taskCount:number = newTaskAdded.length;// Stores number of new Tasks
  let doneTaskCount:number = 0;// Stores number of done Tasks

  function chechTask(idToCheck:number) { // Recebe evento Ckeck = true
    
    /*const newTaskChecked = newTaskAdded.filter(
      function(obj) { return obj.id == idToCheck;}
    )

      console.log(chekedList)
      console.log(newTaskChecked)

      setCheckedList(newTaskChecked)
    */
  }
  
  function unChechTask(idToUncheck:number) { // Recebe evento Ckeck = false
       
  }
  
  function deleteTask(idToDelete:number) {
    const taskListWhithoutDeleted = newTaskAdded.filter(
      function(obj) { return obj.id !== idToDelete;}
    )
    setTaskAdded(taskListWhithoutDeleted)
  }
  
  

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
          <span>{`${doneTaskCount} de ${taskCount}`}</span>
        </div>
      </header>
      <main>
        {newTaskAdded.map(task =>{
          return(
            <NewTask
            key={task.id}
            id={task.id}
            content={task.content}
            checked={task.checked}
            onDeleteTask={deleteTask}
            onChechTask={chechTask}
            onUNchechTask={unChechTask}         
            />
          )
        })}
      </main>
      
    </div>     
  )
}
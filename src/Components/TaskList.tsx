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
    setNewContentText('')
  }
//--//

// State & Handler => ContentText <texteArea>

  const [newContentText, setNewContentText] = useState('')

  function handleContentTextChange(event: ChangeEvent<HTMLInputElement>) {
    setNewContentText(event?.target.value);
  
  }  
//--//

  const [checkedList, setCheckedList] = useState<TaskContent[]>([])

//--//
  let taskCount:number = newTaskAdded.length;// Stores number of new Tasks
  let doneTaskCount:number = checkedList.length;// Stores number of done Tasks

  function chechTask(idToCheck:number) { // Recebe evento Ckeck = true
    const isChecked = newTaskAdded.filter(
      function(obj) { return obj.id == idToCheck;}
    )
    setCheckedList([...checkedList, isChecked[0] ])    
  }
  
  function unChechTask(idToUncheck:number) { // Recebe evento Ckeck = false
    const isUNchecked = checkedList.filter(
      function(obj) { return obj.id !== idToUncheck;}
    )
    setCheckedList(isUNchecked)
  }
  
  function deleteTask(idToDelete:number) {
    const taskListWhithoutDeleted = newTaskAdded.filter(
      function(obj) { return obj.id !== idToDelete;}
      )
      setTaskAdded(taskListWhithoutDeleted)
      unChechTask(idToDelete);
  }
    
  function deleteAllTasks() {
      setTaskAdded([])    
  }

  function deleteDoneTasks() {
    
    // A comparer used to determine if two entries are equal.
    const isSameUser = (newTaskAdded:TaskContent, checkedList:TaskContent) => newTaskAdded.id === checkedList.id;

    // Get items that only occur in the left array,
    // using the compareFunction to determine equality.
    const onlyInLeft = (left:TaskContent[], right:TaskContent[], compareFunction:any) => 
      left.filter(leftValue =>
      !right.some(rightValue => 
      compareFunction(leftValue, rightValue)));

    const onlyInA = onlyInLeft(newTaskAdded, checkedList, isSameUser);
    
    setTaskAdded(onlyInA)
        
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
      <footer className={styles.footer}>
        <button title={'Deleta todas as tarefas'}
          onClick={deleteAllTasks}
        >Limpar Lista</button>        
        <button
          onClick={deleteDoneTasks}
        >Deletar concluídas</button>
      </footer>
    </div>     
  )
}
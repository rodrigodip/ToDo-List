import { useState,ChangeEvent} from 'react';
import { NewTask } from './NewTask'
import { EmptyList } from './EmptyList';
import { Footer } from './Footer';
import styles from './TaskList.module.css';

interface TaskContent {
  id: number;
  content: string;
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
// State & Handler => ContentText <texteArea>

  const [checkedList, setCheckedList] = useState<TaskContent[]>([])

  
  function chechTask(idToCheck:number) { // Listen to event => Ckeck = true
    const isChecked = newTaskAdded.filter(
      function(obj) { return obj.id == idToCheck;}
      )
      setCheckedList([...checkedList, isChecked[0] ])    
    }
    
  function unChechTask(idToUncheck:number) { // Listen to event => Ckeck = false
    const isUNchecked = checkedList.filter(
      function(obj) { return obj.id !== idToUncheck;}
      )
      setCheckedList(isUNchecked)
    }
//--//

  let taskCount:number = newTaskAdded.length;// Stores number of new Tasks
  let doneTaskCount:number = checkedList.length;// Stores number of done Tasks
    
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
    
    const isSameTask = (newTaskAdded:TaskContent, checkedList:TaskContent) => newTaskAdded.id === checkedList.id;
    // Get checked tasks in the list <checkedList>,
    // using the compare Function to determine equality.
    const onlyUnCheked = (list01:TaskContent[], List02:TaskContent[], compareFunction:any) => 
      list01.filter(list01Value =>
      !List02.some(List02Value => 
      compareFunction(list01Value, List02Value)));      
      
    const onlyUnCheckedList:TaskContent[] = onlyUnCheked(newTaskAdded, checkedList, isSameTask);

    setTaskAdded(onlyUnCheckedList);
    setCheckedList([]); 
      
  }
  const isEmpty = newTaskAdded.length;
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
        
        {isEmpty ?             
          newTaskAdded.map(task =>{
            return(
              <NewTask
              key={task.id}
              id={task.id}
              content={task.content}
              onDeleteTask={deleteTask}
              onChechTask={chechTask}
              onUNchechTask={unChechTask}         
              />
            )}
          ) : <EmptyList/>
        }
        {isEmpty !== 0 &&
        <Footer
          onDeleteAllTasks={deleteAllTasks}
          onDeleteDoneTasks={deleteDoneTasks}
        />
        }          
      </main>      
    </div>     
  )
}
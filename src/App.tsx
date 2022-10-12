import { Header } from './Components/Header';
import { TaskList } from './Components/TaskList';

import style from './App.module.css'



export function App() {
  return (
    <div> 
      
      <Header/>
      <div className={style.wrapper}>
        <main>
          <TaskList/>
        </main>
      </div>

    </div>
  );
}

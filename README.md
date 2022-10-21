# ToDo-List
### Code Challenge #1 - ReactJS Fundamentals

<h4>This is a web aplication to create an organize your tasks.</h4>  

___
**Next Implementations**  
- [x] A button to clean the task list
- [x] A button to delete all done tasks
- [ ] Characters count
- [ ] Task details (sub tasks?)

**Tecnologies:**  
-ReactJS  
-JavaScript  
-TypeScript  

**Main knowlogies practiced:**  
-Components  
-Components intercommunication  
-Immutabillity  
-Declarative programming  
-Conditional Rendering


> **About this coding expirience:**  
> This was the first time I wrote an entire code all alone. Of course I took a look at the lesson code but I tried hard to understand the concepts and the computational thinking to make it work.  
> I must say that wasn´t easy to me. To add a dificulty layer I acidentally started the project with TypeScript and it was dreadfull and worthy at the same time. Too many time actually. TypeScript held me back, but now I know it better and the next project may be a project that TS makes a difference.   
>**[New delete features]** - Implementing the button to clear all tasks was relatively easy. I stroggled for some time to delete just the done tasks. To do so, I needed to learn how to filter |taskList|, a array of objects, by the |object.id| so I could feed a |checkedTaskList| with the checked task. Then create |onlyUnCheckedList| by filtering |checkedTaskList| to up date |taskList|.
>The most defianty was keep the lists immutability.
>**[Conditional Rendering]** - To keep the lay-out visualy structured and to avoid have a footer with delete option and no tasks to delete, I needed to conditionaly display a message informing that there's no tasks on the list. Once user add the first task, then the footer is displayed. I just discovered that React do this in a particulary way. Wont be a problem next time.
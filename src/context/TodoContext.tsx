import React,{FC, useState} from 'react'

type TodoProps = {
  children?: React.ReactNode
} 
const TodoContext = React.createContext(null)


export const TodoProvider:FC<TodoProps> =({children}) =>{
   type TaskType = {
    id: number,
    task: string,

}

const [todoTask,setTodoTask] = useState<TaskType[]>([{
  id:1,
  task:'Cook dinner at 8 pm',
},
{
  id:2,
  task:'Take a bath',
},
{
  id:3,
  task:'Something need to talk',
},
{
  id:4,
  task:'Heading to GYM',
},])

const addTask = (task:string) =>{
  setTodoTask([...todoTask,{id:Math.floor(Math.random()* 999), task:task }])
}
const deleteTask =(id:number)=>{
 
 return setTodoTask(todoTask.filter((task) => task.id !== id  ) )
}

  return(<TodoContext.Provider value={{todoTask,addTask,deleteTask}}>
    {children}
  </TodoContext.Provider>)
}
export default TodoContext
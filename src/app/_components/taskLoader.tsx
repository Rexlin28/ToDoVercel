
"use client";
import { useEffect, useState } from 'react'
import { PlusCircle, CheckCircle, Circle, Trash2 } from 'lucide-react'
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { db } from '~/server/db'
import Link from 'next/link'
import { api } from '~/trpc/react';
import { set } from 'zod';



type Task = {
  id: string
  description: string
  completed: boolean
}

export default function Loader({currentCategory= 'All'}) {



  const [tasks, setTasks] = useState<Task[]>([
    { id: '231edasd', description: 'Buy groceries', completed: false },
    { id: 'afasd31r', description: 'Finish project report', completed: false },
    { id: 'asfsa132e', description: 'Go for a run', completed: true},
  ])
  
  const [newTask, setNewTask] = useState('');
 
  const response = api.apiRouter.getSomethingFromExternalApi.useQuery({ id: currentCategory})
  useEffect(()=>{
    if(response && response.data){
      console.log(response.data)
      setTasks(response.data.data);
    }
    
    
  },[response])


  const categories = ['All', 'Personal', 'Work', 'Health']

  const toggleTask = (id: number ) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = async (id: string) => {
      await deleteTaskMutation.mutateAsync({
      id: id
    })
    setTasks(tasks.filter(task => task.id !== id))
  }

  const addTask = async ()=>{
    await tasknew.mutateAsync({
      id: currentCategory,
      task: newTask
      
    })
  }
  const filteredTasks = tasks;

  
  const tasknew = api.apiRouter.updateUserFromDatabase.useMutation();
  const deleteTaskMutation = api.apiRouter.deletedTaskFromDatabase.useMutation();

  //setNewTask('')

    return (
        
        <div className="flex h-screen bg-gray-100">
            <h1>{currentCategory}</h1>
          {/* Sidebar */}
          {/* <div className="w-64 bg-white shadow-md">
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-4">Categories</h2>
              <ul>
                {categories.map(category => (
                  <li key={category}>
                    <Link href={`/category/${category}`} >
                    <Button
                      variant={currentCategory === category ? "default" : "ghost"}
                      className="w-full justify-start mb-2"
                    >
                      {category}
                    </Button>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div> */}
    
          {/* Main content */}
          <div className="flex-1 p-8">
            <h1 className="text-3xl font-bold mb-6">To-Do List</h1>
            
            {/* Add new task */}
            <div className="flex mb-4">
              <Input
                type="text"
                placeholder="Add a new task"
                className="mr-2"
                name='task'
                value = {newTask}
                onChange={(e)=>setNewTask(e.target.value)}
              />
              <Button onClick={addTask}>
                <PlusCircle className="mr-2 h-4 w-4" /> Add Task
              </Button>
            </div>
    
            {/* Task list */}
            <ul className="space-y-2">
              {filteredTasks.map(task => (
                <li key={task.id} className="flex items-center bg-white p-4 rounded shadow">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggleTask(task.id)}
                    className="mr-2"
                  >
                    {task.completed ? (
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    ) : (
                      <Circle className="h-6 w-6" />
                    )}
                  </Button>
                  <span className={`flex-1 ${task.completed ? 'line-through text-gray-500' : ''}`}>
                    {task.description}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => deleteTask(task.id)}
                    className="text-red-500"
                  >
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
}



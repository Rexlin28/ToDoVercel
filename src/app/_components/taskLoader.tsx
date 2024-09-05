'use client'

import { useState } from 'react'
import { PlusCircle, CheckCircle, Circle, Trash2 } from 'lucide-react'
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"

type Task = {
  id: number
  text: string
  completed: boolean
  category: string
}

export default  function Loader() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: 'Buy groceries', completed: false, category: 'Personal' },
    { id: 2, text: 'Finish project report', completed: false, category: 'Work' },
    { id: 3, text: 'Go for a run', completed: true, category: 'Health' },
  ])
  const [newTask, setNewTask] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', 'Personal', 'Work', 'Health']

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false, category: 'Personal' }])
      setNewTask('')
    }
  }

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const filteredTasks = activeCategory === 'All' 
    ? tasks 
    : tasks.filter(task => task.category === activeCategory)

    return (
        <div className="flex h-screen bg-gray-100">
          {/* Sidebar */}
          <div className="w-64 bg-white shadow-md">
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-4">Categories</h2>
              <ul>
                {categories.map(category => (
                  <li key={category}>
                    <Button
                      variant={activeCategory === category ? "default" : "ghost"}
                      className="w-full justify-start mb-2"
                      onClick={() => setActiveCategory(category)}
                    >
                      {category}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
    
          {/* Main content */}
          <div className="flex-1 p-8">
            <h1 className="text-3xl font-bold mb-6">To-Do List</h1>
            
            {/* Add new task */}
            <div className="flex mb-4">
              <Input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Add a new task"
                className="mr-2"
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
                    {task.text}
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
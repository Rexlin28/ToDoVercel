"use client"
import { useState } from 'react'
import Link from 'next/link'
import { PlusCircle, CheckCircle, Circle, Trash2 } from 'lucide-react'


type Task = {
  id: number
  text: string
  completed: boolean
  category: string
}

export default function TodoApp() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: 'Buy groceries', completed: false, category: 'Personal' },
    { id: 2, text: 'Finish project report', completed: false, category: 'Work' },
    { id: 3, text: 'Go for a run', completed: true, category: 'Health' },
  ])
  const [newTask, setNewTask] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['Work', 'Training', 'School', 'House', 'Sex', 'Weed'];

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
                <Link href={`/category/${category}`}>{category}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main content */}

    </div>
  )
}
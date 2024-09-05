"use client"
import Link from "next/link";
import React from "react";
import { useState } from 'react'
import { PlusCircle, CheckCircle, Circle, Trash2 } from 'lucide-react'
import {  HydrateClient } from "~/trpc/server";

type Task = {
  id: number
  text: string
  completed: boolean
  category: string
}

export default  function Home() {

  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: 'Buy groceries', completed: false, category: 'Personal' },
    { id: 2, text: 'Finish project report', completed: false, category: 'Work' },
    { id: 3, text: 'Go for a run', completed: true, category: 'Health' },
  ])
  const [newTask, setNewTask] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['Work', 'Training', 'School', 'House', 'Sex', 'Weed'];

 
 

  const filteredTasks = activeCategory === 'All' 
    ? tasks 
    : tasks.filter(task => task.category === activeCategory)
  return (
          <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">To-Do List</h1>
        
        {/* Add new task */}
        <div className="flex mb-4">
          holaa
        </div>

        {/* Task list */}
        <ul className="space-y-2">
          {filteredTasks.map(task => (
            <li key={task.id} className="flex items-center bg-white p-4 rounded shadow">
              arriba el sexo ouyea
            </li>
          ))}
        </ul>
      </div>
  );
}

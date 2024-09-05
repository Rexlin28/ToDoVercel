"use client"
import { useState } from 'react'
import { PlusCircle, CheckCircle, Circle, Trash2 } from 'lucide-react'
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import Link from "next/link";

type Task = {
  id: number
  text: string
  completed: boolean
  category: string
}


export default function TodoApp() {

  const categories = ['Work', 'Training', 'School', 'House', 'Sex', 'Weed'];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-4"><Link href={"/"}>Categories</Link></h2>
              <ul>
                {categories.map(category => (
                  <li key={category}>
                  <Link href={`/category/${category}`}><Button
                      variant={"ghost"}
                      className="w-full justify-start mb-2"
                    >
                      {category}
                    </Button>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
    

      {/* Main content */}

    </div>
  )
}
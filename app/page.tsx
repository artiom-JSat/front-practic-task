'use client'

import React, { useState, useEffect } from 'react'
import { Task } from '@/types/task'
import TaskList from './components/TaskList'
import TaskInput from './components/TaskInput'
import ThemeToggle from './components/ThemeToggle'

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('tasks')
      return saved ? JSON.parse(saved) : []
    }
    return []
  })

  const [darkMode, setDarkMode] = useState<boolean>(false)
  const [isHydrated, setIsHydrated] = useState<boolean>(false)

  useEffect(() => {
    setIsHydrated(true)

    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) setDarkMode(savedTheme === 'dark')
  }, [])

  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }
  }, [tasks, isHydrated])

  useEffect(() => {
    if (isHydrated) {
      const root = document.documentElement
      if (darkMode) {
        root.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        root.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }
    }
  }, [darkMode, isHydrated])

  if (!isHydrated) {
    return (
      <div className="spinner-container">
        <div className="spinner" />
      </div>
    )
  }

  return (
    <main className="main-container">
      <div className="header">
        <h1 className="header-title">ToDo List</h1>
        <ThemeToggle
          darkMode={darkMode}
          toggleThemeSwitch={() => setDarkMode(!darkMode)}
        />
      </div>
      <TaskInput tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </main>
  )
}

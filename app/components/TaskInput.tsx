import { useState } from 'react'
import { Task } from '@/types/task'

type TaskInputProps = {
  tasks: Task[]
  setTasks: (tasks: Task[]) => void
}

const TaskInput = ({ tasks, setTasks }: TaskInputProps) => {
  const [task, setTask] = useState<string>('')

  const addTask = () => {
    if (task.trim() === '') return
    const newTask: Task = {
      text: task,
      completed: false,
      date: new Date().toLocaleString(),
    }
    setTasks([...tasks, newTask])
    setTask('')
  }

  return (
    <div className="input-container">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
        className="input-task bg-foreground"
      />
      <button onClick={addTask} className="btn-add" title="Add task">
        Add
      </button>
    </div>
  )
}

export default TaskInput

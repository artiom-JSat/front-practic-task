import TaskItem from './TaskItem'
import { Task } from '@/types/task'

type TaskListProps = {
  tasks: Task[]
  setTasks: (tasks: Task[]) => void
}

const TaskList = ({ tasks, setTasks }: TaskListProps) => {
  const toggleTask = (index: number) => {
    const newTasks = [...tasks]
    newTasks[index].completed = !newTasks[index].completed
    setTasks(newTasks)
  }

  const removeTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index)
    setTasks(newTasks)
  }

  return (
    <ul className="task-list">
      {tasks.length === 0 ? (
        <p className="empty-list text-muted">The list is empty.</p>
      ) : (
        tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            toggleTask={() => toggleTask(index)}
            removeTask={() => removeTask(index)}
          />
        ))
      )}
    </ul>
  )
}

export default TaskList

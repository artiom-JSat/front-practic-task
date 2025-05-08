import { Task } from '@/types/task'
import { FiCheckCircle, FiCircle, FiTrash } from 'react-icons/fi'

type TaskItemProps = {
  task: Task
  toggleTask: () => void
  removeTask: () => void
}

const TaskItem = ({ task, toggleTask, removeTask }: TaskItemProps) => {
  return (
    <li className="task-item bg-foreground">
      <div className="task-header">
        <div className="task-info">
          <button
            onClick={toggleTask}
            className={`task-toggle-btn ${
              task.completed ? 'toggle-completed' : 'toggle-incomplete'
            }`}
            title={task.completed ? 'Mark as incomplete' : 'Mark as completed'}
          >
            {task.completed ? <FiCheckCircle /> : <FiCircle />}
          </button>

          <span
            style={{
              textDecoration: task.completed ? 'line-through' : 'none',
              opacity: task.completed ? 0.5 : 1,
            }}
          >
            {task.text}
          </span>
        </div>
        <button onClick={removeTask} className="btn-delete" title="Delete task">
          <FiTrash />
        </button>
      </div>
      <p className="date-text">{task.date}</p>
    </li>
  )
}

export default TaskItem

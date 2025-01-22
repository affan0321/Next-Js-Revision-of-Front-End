function TaskItem({ task, onDelete }) {
    return (
        <li>
            {task.name}
            <button onClick={() => onDelete(task.id)}>Remove</button>
        </li>

    )
}
export default TaskItem;
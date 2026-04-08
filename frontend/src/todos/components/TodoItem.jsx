const TodoItem = ({ todo, onDelete, onToggle }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id, !todo.completed)}
      />
      <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        {todo.titre}
      </span>
      <button onClick={() => onDelete(todo.id)}>Supprimer</button>
    </div>
  )
}

export default TodoItem
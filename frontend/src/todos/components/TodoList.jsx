import { useState, useEffect } from "react"
import { getTodos, createTodo, deleteTodo, updateTodo } from "../api/todos"
import TodoItem from "./TodoItem"
import TodoForm from "./TodoForm"

const TodoList = () => {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  const [erreur, setErreur] = useState(null)

  // Charger les tâches au montage
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const data = await getTodos()
        setTodos(data)
      } catch (err) {
        setErreur("Impossible de charger les tâches")
      } finally {
        setLoading(false)
      }
    }
    fetchTodos()
  }, [])

  // Ajouter une tâche
  const handleAdd = async (titre) => {
    try {
      const newTodo = await createTodo(titre)
      setTodos([newTodo, ...todos])
    } catch (err) {
      
      setErreur("Impossible d'ajouter la tâche")
    }
  }

  // Supprimer une tâche
  const handleDelete = async (id) => {
    try {
      await deleteTodo(id)
      setTodos(todos.filter(todo => todo.id !== id))
    } catch (err) {
      setErreur("Impossible de supprimer la tâche")
    }
  }

  // Marquer comme complétée
  const handleToggle = async (id, completed) => {
    try {
      const updated = await updateTodo(id, { completed })
      setTodos(todos.map(todo => todo.id === id ? updated : todo))
    } catch (err) {
      setErreur("Impossible de modifier la tâche")
    }
  }

  if (loading) return <p>Chargement...</p>
  if (erreur) return <p>{erreur}</p>

  return (
    <div>
      <h1>Mes Tâches</h1>
      <TodoForm onAdd={handleAdd} />
      {todos.length === 0
        ? <p>Aucune tâche pour l'instant !</p>
        : todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={handleDelete}
              onToggle={handleToggle}
            />
          ))
      }
    </div>
  )
}

export default TodoList
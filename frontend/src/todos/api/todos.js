// const BASE_URL = "http://localhost:8000/api"
const BASE_URL = "https://todo-django-react-production.up.railway.app/api"

// Récupérer toutes les tâches
export const getTodos = async () => {
  const response = await fetch(`${BASE_URL}/todos/`)
  return response.json()
}

// Créer une tâche
export const createTodo = async (titre) => {
  const response = await fetch(`${BASE_URL}/todos/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ titre, completed: false })
  })
  return response.json()
}

// Modifier une tâche
export const updateTodo = async (id, data) => {
  const response = await fetch(`${BASE_URL}/todos/${id}/`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
  return response.json()
}

// Supprimer une tâche
export const deleteTodo = async (id) => {
  await fetch(`${BASE_URL}/todos/${id}/`, {
    method: "DELETE"
  })
}
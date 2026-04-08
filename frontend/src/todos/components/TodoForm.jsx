import { useState } from "react"

const TodoForm = ({ onAdd }) => {
  const [titre, setTitre] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!titre.trim()) return  // ignorer si vide
    await onAdd(titre)
    setTitre("")  // vider le champ après ajout
  }

  return (
    <div>
      <input
        type="text"
        value={titre}
        onChange={(e) => setTitre(e.target.value)}
        placeholder="Nouvelle tâche..."
      />
      <button onClick={handleSubmit}>Ajouter</button>
    </div>
  )
}

export default TodoForm
import { useState } from "react"
import styles from "./DepenseItem.module.css"
import { Link } from "react-router-dom"

const CATEGORIES = ["alimentation", "transport", "logement", "loisirs", "autre"]

const DepenseItem = ({ depense, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [newDescription, setNewDescription] = useState(depense.description)
  const [newMontant, setNewMontant] = useState(depense.montant)
  const [newCategorie, setNewCategorie] = useState(depense.categorie)
  return (
    <div className={styles.container}>
      { isEditing ? (
        <>
        <input 
          className={styles.input}
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          placeholder="Description..."
        />
        <input
          className={styles.input}
          type="number"
          value={newMontant}
          onChange={(e) => setNewMontant(e.target.value)}
          placeholder="Montant..."
        />
        <select
          className={styles.select}
          value={newCategorie}
          onChange={(e) => setNewCategorie(e.target.value)}
        >
          {CATEGORIES.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <button className={styles.save} onClick={() => onUpdate(depense.id, 
          { description: newDescription, montant: newMontant, categorie: newCategorie 
          })}>Sauvegarder</button>
        {/* <Link to={`/depenses/${depense.id}`}>Voir détail</Link> */}
      </>
      ) : (
      <>
        <span className={styles.span}>{depense.description}</span>
        <span className={styles.span}>{depense.montant} FCFA</span>
        <span className={styles.span}>{depense.categorie}</span>
        <button className={styles.modifier} onClick={() => setIsEditing(true)}>Modifier</button>
        {/* <button onClick={() => onUpdate(depense.id)}>Modifier</button> */}
      </>
      )
    }
      <button onClick={() => onDelete(depense.id)} className={styles.supprimer}>Supprimer</button>
      <Link to={`/depenses/${depense.id}`}>Voir détail</Link>
    </div>
  )
}


export default DepenseItem
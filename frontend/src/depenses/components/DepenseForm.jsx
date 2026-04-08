import styles from "./DepenseForm.module.css"
import { useState } from "react";
const CATEGORIES = ["alimentation", "transport", "logement", "loisirs", "autre"]

const DepenseForm = ({ onAdd }) => {
  const [description, setDescription] = useState("")
  const [montant, setMontant] = useState("")
  const [categorie, setCategorie] = useState("alimentation") 

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!description.trim() || !montant) return
    await onAdd({ description, montant, categorie }) 
    setDescription("")
    setMontant("")
    setCategorie("alimentation")
  }

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description..."
      />
      <input
        className={styles.input}
        type="number"
        value={montant}
        onChange={(e) => setMontant(e.target.value)}
        placeholder="Montant..."
      />
      <select
        className={styles.select}
        value={categorie}
        onChange={(e) => setCategorie(e.target.value)}
      >
        {CATEGORIES.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <button className={styles.add} onClick={handleSubmit}>Ajouter</button>
    </div>
  )
}





// const DepenseForm = ({ onAdd }) => {
//   const [user, setUser] = useState("")
//   const [description, setDescription] = useState("")
//   const [montant, setMontant] = useState("")
//   const [categories, setCategorie] = useState([])

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     if (!user.trim()) return
//     if (!description.trim()) return
//     if (!montant.trim()) return
//     if (!categories.trim()) return
//     await onAdd(user, montant, description, categories)
//     setUser("")
//     setDescription("")
//     setMontant("")
//     setCategorie("")
//     // await onAdd(montant)
//     // await onAdd(categorie)
// }

//     return (
//         <div>
//             <input
//                 type="text"
//                 value={user}
//                 onChange={(e) => setUser(e.target.value)}
//                 placeholder="Ajouter une description..."
//             />
//             <input
//                 type="text"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 placeholder="Ajouter une description..."
//             />
//             <input
//                 type="number"
//                 value={montant}
//                 onChange={(e) => setMontant(e.target.value)}
//                 placeholder="Montant a depenser"
//             />
//             <select name="categorie" id="cat">
//                 {categories.map(categorie => (
//                     <option key={categorie} value="{categorie}">{categorie}</option>
//                 ))}
//             </select>
//             <button onClick={handleSubmit}>Ajouter</button>
//         </div>
//     ) 
// }

export default DepenseForm
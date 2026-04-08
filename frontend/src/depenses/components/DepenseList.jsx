import styles from "./DepenseList.module.css"

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { getDepense, createDepense, updateDepense, deleteDepense } from "../api/depenses";
import DepenseItem from "./DepenseItem";
import DepenseForm from "./DepenseForm";
import DepenseTotal from "./DepenseTotal";
// import { data } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const CATEGORIES = ["alimentation", "transport", "logement", "loisirs", "autre"]

const DepenseList = () => {
  const { token } = useAuth()
  const [filtreCategorie, setFiltreCategorie] = useState("tout")
  // const [depenses, setDepenses] = useState([])
  // const [loading, setLoading] = useState(true)
  // const [erreur, setErreur] = useState(null)

  // useEffect(() => {
  //   const fetchDepenses = async () => {
  //     try {
  //       const data = await getDepense()
  //       setDepenses(data)
  //     } catch (err) {
    //       setErreur("Impossible de charger les depenses")
    //     } finally {
      //       setLoading(false)
      //     }
      //   }
      //   fetchDepenses()
      // }, [])
      
  const { data:depenses = [], isLoading, isError } = useQuery({
    queryKey: ['depenses'],
    queryFn: () => getDepense(token)
  })
      
      
      // Ajouter une depense
  const queryClient = useQueryClient()

  const addMutation = useMutation({
    mutationFn: (depenseData) => createDepense(depenseData, token),
    onSuccess: () => queryClient.invalidateQueries(['depenses'])
  })

    // const handleAdd = async (user, montant, description, categorie) => {
      //   try {
  //     const newDepense = await createDepense(user, montant, description, categorie)
  //     setDepenses([newDepense, ...depenses])
  //   } catch (err) {
      
  //     setErreur("Impossible d'ajouter la depense")
  //   }
  // }
  
  // Supprimer une depense
  const deleteMutation = useMutation({
    mutationFn: (id) => deleteDepense(id, token),
    onSuccess: () => queryClient.invalidateQueries(['depenses'])
  })
  
  
  // const handleDelete = async (id) => {
    //   try {
      //     await deleteDepense(id)
      //     setDepenses(depenses.filter(depense => depense.id !== id))
      //   } catch (err) {
        //     setErreur("Impossible de supprimer la depense")
        //   }
        // }
        
  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => updateDepense(id, data, token),
    onSuccess: () => queryClient.invalidateQueries(['depenses'])
  })
        
        //   const handleUpdate = async (id, data) => {
          //   try {
            //     const updated = await updateDepense(id, data) // envoie { description, montant, categorie }
            //     setDepenses(depenses.map(depense => depense.id === id ? updated : depense))
            //   } catch (err) {
              //     setErreur("Impossible de modifier la depense")
              //   }
              // }
  const handleAdd = (depenseData) => addMutation.mutate(depenseData)
  const handleDelete = (id) => deleteMutation.mutate(id)
  const handleUpdate = (id, data) => updateMutation.mutate({id, data})

  if (isLoading) return <p>Chargement...</p>
  if (isError) return <p>Erreur de Chargement</p>

  const depensesFiltrees = filtreCategorie === "tout"
  ? depenses
  : depenses.filter(depense => depense.categorie === filtreCategorie)

  return (
    <div className={styles.container}>
      <h1 className={styles.titre}>Mes Dépenses</h1>
      <DepenseTotal depenses={depenses} />
      <DepenseForm onAdd={handleAdd} />
      <select
        className={styles.filtre}
        value={filtreCategorie}
        onChange={(e) => setFiltreCategorie(e.target.value)}
      >
      <option className={styles.filtre} value="tout">Toutes les catégories</option>
      {CATEGORIES.map(cat => (
        <option key={cat} value={cat}>{cat}</option>
      ))}
      </select>
      {depenses.length === 0
        ? <p className={styles.vide}>Aucune depense pour l'instant !</p>
        : depensesFiltrees.map(depense => (
            <DepenseItem
              key={depense.id}
              depense={depense}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
            />
          ))
      }
    </div>
  )
}

export default DepenseList
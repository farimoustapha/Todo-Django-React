import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useAuth } from "../../context/AuthContext" // ✅ importe useAuth

// const BASE_URL = "http://localhost:8000/api"
const BASE_URL = "https://todo-django-react-production.up.railway.app/api"

const DepenseDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { token } = useAuth() // ✅ récupère le token
  const [depense, setDepense] = useState(null)
  const [loading, setLoading] = useState(true)
  const [erreur, setErreur] = useState(null)

  useEffect(() => {
    const fetchDepense = async () => {
      try {
        const response = await fetch(`${BASE_URL}/depenses/${id}/`, {
          headers: {
            "Authorization": `Bearer ${token}` // ✅ envoie le token
          }
        })
        const data = await response.json()
        setDepense(data)
      } catch (err) {
        setErreur("Impossible de charger les détails")
      } finally {
        setLoading(false)
      }
    }
    fetchDepense()
  }, [id, token]) // ✅ token dans les dépendances

  if (loading) return <p>Chargement...</p>
  if (erreur) return <p>{erreur}</p>

  return (
    <div>
      <h1>Détail de la dépense</h1>
      <p>Description : {depense.description}</p>
      <p>Montant : {depense.montant} FCFA</p>
      <p>Catégorie : {depense.categorie}</p>
      <p>Date : {depense.date}</p>
      <button onClick={() => navigate(-1)}>← Retour</button>
    </div>
  )
}

export default DepenseDetail






















// import { useParams, useNavigate } from "react-router-dom"
// import { use, useEffect, useState } from "react"
// import { useAuth } from "../../context/AuthContext"
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
// import { getDepenseById } from "../api/depenses"

// const BASE_URL = "http://localhost:8000/api"

// const DepenseDetail = () => {
//   const queryClient = useQueryClient()
//   const { token } = useAuth()
//   const { id } = useParams()
//   const navigate = useNavigate()
//   // const [depense, setDepense] = useState(null) // ✅ null pas [] — c'est un objet unique
//   // const [loading, setLoading] = useState(true)
//   // const [erreur, setErreur] = useState(null)

//   const { data: depenses, isLoading, isError } = useQuery({
//     queryKey: ['depenses', id],
//     queryFn: () => getDepenseById(id, token)
//   })
// ✨ BAGELS HEALTHY EXPRESS ULTRA MOELLEUX ✨ ⏱️ Temps de préparation : 10 min 🥘 Temps de cuisson : 13 à 15 min ⏳ Temps total : 25 min 📝 Ingrédients (pour 4 bagels) : ▪️ 250 g de farine T80 ▪️ 265 g de skyr nature ▪️ 11 g de levure chimique ▪️ 4 g de sel ▪️ 10 g d’huile d’olive ▪️ 1 c. à café de miel ▪️ Pour la dorure : 1 jaune d’œuf + 1 c. à café d’eau ▪️ Topping : sésame & pavot 👩🏽‍🍳 Préparation : 1️⃣ Dans un saladier, mélangez la farine, la levure chimique et le sel. Ajoutez le skyr, l’huile d’olive et le miel. Mélangez à la cuillère puis pétrissez à la main pendant 2 à 3 minutes jusqu’à obtenir une pâte souple et homogène. (Si elle colle trop, ajoutez au maximum 10 g de farine.) 2️⃣ Divisez la pâte en 4 parts égales. Formez des boules bien lisses. Percez le centre de chaque boule avec un doigt fariné 3️⃣ Déposez les bagels sur du papier cuisson. Badigeonnez avec le mélange jaune d’œuf/eau et parsemez de graines. 4️⃣Cuisson : 🔥au four : Préchauffez à 190°C chaleur tournante. Enfournez à mi-hauteur pendant 18 à 20 minutes. 🔥à l’Air Fryer : cuire à 165°C pendant 10 à 11 minutes, puis retournez-les et poursuivez 2 à 3 minutes à 180°C pour bien dorer le dessous sans brûler le dessus. 5️⃣ Laissez impérativement tiédir sur une grille pendant au moins 15 minutes afin que la mie se structure et évitez un effet humide à la découpe.

// amandinepoggioli_ytb
// · 14h ago
// ✨ BAGELS HEALTHY EXPRESS ULTRA MOELLEUX ✨⏱️ Temps de préparation : 10 min🥘 Temps de cuisson : 13 à 15 min⏳ Temps total : 25 min📝 Ingrédients (pour 4 bagels) :▪️ 250 g de farine T80▪️ 265 g de skyr nature▪️ 11 g de levure chimique▪️ 4 g de sel▪️ 10 g d’huile d’olive▪️ 1 c. à café de miel▪️ Pour la dorure : 1 jaune d’œuf + 1 c. à café d’eau▪️ Topping : sésame & pavot👩🏽‍🍳 Préparation :1️⃣ Dans un saladier, mélangez la farine, la levure chimique et le sel. Ajoutez le skyr, l’huile d’olive et le miel. Mélangez à la cuillère puis pétrissez à la main pendant 2 à 3 minutes jusqu’à obtenir une pâte souple et homogène. (Si elle colle trop, ajoutez au maximum 10 g de farine.)2️⃣ Divisez la pâte en 4 parts égales. Formez des boules bien lisses. Percez le centre de chaque boule avec un doigt fariné3️⃣ Déposez les bagels sur du papier cuisson. Badigeonnez avec le mélange jaune d’œuf/eau et parsemez de graines.4️⃣Cuisson :🔥au four : Préchauffez à 190°C chaleur tournante. Enfournez à mi-hauteur pendant 18 à 20 minutes.🔥à l’Air Fryer : cuire à 165°C pendant 10 à 11 minutes, puis retournez-les et poursuivez 2 à 3 minutes à 180°C pour bien dorer le dessous sans brûler le dessus.5️⃣ Laissez impérativement tiédir sur une grille pendant au moins 15 minutes afin que la mie se structure et évitez un effet humide à la découpe.
// more

// See translation

// 00:00 / 01:00

//   const detailMutation = useMutation({
//     mutationFn: (id) => getDepenseById(id, token),
//     onSuccess: () => queryClient.invalidateQueries(['depenses'])
//   })

//   const handleDetail = (depenses) => detailMutation.mutate(depenses)

//   // useEffect(() => {
//   //   const fetchDepense = async () => {
//   //     try {
//   //       const response = await fetch(`${BASE_URL}/depenses/${id}/`)
//   //       const data = await response.json() // ✅ .json() manquait !
//   //       setDepense(data)
//   //     } catch (err) {
//   //       setErreur("Impossible de charger les détails")
//   //     } finally {
//   //       setLoading(false)
//   //     }
//   //   }
//   //   fetchDepense()
//   // }, [id]) // ✅ id dans les dépendances

//   if (isLoading) return <p>Chargement...</p>
//   if (isError) return <p>Erreur de Chargement</p>

//   return (
//     <div>
//       <h1>Détail de la dépense</h1>
//       <p>Description : {depense.description}</p>
//       <p>Montant : {depense.montant} FCFA</p>
//       <p>Catégorie : {depense.categorie}</p>
//       <p>Date : {depense.date}</p>
//       <button onClick={() => navigate(-1)}>← Retour</button>
//     </div>
//   )
// }

// export default DepenseDetail

// import { getDepense } from "../api/depenses"


const DepenseTotal = ({ depenses }) => {
  const total = depenses.reduce((acc, depense) => acc + parseFloat(depense.montant), 0)
  return (
    <div>
      <h3>Total : {total.toFixed(2)} FCFA</h3>
    </div>
  )
}

// const depenses = [...getDepense]

// const CalculTotal = () => {
//     return (
//         <div>
//             {depenses.reduce((acc, depense) => acc + depense?.montant, 0)}
//         </div>
//     )
// }


export default DepenseTotal
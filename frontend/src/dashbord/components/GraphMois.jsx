
import { LineChart, Line, XAxis, YAxis, Legend, Tooltip, CartesianGrid } from "recharts";

const GraphMois = ({ parMois }) => {
    if (!parMois) return null; // Si les données ne sont pas encore chargées, ne rien afficher

    // Transforme les données pour les adapter au format requis par Recharts
    const donnees = parMois.map(item => ({ 
        name: new Date(item.mois).toLocaleString('fr-FR', { 
            month: 'long', 
            year: 'numeric' 
        }), // Convertit le numéro du mois en nom de mois
        total: item.total 
    }));

  return (
    <LineChart width={600} height={300} data={donnees}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="total" stroke="#0088FE" />
    </LineChart>
  )
}

export default GraphMois;
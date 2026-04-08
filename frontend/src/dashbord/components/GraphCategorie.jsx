import  { PieChart, Cell, Legend, Tooltip, Pie } from "recharts";

const COULEURS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AA336A"];
// const COULEURS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"]

const GraphCategorie = ({ parCategorie }) => {
    if (!parCategorie) return null; // Si les données ne sont pas encore chargées, ne rien afficher

    // const donnees = parCategorie.map(([name, value]) => ({ name, value }));
    const donnees = parCategorie.map(item => ({ 
        name: item.categorie, 
        value: item.total 
    }));
  return (
    <PieChart width={400} height={400}>
        {/* Tooltips et légendes pour afficher les détails de chaque catégorie
        Tooltip affiche les détails au survol, Legend affiche une légende pour chaque catégorie*/}
        <Pie
            data={donnees}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={150}
        >
            {donnees.map((entry, index) => (
            <Cell key={index} fill={COULEURS[index % COULEURS.length]} />
            ))}
        </Pie>
        <Tooltip />
        <Legend />
    </PieChart>
  );
};

export default GraphCategorie;
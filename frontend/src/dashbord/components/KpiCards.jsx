
const KpiCards = ({ kpis }) => {
    if (!kpis) return <p>Aucune donnée disponible</p>
    return (
      <div>
        <div>
            <p>Total: {kpis.total?.toFixed(2)} FCFA</p>
        </div>
        <div>
            <p>Moyenne</p>
            <p>{kpis.moyenne?.toFixed(2)} FCFA</p>
        </div>
        <div>
            <p>Max</p>
            <p>{kpis.max?.toFixed(2)} FCFA</p>
        </div>
        <div>
            <p>Min</p>
            <p>{kpis.min?.toFixed(2)} FCFA</p>
        </div>
        <div>
            <p>Nombre de dépenses</p>
            <p>{kpis.count}</p>
        </div>
      </div>
    )
}

export default KpiCards;
// return kpis.map(kpi => (
//     <div key={kpi.id}>
//         <p>Total: {kpi.total.toFixed(2)}</p>
//         <p>Moyenne: {kpi.moyenne.toFixed(2)}</p>
//         <p>Max: {kpi.max.toFixed(2)}</p>
//         <p>Min: {kpi.min.toFixed}</p>
//         <p>Count: {kpi.count}</p>

//     </div>
// ))
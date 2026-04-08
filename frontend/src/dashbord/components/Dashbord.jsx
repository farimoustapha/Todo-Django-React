
import { getDepense } from "../../depenses/api/depenses";
import { useQuery } from "@tanstack/react-query";
import { getStats } from "../api/stats";
import ExportButtons from "./ExportButtons";
import KpiCards from "./KpiCards";
import GraphMois from "./GraphMois";
import GraphCategorie from "./GraphCategorie";
import { useAuth } from "../../context/AuthContext";

const Dashbord = () => {
    const { token } = useAuth()

    const { data: stats, isLoading, isError } = useQuery({
        queryKey: ['stats'],
        queryFn: () => getStats(token)
    })

    const { data: depenses = [] } = useQuery({
        queryKey: ['depenses'],
        queryFn: () => getDepense(token)
    })


    if (isLoading) return <p>Chargement...</p>
    if (isError) return <p>Erreur lors du chargement des statistiques</p>

    return (
        <div>
            <h1>Tableau de bord</h1>
            <ExportButtons depenses={depenses}/>
            <KpiCards kpis={stats.kpis} />
            <GraphMois parMois={stats.par_mois} />
            <GraphCategorie parCategorie={stats.par_categorie} />
        </div>
    )

}

export default Dashbord;
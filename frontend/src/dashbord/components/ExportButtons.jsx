import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const ExportButtons = ({ depenses }) =>{

    const exportCSV = () => {
        const headers = ['Date', 'Montant', 'Catégorie', 'Description'];

        const rows = depenses.map(depense => [
            depense.date_depense,
            depense.montant,
            depense.categorie,
            depense.description
        ].join(","));

        const csv = [headers.join(","), ...rows].join("\n");


        // 4. Crée un lien de téléchargement
        const blob = new Blob([csv], { type: "text/csv" })
        const url = URL.createObjectURL(blob)
        const link = document.createElement("a")
        link.href = url
        link.download = "depenses.csv"
        link.click()
    }

    const exportPDF = () => {
        // 1. Crée un nouveau document PDF
        const doc = new jsPDF()

        // 2. Ajoute un titre
        doc.text("Rapport des dépenses", 14, 10)

        // 3. Crée le tableau — à toi de compléter !
        autoTable(doc, {
            head: [["Date", "Description", "Catégorie", "Montant"]],
            body: depenses.map(d => [
                d.date_depense,
                d.description,
                d.categorie,
                d.montant
            ])
        })

        // 4. Télécharge le PDF
        doc.save("depenses.pdf")
       
    }
    return (
        <div>
        <button onClick={exportCSV}>Exporter CSV</button>
        <button onClick={() => exportPDF()}>Exporter PDF</button>
        </div>
    )

        // const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        // const url = URL.createObjectURL(blob);
        // const link = document.createElement("a");
        // link.setAttribute("href", url);
        // link.setAttribute("download", "depenses.csv");
        // document.body.appendChild(link);
        // link.click();
        // document.body.removeChild(link);

        // let csvContent = "data:text/csv;charset=utf-8," 
        //     + headers.join(",") + "\n" 
        //     + rows.map(e => e.join(",")).join("\n");

        // const encodedUri = encodeURI(csvContent);
        // const link = document.createElement("a");
        // link.setAttribute("href", encodedUri);
        // link.setAttribute("download", "depenses.csv");
        // document.body.appendChild(link);
        // link.click();   
        // document.body.removeChild(link);


    
}

export default ExportButtons;
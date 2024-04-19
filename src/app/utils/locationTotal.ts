const moment = require('moment');

export default function calculerTotal(dateDebut: string, dateFin: string, tarifJournalier: number ,nombre:number): number {
    const debut = moment(dateDebut);
    const fin = moment(dateFin);

    const differenceEnJours = fin.diff(debut, 'days');
    console.log("nbr jours",differenceEnJours)
    const total = differenceEnJours * tarifJournalier*nombre;
    console.log("prix",total)
    return total;
}


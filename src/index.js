
const elevesArray = [
    {
        name: 'Jonh',
        id: 1,
        hasSold: true
    },{
        name: 'Jack',
        id: 2,
        hasSold: false
    },{
        name: 'Gill',
        id: 3,
        hasSold: true
    },{
        name: 'Tom',
        id: 4,
        hasSold: true
    }
];

const PRIME_SUR_ENGAGEMENT = 2.5 / 100;
const MIN_ENGAGEMENT = 70 / 100;


const getCommissionSurVente = (ca) => {
    if(ca < 999) return 0;
    if(ca < 1999) return 15 / 100;
    if(ca >= 2000) return 20 / 100
}

const getEngagement = (eleves) => {
    const elevesVendeurs = eleves.filter(eleve => eleve.hasSold === true);
    return elevesVendeurs.length / eleves.length
}

const getCommission = (ca, eleves) => {
    let percentCommission = getCommissionSurVente(ca);
    const engagement = getEngagement(eleves)
    if(engagement >= MIN_ENGAGEMENT) percentCommission = percentCommission + PRIME_SUR_ENGAGEMENT;
    return {
        taux: percentCommission * 100,
        com: ca + ca * percentCommission
    }
}

console.log('final', getCommission(2000, elevesArray))


module.exports = {
    getCommissionSurVente
}
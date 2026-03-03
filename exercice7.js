let nomProduit = "Clavier mécanique"
let prix = 89.99
let quantite = 3
let codePromo = null
let reductionPourcentage = 10
let estMembre = true
let soldeCompte = 250

// let sousTotal = prix * quantite;
// console.log(`Sous-total : ${sousTotal}`);

// let montantReduction = 0;
// if (codePromo !== null && estMembre) {
//     montantReduction = sousTotal * reductionPourcentage;
//     console.log(`Montant de reduction : ${montantReduction}`);
// }

// let totalFinal = sousTotal - montantReduction;

// let statut = (soldeCompte - totalFinal >= 0) ? "Paiement accepté" : "Solde insuffisant";
// console.log(`Status : ${statut}`);

// if (statut === "Paiement accepté") {
//     console.log(`Solde : ${soldeCompte - totalFinal} MAD`);
// }



// the other way to represent the output
let sousTotal = prix * quantite;

let montantReduction = 0;
if (codePromo !== null && estMembre) {
    montantReduction = sousTotal * reductionPourcentage;
}

let totalFinal = sousTotal - montantReduction;

let statut = (soldeCompte - totalFinal >= 0) ? "Paiement accepté" : "Solde insuffisant";

if (statut === "Paiement accepté") {
    soldeCompte -= totalFinal;
}

console.log("===== RÉCAPITULATIF =====");
console.log(`Produit   : ${nomProduit}`);
console.log(`Quantité  : ${quantite}`);
console.log(`Prix unit : ${prix} MAD`);
console.log(`Sous-total: ${sousTotal} MAD`);
console.log(`Réduction : ${montantReduction} MAD`);
console.log(`Total     : ${totalFinal} MAD`);
console.log(`Statut    : ${statut}`);
console.log(`Solde     : ${soldeCompte} MAD`);
console.log("=========================");
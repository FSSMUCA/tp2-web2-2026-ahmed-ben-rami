let nom = "   Fatima   "
let age = "23"
let email = "fatima@example"
let scoreJeu = "150pts"
let estAdmin = "false"
let derniereConnexion = null
let nombreConnexions = "0"

let nomCourrige = nom.trim();
nom = nomCourrige || "Inconnu";
let nomValidite = (nom === nomCourrige) ? "corrigé : espaces supprimés" : "erreur";

age = parseInt(age);
let ageValidite = (Number.isNaN(age) || age <= 0) ? "invalide" : "valide";

let emailValidite = "valid";
if (email.indexOf("@") === -1)
    emailValidite = "invalide : @ n'existe pas";

else if (email.indexOf(".") === -1)
    emailValidite = "invalide : . n'existe pas";

else if (email.indexOf(".") <= email.indexOf("@"))
    emailValidite = "invalide : pas de point après @";


let scoreJeuValeur = parseInt(scoreJeu) || 0;

estAdmin = (estAdmin === "false") ? false : true;

derniereConnexion = derniereConnexion ?? "Jamais connecté";

let nombreConnexionsCorrige = parseInt(nombreConnexions);
nombreConnexions = (nombreConnexionsCorrige > 0) ? nombreConnexionsCorrige : "Aucune connexion";

console.log("===== RAPPORT UTILISATEUR =====");
console.log(`nom              : "${nom}" (${nomValidite})`);
console.log(`age              : ${age} (${ageValidite})`);
console.log(`email            : "${email}" (${emailValidite})`);
console.log(`scoreJeu         : ${scoreJeuValeur} (extrait depuis ${JSON.stringify(scoreJeu)})`);
console.log(`estAdmin         : ${estAdmin} (attention : Boolean("false") = true, conversion manuelle requise)`);
console.log(`derniereConnexion: "${derniereConnexion}" (valeur par défaut via ??)`);
console.log(`nombreConnexions : "${nombreConnexions}" (0 après conversion)`);
console.log("================================");
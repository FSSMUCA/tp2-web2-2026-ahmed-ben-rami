let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;

// partie A
console.log(`nom ?? "valeur par défaut"    -> ${nom ?? "valeur par défaut"}`);
console.log(`age ?? "valeur par défaut"    -> ${age ?? "valeur par défaut"}`);
console.log(`ville ?? "valeur par défaut"    -> ${ville ?? "valeur par défaut"}`);
console.log(`score ?? "valeur par défaut"    -> ${score ?? "valeur par défaut"}`);
console.log(`actif ?? "valeur par défaut"    -> ${actif ?? "valeur par défaut"}`);

// partie B
console.log(`nom || "valeur par défaut"    -> ${nom || "valeur par défaut"}`);
console.log(`age || "valeur par défaut"    -> ${age || "valeur par défaut"}`);
console.log(`ville || "valeur par défaut"    -> ${ville || "valeur par défaut"}`);
console.log(`score || "valeur par défaut"    -> ${score || "valeur par défaut"}`);
console.log(`actif || "valeur par défaut"    -> ${actif || "valeur par défaut"}`);

// partie C
let result; //just to store the comparaison of ?? and ||

result = (nom ?? "valeur par défaut") === (nom || "valeur par défaut");
console.log(`nom   : ?? et || -> ${result ? "même résultat" : "résultat différent"}`);

result = (age ?? "valeur par défaut") === (age || "valeur par défaut");
console.log(`age   : ?? et || -> ${result ? "même résultat" : "résultat différent"}`);

result = (ville ?? "valeur par défaut") === (ville || "valeur par défaut");
console.log(`ville   : ?? et || -> ${result ? "même résultat" : "résultat différent"}`);

result = (score ?? "valeur par défaut") === (score || "valeur par défaut");
console.log(`score   : ?? et || -> ${result ? "même résultat" : "résultat différent"}`);

result = (actif ?? "valeur par défaut") === (actif || "valeur par défaut");
console.log(`actif   : ?? et || -> ${result ? "même résultat" : "résultat différent"}`);

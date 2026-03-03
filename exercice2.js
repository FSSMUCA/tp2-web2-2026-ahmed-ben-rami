let valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}];

for (let i = 0; i < valeurs.length; i++) {
    let value;

    if (valeurs[i] === "") {
        value = "(chaine vide)";
    } else {
        value = String(valeurs[i]);
    }
    let isTruthy = (valeurs[i]) ? "truthy" : "falsy";
    console.log(`${value} -> ${isTruthy}`);
}
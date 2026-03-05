let nombres = [0, NaN, Infinity, -Infinity, 42, 3.14, Number.MAX_SAFE_INTEGER + 1, -0];

for (let i = 0; i < nombres.length; i++) {
    let type;
    if (Number.isNaN(nombres[i])) {
        type = "INVALIDE";
    }
    else if (Math.abs(nombres[i]) === Infinity) {
        type = "INFINI";
    }
    else if ((1 / nombres[i]) === -Infinity) {
        type = "ZERO NEGATIF";
    }
    else if (Number.isInteger(nombres[i])) {
        if (nombres[i] <= Number.MAX_SAFE_INTEGER)
            type = "ENTIER SUR";
        else
            type = "ENTIER HORS LIMITES";
    }
    else {
        type = "DECIMAL";
    }
    console.log(`${String(nombres[i])} -> ${type}`);
}
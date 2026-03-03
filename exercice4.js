let tab = [
    [0, ""],
    [0, "0"],
    [0, false],
    ["", false],
    [null, undefined],
    [null, false],
    [NaN, NaN],
    [1, "1"],
    [" \t\n ", 0]
]

let counter = 0; // to count when == and === has different results

for (let i = 0; i < tab.length; i++) {
    let pair = tab[i];
    let value1 = JSON.stringify(pair[0]);
    let value2 = JSON.stringify(pair[1]);
    console.log(`${value1} == ${value2}         -> ${pair[0] == pair[1]}    |   ${value1} === ${value2}         -> ${pair[0] === pair[1]}`);

    if (pair[0] == pair[1] && pair[0] !== pair[1]) {
        counter++;
    }
}

console.log("---");
console.log(`${counter} paire(s) où == et === donnent des résultats différents`);
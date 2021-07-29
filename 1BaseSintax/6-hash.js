'use strict';

const table = cars => {
    console.log(`Great car ${cars.model}!`);
};

const carName = {
    bmw: {model: "BMW" },
    volvo: {model: "Volvo"},
    range: {model: "Range"},
};

for (const x in carName) {
    const z = carName[x]
    table(z);
}
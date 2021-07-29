'use strict';

const welcome = person => {
    console.log(`Ave, ${person}`);
};

const persons = {
    mao: {name: "Mao"},
    qwe: {name: 'qwe'},
    asd: {name: 'asdfasldfkj'},
};

for (const name in persons) {
    welcome(name);
}
'use strict';

// Contants

const SALUTATION = 'Ave'; // Приветствие

// Объявляем цвета

const COLORS = [ 
  /* 1 */'black',
  /* 2 */'red',
  /* 3 */'green',
  /* 4 */'yellow',
  /* 5 */'blue',
  /* 6 */'magenta',
  /* 7 */'cyan',
  /* 8 */'white',
];

// Functions

const colorer = (s, color) => `\x1b[3${color}m${s}\x1b[0m`; // сложная функция

const colorize = z => {
  // Переменная, куда записывается результат
  let res = ''; 
  const letters = z.split('');
  let color = 1;
  // Пробегаемся по цветам и сплитим
  for (const x of letters) {
    res += colorer(x, color++);
    if (color > COLORS.length) 
      color = 1;
  }
  return res;
};

const greetings = name => (
  name.includes('Augustus') ? 
  `${SALUTATION}, ${colorize(name)}!`:
  `Hello, ${name}!`
); 

// Usage

const fullName = 'Marcus Aurelius Antonius Augustus';
console.log(greetings(fullName));

const myName = 'Great Badrik Augustus';
console.log(greetings(myName));
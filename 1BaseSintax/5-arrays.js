 'use strict';

 const greatest = persons => {
     console.log(`Ave ${persons.name}`);
 };

 const arrayPersons = [
     {name: 'Marcus'},
     {name: 'Mao'},
     {name: 'Rene'},
 ];

 for(const i of arrayPersons) {
     greatest(i);
 }
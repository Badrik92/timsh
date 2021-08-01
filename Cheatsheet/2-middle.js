'use strict';

// Сумматор
const adder = (initial = 0) => ({
  // initial = 0 Если никто не передал никакого значения
  // то по умолчанию будет браться 0
  value: initial, // поле : значение
  steps: [initial],
  // объявляем функцию
  add(value) {
    this.steps.push(value);
    this.value += value;
    return this;
  }
});

const Adder = class {
  constructor(initial = 0) {
    this.steps = [initial];
    this.value = initial;
  }
  add(value) {
    this.steps.push(value);
    this.value += value;
    return this;
  }
}
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercício 1
function imprimir() {
  for (let index in numbers) {
    console.log(numbers[index]);
  }
}

// Exercício 2
function sumArray() {
  let sum = 0;
  for (let index in numbers) {
    sum += numbers[index];
  }
  return sum;
}

// Exercício 3
function avarage() {
  let sum = 0;
  let length = 0;
  for (let index in numbers) {
    sum += numbers[index];
    length += 1;
  }
  return sum / length;
}

// Exercício 4
const higherThan20 = () => avarage() > 20 ? 'Valor maior que 20' : 'Valor menor que 20';

// Exercício 5
function greater() {
  let max = 0;
  for (let index in numbers) {
    if (numbers[index] > max) {
      max = numbers[index];
    }
  }
  return max;
}

// Exercício 6
function howManyOdds() {
  let odds = [];
  for (let index in numbers) {
    if (numbers[index] % 2 !== 0) {
      odds.push(numbers[index]);
    }
  }
  return odds;
}

// Exercício 7
function lower() {
  let min = numbers[0];
  for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] < min) {
      min = numbers[index];
    }
  }
  return min;
}

// Exercício 8
function go1To25() {
  let array = [];
  for (let index = 1; index <= 25; index += 1) {
    array.push(index);
  }
  return array;
}

// Exercício 9
function divisionBy2() {
  let divided = [];
  for (let index in go1To25()) {
    divided.push(go1To25()[index] / 2);
  }
  return divided;
}

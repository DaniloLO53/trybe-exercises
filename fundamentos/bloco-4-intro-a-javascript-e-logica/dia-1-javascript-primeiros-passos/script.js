// Exercício 1
const sum = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const mult = (num1, num2) => num1 * num2;
const div = (num1, num2) => num1 / num2;
const mod = (num1, num2) => num1 % num2;

// Exercício 2
const max2 = (num1, num2) => [num1, num2].sort()[1];

// Exercício 3
const max3 = (num1, num2, num3) => [num1, num2, num3].sort()[2];

// Exercício 4
const signal = (num) => {
  if (num > 0) {
    return 'Positive';
  }
  else if (num < 0) {
    return 'Negative';
  }
  else {
    return 'Zero';
  }
}

// Exercício 5
const isTriangle = (angle1, angle2, angle3) => {
  try {
    if (angle1 <= 0 || angle2 <= 0 || angle3 <= 0) {
      throw new Error('Angulo inválido'); 
    }
    return (angle1 + angle2 + angle3 === 180);
  } catch (error) {
    return error.message;
  }
}

// Exercício 6
const chess = {
  bispo: 'Movimnto A',
  rainha: 'Movimnto B',
  rei: 'Movimnto C',
  torre: 'Movimnto D',
  cavalo: 'Movimnto E',
  peao: 'Movimnto F',
}

const chessMoviment = (piece) => {
  const moviment = chess[piece];
  try {
    if (moviment === undefined) {
      throw new Error('Peça inválida');
    }
    return moviment;
  } catch (error) {
    console.log(error.message);
  }
}

// Exercício 7
const convert = {
  A: [90, 100],
  B: [80, 90],
  C: [70, 80],
  D: [60, 70],
  E: [50, 60],
  F: [0, 50],
}

const convertNote = (note) => {
  try {
    if (note < 0 || note > 100) {
      throw new Error('Nota inválida');
    }
    const arraysOfNotes = Object.values(convert);
    const myArray = arraysOfNotes.filter((array) => note - array[0] >= 0 && note - array[1] <= 0)[0];
    return Object.keys(convert).find((key) => convert[key] === myArray);
  } catch (error) {
    console.log(error)
  }
}

// Exercício 8
const isEven = (...nums) => nums.some((num) => num % 2 === 0);

// Exercício 9
const isOdd = (...nums) => nums.some((num) => num % 2 !== 0);

// Exercício 10
const profit = (cost, sell) => {
  try {
    if (cost < 0 || sell < 0) {
      throw new Error('Valor inválido');
    }
    const totalCost = cost * 1.2;
    return sell - totalCost;
  } catch (error) {
    return error.message;
  }
}

// Exercício 11
const inss = {
  8: [0, 1556.94, 0],
  9: [1556.94, 2594.92, 0],
  11: [2594.93, 5189.82, 0],
  0: [5189.82, +Infinity, 570.88],
}

const IR = {
  0: [0, 1903.98, 0],
  7.5: [1903.99, 2826.65, 142.80],
  15: [2826.66, 3751.05, 354.80],
  22.5: [3751.06, 4664.68, 636.13],
  27.5: [4664.69, +Infinity, 869.36],
}

const myMoney = (bruto) => {
  const arraysOfINSS = Object.values(inss);
  const myArray = arraysOfINSS.filter((array) => bruto - array[0] >= 0 && bruto - array[1] <= 0)[0];
  const inssTax = Object.keys(inss).find((key) => inss[key] === myArray);
  const inssTaxFixed = myArray[2];
  const brutoINSS = bruto - (bruto * inssTax / 100) - inssTaxFixed;
  const arraysOfIR = Object.values(IR);
  const myArray2 = arraysOfIR.filter((array) => brutoINSS - array[0] >= 0 && brutoINSS - array[1] <= 0)[0];
  const irTax = Object.keys(IR).find((key) => IR[key] === myArray2);
  const irTaxFixed = myArray2[2];
  const brutoIR = brutoINSS - (brutoINSS * irTax / 100) + irTaxFixed;
  return brutoIR;
}

// Exercício 12
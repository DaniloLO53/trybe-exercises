// Exercícios 1
function factorial10() {
  let currentProd = 1;
  for (let index = 2; index <= 10; index += 1) {
    currentProd *= index;
  }
  return currentProd;
}

// Exercícios 2
function invert(string) {
  let inverted = '';
  for (let index = string.length - 1; index >= 0; index -= 1) {
    inverted += string[index];
  }
  return inverted;
}

// Exercícios 3
let array = ['java', 'javascript', 'python', 'html', 'css'];

function menor() {
  let currentMenor = array[0];
  for (let index = 1; index < array.length; index += 1) {
    if (array[index].length < currentMenor.length) {
      currentMenor = array[index];
    }
  }
  return currentMenor;
}

function maior() {
  let currentMaior = array[0];
  for (let index = 1; index < array.length; index += 1) {
    if (array[index].length > currentMaior.length) {
      currentMaior = array[index];
    }
  }
  return currentMaior;
}

// Exercícios 4
function maiorPrimo() {
  let higher = 1;
  for (let index = 0; index < 50; index += 1) {
    let divs = 0;
    for (let div = 1; div <= index; div +=1) {
      if (index % div === 0) {
        divs += 1;
      }
    }
    if (divs === 2 && index > higher) {
      higher = index;
    }
  }
  return higher;
}

// Bonus

// Exercício 1
function ast1() {
  for (let index = 0; index < 5; index += 1) {
    console.log('*****');
  }
}

// Exercício 2
function ast2() {
  for (let index = 1; index <= 5; index += 1) {
    let row = '';
    for (let index1 = 1; index1 <= index; index1 += 1) {
      row += '*';
    }
    console.log(row);
  }
}
<<<<<<< HEAD

// Exercício 3
function ast3() {
  for (let index = 1; index <= 5; index += 1) {
    let row = '     ';
    for (let index1 = 1; index1 <= index; index1 += 1) {
      row.replace()
    }
    console.log(row);
  }
}
console.log(ast3())
=======
console.log(ast2())
// Exercício 3
>>>>>>> 21c060f59826f3c65fcff97584fa15fde6a4caf6
// Exercício 4
// Exercício 5
// Exercício 6

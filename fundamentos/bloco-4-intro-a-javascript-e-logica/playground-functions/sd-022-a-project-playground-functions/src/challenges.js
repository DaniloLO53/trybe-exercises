/* *************************** EXPLICAÇÕES GERAIS *****************************

* arr.length -> retorna a quantidade de valores na array de nome arr;

* arr[index] -> retorna o valor na array correspondente à key de valor "index",
index = 0 a key correspondente à primeira posição e index = arr.length à
última.

* for (let index = 0; index < arr.length; index += 1) {} -> percorre a array de
nome arr da seguinte forma:
1 - Cria localmente a variável index com valor igual a 0;
2 - Limita o valor de index até menor que arr.length e encerra a execução do 
for ao chegar nesse limite;
3 - A cada execução do algoritmo entre chaves, o valor de index aumenta em 1.
Obs: dessa forma, a única relação do for com o array é o index variar de 0 até
o final da array, pois fizemos variar dessa forma. Diferentemente, o algoritmo
abaixo relaciona o index diretamente com a array pela função in.

* for (index in arr) {} -> percorre a array de nome arr da seguinte forma:
Criamos localmente a variável index e a forçamos a variar conforme as chaves
da array. Isso fazemos pela função in.

*/

// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2; //verifica se value1 === true e value2 === true
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(" "); /* o string.split(" ") separa a string em uma 
  array contendo pedaços da string que estão separados por um espaço. */
}

// Desafio 4
function concatName(arr) {
  return arr[arr.length - 1] /* último elemento da array */ + ", " + arr[0];
}

// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))

// Desafio 5
function footballPoints(wins, ties) {
  return 3 * wins + ties;
}

// console.log(footballPoints(14, 8));

// Desafio 6
function highestCount(arr) {
  let greater = arr[0]; /* padroniza o primeiro elemento do array como sendo
  o maior */

/* O loop abaixo substitui greater pelo elemento da array, caso  esse seja
maior que greater. */

  for (let index = 1; index < arr.length; index += 1) { /* percorre o array
começando do segundo valor, pois o primeiro já foi recebido pela variável
greater. */
    if (arr[index] > greater) { /* condiciona o elemento de posição "index"
no array como sendo maior que o valor de greater. */
      greater = arr[index]; /* substitui greater pelo elemento atual, caso a
condição acima seja válida.*/
      // console.log(greater)
    }
  }

  let count = 0; // Contador iniciando em 0

  for (index2 in arr) {
    if (arr[index2] === greater) { /* Compara o elemento atual com greater */
      count += 1; /* Caso o elemento atual seja de mesmo valor que greater,
o contador aumenta em uma unidade. */
    }
  }

  return count; /* Retorna quantas vezes o greater se repete */
}

// console.log(highestCount([1, 9, 2, 3, 9, 5, 7]));

// Desafio 7

/* Math.abs(a - b) retorna o módulo de a - b. Em termos geométricos, isso
significa a distância entre a e b. Em toda a função, o que fazemos, basicamente,
é comparar as distâncias entre cat1 e cat2 em relação ao mouse, retornando a
maior distância. */

function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    return "os gatos trombam e o rato foge";
  }

  else if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return "cat1";
  }

  else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)){
    return "cat2";
  }
}

// Desafio 8

/* Para cada elemento da array, verifica a relação de divisão com 3 e 5 e aloca
em newArr essa relação conforme os códigos do fizzBuzz.
a % b === 0, significa que o resto da divisão de a por b é zero, ou seja, a é
divisível por b.
*/

function fizzBuzz(arr) {
  let newArr = [];

  for (index in arr) {
    if (arr[index] % 3 === 0 && arr[index] % 5 === 0) {
      newArr.push("fizzBuzz"); // coloca o elemento entre aspas na array.
    }

    else if (arr[index] % 3 === 0 && arr[index] % 5 !== 0) {
      newArr.push("fizz");
    }

    else if (arr[index] % 3 !== 0 && arr[index] % 5 === 0) {
      newArr.push("buzz");
    }

    else if (arr[index] % 3 !== 0 && arr[index] % 5 !== 0) {
      newArr.push("bug!");
    }
  }

  return newArr;
}

// Desafio 9

/* Ao criarmos os objetos transcript e transcript2, relacionamos cada letra com
o número correspondente através das propriedades. */
function encode(string) {
  let transcript = { 
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5
  }
  let encoded = "";

  /*Se o caractere da string for uma vogal, colocamos em encoded o número
  correspondente ao caractere. Se não, colocamos o própriio caractere.*/

  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === "a" || string[index] === "e" || string[index] === "i" || string[index] === "o" || string[index] === "u") {
      encoded += transcript[string[index]];
    }

    else {
      encoded += string[index];
    }
  }

  return encoded;
}

// console.log(encode("Oi, meu nome e danilo"))

function decode(string) {
  let transcript2 = {
    1: "a",
    2: "e",
    3: "i",
    4: "o",
    5: "u"
  }
  let encoded2 = "";

  for (let index2 = 0; index2 < string.length; index2 += 1) {
    if (string[index2] === "1" || string[index2] === "2" || string[index2] === "3" || string[index2] === "4" || string[index2] === "5") {
      encoded2 += transcript2[string[index2]];
    }

    else {
      encoded2 += string[index2];
    }
  }

  return encoded2;
}

// console.log(decode("h3 th2r2!"))

// Desafio 10
function techList(arr, name) {

  if (arr.length === 0){
    return "Vazio!"; // caso o array seja vazio
  }

  else{
    for (let index = 1; index < arr.length; index += 1) { /*percorre a array
começando da segunda posição.*/
      for (let index2 = 0; index2 < index; index2 += 1) { /*percorre a array
começando da primeira posição.*/
        if (arr[index] < arr[index2]) {
          let position = arr[index];
          arr[index] = arr[index2];
          arr[index2] = position;
        }
      }
    }
  
    let objectList = [];
  
    for (index3 in arr) {
      object = {};
      object.tech = arr[index3];
      object.name = name;
      objectList.push(object);
    }
  
    return objectList
  }
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"))



module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};

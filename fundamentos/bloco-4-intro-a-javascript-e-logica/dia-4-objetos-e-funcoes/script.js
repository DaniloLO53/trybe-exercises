// Parte 1

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// Exercício 1
console.log(`Bem vinda, ${info.personagem}`);

// Exercício 2
info.recorrente = 'Sim';
console.log(info);

// Exercício 3
const keys = Object.keys(info);
for (index in keys) {
  console.log(keys[index]);
}

// Exercício 4
const values = Object.values(info);
for (index in values) {
  console.log(values[index]);
}
// Exercício 5
// Exercício 6
// Exercício 7
// Exercício 8
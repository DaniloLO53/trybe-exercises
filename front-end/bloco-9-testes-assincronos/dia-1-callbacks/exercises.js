const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) => 
  `${name}  is ${value} ${measurementUnit} apart from the Sun`;

  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  
  const venus = {
    name: "Venus",
    distanceFromSun: {
      value: 108200000,
      measurementUnit: "kilometers",
    },
  };
  
  const jupiter = {
    name: "Jupiter",
    distanceFromSun: {
      value: 778500000,
      measurementUnit: "kilometers",
    },
  };

  // Exercício 3

  const getPlanet = () => {
    const mars = {
      name: "Mars",
      distanceFromSun: {
        value: 227900000,
        measurementUnit: "kilometers",
      },
    };
    setTimeout(() => console.log("Returned planet: ", mars), 4000);
  };
  
// getPlanet(); // imprime Marte depois de 4 segundos

  // Exercício 4, 5 e 6

const messageDelay = () => Math.floor(Math.random() * 5000);
const delay = messageDelay();

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) => {
  console.log(`Error getting temperature: ${errorReason}`);
}

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = (callback, handleErrorFunction) => {
  setTimeout(() => {
    try {
      if (delay > 2500) {
        throw new Error('Robot is busy')
      } else {
        console.log(callback(getMarsTemperature()));
      }
    } catch(error) {
      handleErrorFunction(error.message)
    }
  }, delay);
}
  
sendMarsTemperature(temperatureInFahrenheit, handleError); // imprime "It is currently 47ºF at Mars", por exemplo
sendMarsTemperature(greet, handleError); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo

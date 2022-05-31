const countryName = ({ name }) =>  console.log(`Returned country is ${name}`);
const countryCurrency = ({ name, currency }) => console.log(`${name} currency is ${currency}`);

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random * maxMilliseconds);

const printErrorMessage = (error) => console.log(`Error getting country ${error}`);

const getCountry = (onSucess) => {
  setTimeout(() => {
    const didOperationsucceed = Math.random() >= 0.5;
    if (didOperationsucceed) {
      const country = {
        name: 'Brazil',
        hdi: 0.759,
        currency: 'Real',
      };
      onSucess(country);
    } else {
      const errorMessage = 'Country could not be found';
    }
  }, delay());
};

console.log(getCountry(countryName, printErrorMessage));
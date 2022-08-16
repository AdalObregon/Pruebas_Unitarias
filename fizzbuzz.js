// Si un numero es multiplo de 3 mostrar 'Fizz'
// Si un numero es multiplo de 2 mostrar 'Buzz'
// Si un numero es multiplo de 3 y 5 mostrar 'Fizz Buzz'

const fizzBuzz = (n) => {
  if (n % 15 === 0) {
    return "Fizz Buzz";
  }
  if (n % 3 === 0) {
    return "Buzz";
  }
  if (n % 2 === 0) {
    return "Fizz";
  }
};


console.log(fizzBuzz(11));

//Necesito crear una constante del tipo objeto, donde voy a almacenar las variables que quiero testear
const fizzBuzzTest = {
  fizzBuzz,
};

module.exports = fizzBuzzTest;

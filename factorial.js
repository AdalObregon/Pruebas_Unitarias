//Ej: el factorial de 3 es 6 (3 * 2 * 1)


const nfactorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * nfactorial(n - 1);
  }
};


//Necesito crear una constante del tipo objeto, donde voy a almacenar las variables que quiero testear
const factorial = {
    nfactorial
}

module.exports = factorial;
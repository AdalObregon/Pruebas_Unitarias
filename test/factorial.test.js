//importar la funcionaludad a testear *objeto

const factorial = require('../factorial');


test('Debe ser factorial', () =>{
    expect(factorial.nfactorial(5)).toBe(120);
})


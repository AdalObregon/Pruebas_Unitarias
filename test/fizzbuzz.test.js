//importar la funcionaludad a testear *objeto

const fizzBuzzTest = require("../fizzbuzz");

test('Debe retornar "" si n no es divisible entre 2 o 3', () => {
  expect(fizzBuzzTest.fizzBuzz(1)).toBe(undefined);
  expect(fizzBuzzTest.fizzBuzz(7)).toBe(undefined);
  expect(fizzBuzzTest.fizzBuzz(11)).toBe(undefined);
});

test('Debe retornar "fizz" si n es divisible entre 2, pero no por 3', () => {
  expect(fizzBuzzTest.fizzBuzz(2)).toBe("Fizz");
  expect(fizzBuzzTest.fizzBuzz(4)).toBe("Fizz");
  expect(fizzBuzzTest.fizzBuzz(8)).toBe("Fizz");
});

test('Debe retornar "buzz" si n es divisible entre 3, pero no entre 2', () => {
  expect(fizzBuzzTest.fizzBuzz(3)).toBe("Buzz");
  expect(fizzBuzzTest.fizzBuzz(9)).toBe("Buzz");
  expect(fizzBuzzTest.fizzBuzz(12)).toBe("Buzz");
});

test('Debe retornar "Fizz Buzz" si n es divisible entre 3 y 5', () => {
  expect(fizzBuzzTest.fizzBuzz(15)).toBe("Fizz Buzz");
  expect(fizzBuzzTest.fizzBuzz(30)).toBe("Fizz Buzz");
  expect(fizzBuzzTest.fizzBuzz(45)).toBe("Fizz Buzz");
});

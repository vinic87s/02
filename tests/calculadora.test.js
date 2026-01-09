// test("primeiro teste", callbackFunction);
// function callbackFunction() {
//   console.log("retorna essa mensagem");
// }

// test("nsegundo teste", function () {
//   console.log("e esse?");
// });

// test("teste 3", () => {
//   console.log("terceiro teste??!");
// });

// test("espero que 1 seja 1", () => {
//   expect(1).toBe(1);
// });

const calculadora = require("../models/calculadora.js");

test("somar 4 + 2 deveria retornar 6", () => {
  const resultado = calculadora.somar(2, 4);
  console.log(resultado);
  expect(resultado).toBe(6);
});

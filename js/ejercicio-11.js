//11.- Añadir al ejercicio anterior que nos diga por cuál de
// los cuatro es divisible
// (hay que decir todos por los que es divisible)

let numero = parseInt(prompt("Ingresa un numero:"));
let divisores = [];
if (isNaN(numero)) {
  document.writeln("Por favor ingresa un numero valido");
} else {
  if (numero % 2 == 0) {
    divisores.push(2);
  }
  if (numero % 3 == 0) {
    divisores.push(3);
  }
  if (numero % 5 == 0) {
    divisores.push(5);
  }
  if (numero % 7 == 0) {
    divisores.push(7);
  }
  if (divisores.length > 0) {
    document.writeln(
      "El numero " + numero + " es divisible por: " + divisores.join(", ")
    );
  } else {
    document.writeln(
      "El numero " + numero + " no es divisible por 2, 3, 5 o 7"
    );
  }
}

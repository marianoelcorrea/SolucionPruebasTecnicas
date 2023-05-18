/* EJERCIO A 

let numero = prompt("Ingresa un número:");

if (numero % 2 === 0) {
  alert("El número ingresado es par.");
} else {
  alert("El número ingresado es impar.");
} */

/* EJERCICIO B

let numero = prompt("Ingrese un número: ");

if (numero % 5 === 0) {
  console.log("El número es divisible por 5.");
} else {
  console.log("El número no es divisible por 5.");
}  */

/* EJERCICIO C

let numero = prompt("Ingrese un número: ");

if (numero % 11 === 0 && numero % 5 === 0) {
  console.log("El número es divisible por 11 y 5.");
} else {
  console.log("El número no es divisible por 11 y 5.");
} */

/* EJERCICIO D

let numero1 = prompt("Ingrese el primer número: ");
let numero2 = prompt("Ingrese el segundo número: ");

numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);

let numeroMayor;

if (numero1 > numero2) {
  numeroMayor = numero1;
} else if (numero2 > numero1) {
  numeroMayor = numero2;
} else {
  alert("Los números son iguales.");
}
alert("El número mayor es: " + numeroMayor);
*/

/* EJERCICIO E 

let entrada = prompt("Ingrese una cadena de texto: ");
let primerCaracter = entrada.charAt(0);
let resultado;

if (isNaN(primerCaracter)) {
  resultado = "El string comienza con una letra.";
} else {
  resultado = "El string comienza con un número.";
}

console.log(resultado);  */

/* EJERCICIO F

let angulo1 = parseInt(prompt("Ingrese el primer ángulo: "));
let angulo2 = parseInt(prompt("Ingrese el segundo ángulo: "));
let angulo3 = parseInt(prompt("Ingrese el tercer ángulo: "));

let sumaAngulos = angulo1 + angulo2 + angulo3;

let esValido = sumaAngulos === 180;

console.log("El triángulo es" + (esValido ? " válido." : " inválido.")); */

/* EJERCICIO G

let palabra = prompt("Ingrese una palabra: ");

let comienzaConMayuscula = palabra.charAt(0) === palabra.charAt(0).toUpperCase();

console.log(comienzaConMayuscula ? "La palabra comienza con mayúscula." : "La palabra no comienza con mayúscula.");
*/

/* EJERCICIO H

let anio = parseInt(prompt("Ingrese un año: "));

let esBisiesto = (anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0;

console.log(esBisiesto ? "El año es bisiesto." : "El año no es bisiesto.");


EJERCICIO I

let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
let numeroUsuario = parseInt(prompt("Adivina el número (entre 1 y 10): "));

if (numeroUsuario === numeroAleatorio) {
  alert("¡Buen trabajo! Has adivinado el número correctamente.");
} else {
  alert("No corresponde. El número correcto era " + numeroAleatorio + ".");
}

EJERCICIO J

if (edad < 13) {
  console.log("es niño");
} else if (edad < 18) {
  console.log("es adolescente");
} else {
  console.log("es adulto");
}
*/



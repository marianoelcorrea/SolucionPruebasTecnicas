/* ejercicio 1

var n = prompt("Ingresa un número:");
n = parseInt(n);
if (!isNaN(n)) {

  for (var i = 1; i <= n; i++) {
    console.log(i);
  }
} else {
  console.log("El valor ingresado no es válido.");
} 

ejercicio 2

let n = prompt("Ingresa un número");
n = parseInt(n);

if (!isNaN(n)) {
  for (let i = 1; i <= n; i += 2) {
    console.log(i);
  }
} else {
  console.log("El valor ingresado no es válido.");
}

ejercicio 3

let n = prompt("Ingresa un número");

n = parseInt(n);

if (!isNaN(n)) {
  for (let i = n; i >= 1; i--) {
    console.log(i);
  }
} else {
  console.log("El valor ingresado no es válido.");
}


ejercicio 4

for (let i = 1; i <= 10; i++) {
  let resultado = 9 * i;
  console.log(`9 x ${i} = ${resultado}`);
}

ejercicio 5

let input = prompt("Ingresa un número:");

let sum = 0;

if (!isNaN(input)) {
  for (let i = 0; i < input.length; i++) {
    sum += parseInt(input.charAt(i));
  }
  
  console.log("La suma de los dígitos es: " + sum);
} else {
  console.log("El valor ingresado no es un número válido.");
}

ejercicio 6

let n = prompt("Ingresa el valor de N:");
let m = prompt("Ingresa el valor de M:");

n = parseInt(n);
m = parseInt(m);

let sum = 0;

if (!isNaN(n) && !isNaN(m)) {
  for (let i = n; i <= m; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  
  console.log("La suma de los números pares es: " + sum);
} else {
  console.log("Los valores ingresados no son números válidos.");
}

ejercicio 7

let n = prompt("Ingresa un número:");

n = parseInt(n);

let sumatoria = 0;

if (!isNaN(n)) {
  for (let i = 1; i <= n; i++) {
    sumatoria += i;
  }
  
  console.log("La sumatoria de los primeros " + n + " números es: " + sumatoria);
} else {
  console.log("El valor ingresado no es un número válido.");
}

ejercicio 8

let n = prompt("Ingresa un número:");

n = parseInt(n);

if (!isNaN(n)) {
  let factorial = 1;

  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }

  console.log("El factorial de " + n + " es: " + factorial);
} else {
  console.log("El valor ingresado no es un número válido.");
}

ejercicio 9

function encontrarDivisores(numero) {
  let divisores = [];
  
  for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
      divisores.push(i);
    }
  }
  
  return divisores;
}

let numero = parseInt(prompt("Ingresa un número:"));
let divisores = encontrarDivisores(numero);
console.log("Los divisores de", numero, "son:", divisores);

ejercicio 10

function esPrimo(numero) {
  if (numero < 2) {
    return false;
  }

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}

let numero;
do {
  numero = parseInt(prompt("Ingresa un número mayor o igual a 2:"));
} while (isNaN(numero) || numero < 2);

if (esPrimo(numero)) {
  console.log(numero, "es un número primo.");
} else {
  console.log(numero, "no es un número primo.");
}

ejrecicio 11

function esPerfecto(numero) {
  let sumaDivisores = 0;

  for (let i = 1; i < numero; i++) {
    if (numero % i === 0) {
      sumaDivisores += i;
    }
  }

  return sumaDivisores === numero;
}

let numero;
do {
  numero = parseInt(prompt("Ingresa un número mayor a 1:"));
} while (isNaN(numero) || numero <= 1);

if (esPerfecto(numero)) {
  console.log(numero, "es un número perfecto.");
} else {
  console.log(numero, "no es un número perfecto.");
}

*/






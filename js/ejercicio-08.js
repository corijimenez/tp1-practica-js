//8.- Escribe un programa que pida un número y 
// diga si es divisible por 2
let numero= parseInt(prompt("Ingresa un numero:"))

if(numero % 2 == 0){    
    document.writeln("El numero " + numero + " es divisible por 2")
} else{
    document.writeln("El numero " + numero + " no es divisible por 2")
}
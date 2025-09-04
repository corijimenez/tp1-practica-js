//6- Escribe un programa que pida dos números 
// y escriba en la pantalla cual es el mayor.

let numero1= parseInt(prompt("Ingresa el primer numero:"))
let numero2= parseInt(prompt("Ingresa el segundo numero:"))

if(numero1 > numero2){
    document.writeln("El numero mayor es: " + numero1)
}else if(numero2 > numero1){
    document.writeln("El numero mayor es: " + numero2)
}else{
    document.writeln("Los numeros son iguales")
}
//7.- Escribe un programa que pida 3 números y
//  escriba en la pantalla el mayor de los tres.

let numero1= parseInt(prompt("Ingresa el primer numero:"))
let numero2= parseInt(prompt("Ingresa el segundo numero:"))
let numero3= parseInt(prompt("Ingresa el tercer numero:")) 

if(numero1>numero2 && numero1>numero3){
    document.writeln("El numero mayor es: " + numero1)
}
else if(numero2>numero1 && numero2>numero3){
    document.writeln("El numero mayor es: " + numero2)
}else if(numero3>numero1 && numero3>numero2){
    document.writeln("El numero mayor es: " + numero3)
}else{
    document.writeln("Los numeros son iguales")
}
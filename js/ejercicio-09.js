//9.- Escribe un programa que pida una frase 
// y escriba las vocales que aparecen

const frase = prompt("Escribe una frase:")
const vocales = ""

for (const i = 0; i < frase.length; i++) {
    const letra = frase.charAt(i)
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
      vocales += letra + " "
    }
}
document.writeln("Las vocales que aparecen en la frase son: " + vocales)


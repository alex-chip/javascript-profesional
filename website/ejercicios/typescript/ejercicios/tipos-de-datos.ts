const c = console.log
// Tipos basicos de TypeScript

// Boolean
let muted: boolean = true
muted = false

// Numeros
let age = 6
let numedor: number = 42
let denominador: number = age
let resultado = numedor / denominador

// String
let nombre: string = 'Alex'
let saludo = `Me llamo ${nombre}`

// Arreglos
let people: string[] = []
people = ['Isabel', 'Nicole', 'Adrian']
people.push('100')
c(people)

let peopleAndNumber: Array<any> = []
peopleAndNumber.push('Jorge')
peopleAndNumber.push(100)
c(peopleAndNumber)

// Enum
enum Color {
  Rojo = 'Rojo',
  Verde = 'Verde',
  Azul = 'Azul',
  Amarillo = 'Amarillo'
}

let colorFavorito: Color = Color.Amarillo
c(`Mi color Favorito es ${colorFavorito}`)

// Cuando no sabemos de que tipo sera la variable TypeScript nos ofrece Any
// Any
let comodin: any = 'Joker'
comodin = { type: 'Wildcard' }
c(comodin)

// Object

let saveObject: object = { nombre: 'Alex'} 
c(saveObject)

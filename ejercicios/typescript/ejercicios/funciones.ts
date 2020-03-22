const c: any = console.log

function add (a: number, b: number): number {
  return a + b
}

const suma = add(3, 4)
c(suma)

function createAdder(a: number): (number) => number {
  return function (b: number) {
    return b + a
  }
}

const addFour = createAdder(4)
const fourPlus6 = addFour(6)
c(fourPlus6)

// para tener un valor opcional se le antepone un signo de interrogacion a los dos puntos -> parametro?: string

// se le pude pasar un valor por defecto seguido de la declaracion del tipo de variable
function fullName(firstName: string, lastname: string = 'Smith'): string {
  return `${firstName} ${lastname}`
}

const alex = fullName('Alex')
c(alex)
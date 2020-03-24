const c: any = console.log;

// enum
enum Color {
  Rojo = 'Rojo',
  Verder = 'Verde'
}

// Interfaces
interface Rectangulo {
  ancho: number
  alto: number
  color?: Color
}

let rect: Rectangulo = {
  ancho: 4,
  alto: 6,
  color: Color.Rojo
}

function area(r: Rectangulo) {
  return r.alto * r.ancho
}

const areaReact = area(rect)
c(areaReact)

rect.toString = function() {
  return this.color ? `Un rectangulo ${this.color}` : `Un reactangulo`
}

c(rect.toString())
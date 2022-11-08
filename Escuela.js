export class Escuela {
  constructor(nombre, localidad, director) {
    this.nombre = nombre
    this.localidad = localidad
    this.director = director
    this.profesorado = []
  }
  getNombre() {
    return this.nombre
  }

  getLocalidad() {
    return this.localidad
  }

  getResponsable() {
    return this.director
  }

  getProfesorado() {
    return this.profesorado
  }

  setNombre(nombre) {
    this.nombre = nombre
  }
  setLocalidad(localidad) {
    this.localidad = localidad
  }
  setResponsable(director) {
    this.director = director
  }

  addProfesor(profesor) {
    this.profesorado.push(profesor)
  }
}

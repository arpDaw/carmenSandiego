export class Alumno {
  constructor(nombre, curso, profesor) {
    this.nombre = nombre
    this.curso = curso
    this.profesor = profesor
  }

  getNombre() {
    return this.nombre
  }

  getCurso() {
    return this.curso
  }

  getProfesor() {
    return this.profesor
  }

  setNombre(nombre) {
    this.nombre = nombre
  }

  setCurso(curso) {
    this.curso = curso
  }

  setProfesor(profesor) {
    this.profesor = profesor
  }
}

import { Alumno } from '/Alumno.js'
import { Profesor } from '/Profesor.js'
import { Escuela } from '/Escuela.js'
import { Escuelas, escuelas } from '/Escuelas.js'

function listaEscuelas() {
  let selector = document.createElement('select')

  for (let i = 0; i < escuelas.lenght; i++) {
    let opcion = document.createElement('option')
    opcion.setAttribute('value', escuelas[i].getNombre())
    let texto = escuelas[i].getNombre()
    opcion.appendChild(texto)
    selector.appendChild(opcion)
    document.body.appendChild(selector)
  }
}

// window.addAlumno = addAlumno

// function addAlumno() {
//   const nombre = document.getElementById('addNombreAlumno').value
//   const curso = document.getElementById('addCursoAlumno').value
//   const responsable = document.getElementById('addResponsableAlumno').value

//   const alumno = new Alumno(nombre, curso, responsable)

//   alumnado.push(alumno)

//   alert(alumnado)
// }

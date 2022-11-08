import { Alumno } from '/Alumno.js'
import { Profesor } from '/Profesor.js'
import { Escuela } from '/Escuela.js'
import { Escuelas} from '/Escuelas.js'

let objeto = new Escuelas
let escuelas = objeto.escuelas

function listaEscuelas() { //añade un selector con las escuelas
  
  let form = document.createElement("form")
  form.setAttribute("id", "elegirEscuelas")

  let selector = document.createElement("select")
  selector.setAttribute("name", "selectorEscuelas")
  selector.setAttribute("id", "selectorEscuelas")

  for (let i = 0; i < escuelas.length; i++) {
    let opcion = document.createElement("option")
    opcion.setAttribute("value", escuelas[i].getNombre())
    opcion.setAttribute("id", escuelas[i].getNombre())
    let texto = document.createTextNode(escuelas[i].getNombre())
    opcion.appendChild(texto)
    selector.appendChild(opcion)
    form.appendChild(selector)
    document.body.appendChild(form)
  }
}
window.addEventListener("load", listaEscuelas)

function mostrarAddEscuela() { //muestra el formulario para añadir una escuela
  let form = document.createElement("form")
  form.setAttribute("id", "addEscuela")
  
  let iNombre = document.createElement("input")
  iNombre.setAttribute("type", "text")
  iNombre.setAttribute("id", "nombreEscuela")
  iNombre.setAttribute("placeholder", "Nombre Escuela")

  form.appendChild(iNombre)

  let iLocalidad = document.createElement("input")
  iLocalidad.setAttribute("type", "text")
  iLocalidad.setAttribute("id", "localidadEscuela")
  iLocalidad.setAttribute("placeholder","Localidad Escuela")

  form.appendChild(iLocalidad)

  let iDirector = document.createElement("input")
  iDirector.setAttribute("type", "text")
  iDirector.setAttribute("id", "directorEscuela")
  iDirector.setAttribute("placeholder", "Director Escuela")

  form.appendChild(iDirector)

  let bAddEscuela2 = document.createElement("input")
  bAddEscuela2.setAttribute("type", "button")
  bAddEscuela2.setAttribute("id", "addEscuela2")
  bAddEscuela2.setAttribute("value", "Añadir")
 

  form.appendChild(bAddEscuela2)

  document.body.appendChild(form)
  let botonAddEscuela2 = document.getElementById("addEscuela2")
  botonAddEscuela2.addEventListener("click", addEscuela)
  
}


let bAddEscuela = document.getElementById("addEscuela")
bAddEscuela.addEventListener("click", mostrarAddEscuela)

function addEscuela(){ // Añade la escuela
  let nombreEscuela = document.getElementById("nombreEscuela").value
  let localidadEscuela = document.getElementById("localidadEscuela").value
  let directorEscuela = document.getElementById("directorEscuela").value
  let escuela = new Escuela(nombreEscuela, localidadEscuela, directorEscuela)

  escuelas.push(escuela)

  let selectorEscuelas = document.getElementById("selectorEscuelas")
  let opcion = document.createElement("option")
  opcion.setAttribute("value", nombreEscuela)
  opcion.setAttribute("id", nombreEscuela)
  let textoOpcion = document.createTextNode(nombreEscuela)
  opcion.appendChild(textoOpcion)
  selectorEscuelas.appendChild(opcion)

  
}

let bDeleteEscuela = document.getElementById("deleteEscuela")


function deleteEscuela(){
  let selectorEscuelas = document.getElementById("selectorEscuelas")
  let escuelaQueBorrar = document.forms["elegirEscuelas"].selectorEscuelas
  
  for (let i = 0; i < escuelas.length; i++) {
    if(escuelas[i].getNombre() == escuelaQueBorrar.value){
      escuelas.splice(i, 1)
      let opcionQueBorrar = document.getElementById(escuelaQueBorrar.value)
      selectorEscuelas.removeChild(opcionQueBorrar)
    }
    
  }
  console.log(escuelaQueBorrar.value)
}

bDeleteEscuela.addEventListener("click", deleteEscuela)

function mostrarModificarEscuela() {

  let nombre = ""
  let localidad = ""
  let director = ""

  let seleccion = document.forms["elegirEscuelas"].selectorEscuelas
 
  for (let i = 0; i < escuelas.length; i++) {
    if(escuelas[i].getNombre() == seleccion.value){
      nombre = escuelas[i].getNombre()
      localidad = escuelas[i].getLocalidad()
      director = escuelas[i].getResponsable()
    }
  }

  let form = document.createElement("form")
  form.setAttribute("id", "modificarEscuela")

  let iNombre = document.createElement("input")
  iNombre.setAttribute("type", "text")
  iNombre.setAttribute("id", "modificarNombreEscuela")
  iNombre.setAttribute("placeholder", nombre)

  form.appendChild(iNombre)

  let iLocalidad = document.createElement("input")
  iLocalidad.setAttribute("type", "text")
  iLocalidad.setAttribute("id", "modificarLocalidadEscuela")
  iLocalidad.setAttribute("placeholder", localidad)

  form.appendChild(iLocalidad)

  let iDirector = document.createElement("input")
  iDirector.setAttribute("type", "text")
  iDirector.setAttribute("id", "modificarDirectorEscuela")
  iDirector.setAttribute("placeholder", director)

  form.appendChild(iDirector)

  let bMostrarModEscuela = document.createElement("input")
  bMostrarModEscuela.setAttribute("type", "button")
  bMostrarModEscuela.setAttribute("id", "modEscuela")
  bMostrarModEscuela.setAttribute("value", "Modificar")
 

  form.appendChild(bMostrarModEscuela)

  document.body.appendChild(form)

  let bModEscuela = document.getElementById("modEscuela")
  bModEscuela.addEventListener("click", modificarEscuela)
}

  let bMostrarModEscuela = document.getElementById("modificarEscuela")
  bMostrarModEscuela.addEventListener("click", mostrarModificarEscuela)

  

  function modificarEscuela() {
    let nombre = document.getElementById("modificarNombreEscuela").value
    let localidad = document.getElementById("modificarLocalidadEscuela").value
    let director = document.getElementById("modificarDirectorEscuela").value

    let selectorEscuelas = document.getElementById("selectorEscuelas")    
    let seleccion = document.forms["elegirEscuelas"].selectorEscuelas

    

    for (let i = 0; i < escuelas.length; i++) {
      if(escuelas[i].getNombre() == seleccion.value){
        escuelas[i].setNombre(nombre)
        escuelas[i].setLocalidad(localidad)
        escuelas[i].setResponsable(director)

        let texto = document.createTextNode(nombre)
        
       

      }
       
    }
    selectorEscuelas.replaceChild(texto, selectorEscuelas.childNodes[i])
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

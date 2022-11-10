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


function deleteEscuela(){ // Borra la escuela seleccionada
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

function mostrarModificarEscuela() {//muestra el formulario para modificar la escuela seleccionada

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

  

  function modificarEscuela() {//modifica la escuela seleccionada
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

        let opcion = document.createElement("option")
        opcion.setAttribute("id", nombre)
        opcion.setAttribute("value", nombre)
        let texto = document.createTextNode(nombre)
        opcion.appendChild(texto)
        selectorEscuelas.replaceChild(opcion, selectorEscuelas.childNodes[i])
        break
      }
       
    }

  }

  function listaProfesores(){
    let selectorEscuelas = document.getElementById("selectorEscuelas") 
    let seleccion = document.forms["elegirEscuelas"].selectorEscuelas

    let form = document.createElement("form")
    form.setAttribute("id", "elegirProfesor")
  
    let selector = document.createElement("select")
    selector.setAttribute("name", "selectorProfesor")
    selector.setAttribute("id", "selectorProfesor")

    for (let i = 0; i < escuelas.length; i++) {
      if(escuelas[i].getNombre() == seleccion.value){
        let profesorado = escuelas[i].getProfesorado()
        for (let x = 0; x < profesorado.length; x++) {
          let opcion = document.createElement("option")
          opcion.setAttribute("value", profesorado[x].getNombre())
          opcion.setAttribute("id", profesorado[x].getNombre())
          let texto = document.createTextNode(profesorado[x].getNombre())
          opcion.appendChild(texto)
          selector.appendChild(opcion)
          form.appendChild(selector)
          document.body.appendChild(form)
          
        } 
      } 
    }
  }

  window.addEventListener('load', listaProfesores)

  function actualizaListaProfesores(){
    let selectorEscuelas = document.getElementById("selectorEscuelas") 
    let seleccionEscuelas = document.forms["elegirEscuelas"].selectorEscuelas

    let selectorProfesor = document.getElementById("selectorProfesor")
    let seleccionProfesor = document.forms["elegirProfesor"].selectorProfesor

    for (let i = 0; i < escuelas.length; i++) {
      if(escuelas[i].getNombre() == seleccionEscuelas.value){
        let profesorado = escuelas[i].getProfesorado()
        for (let x = 0; x < profesorado.length; x++) {
          var values = Array.from(document.getElementById("selectorProfesor").options)
          console.log(profesorado)
          console.log(values)
          let opcion = document.createElement("option")
          opcion.setAttribute("value", profesorado[x].getNombre())
          opcion.setAttribute("id", profesorado[x].getNombre())
          let texto = document.createTextNode(profesorado[x].getNombre())
          opcion.appendChild(texto)
          selectorProfesor.replaceChild(opcion, selectorProfesor.childNodes[x])
          
          // for (let y = 0; y < values.length; y++) {
          //   let valor = values[y].value
          //   console.log(valor)
          //   console.log(profesorado.includes(valor))
          //   if(!profesorado.includes(valor)){
          //     let opcionQueBorrar = document.getElementById(valor)
          //     console.log(opcionQueBorrar)
          //     selectorProfesor.removeChild(opcionQueBorrar)
          //   }
            
          // }

        } 
      } 
    }
  }
  let bActu = document.getElementById("actu")

  bActu.addEventListener("click", actualizaListaProfesores)

  function muestraAddProfesor(){

    let form = document.createElement("form")
    form.setAttribute("id", "addProfesor")
    
    let iNombre = document.createElement("input")
    iNombre.setAttribute("type", "text")
    iNombre.setAttribute("id", "nombreProfesor")
    iNombre.setAttribute("placeholder", "Nombre Profesor")
  
    form.appendChild(iNombre)

    let iTipo = document.createElement("input")
    iTipo.setAttribute("type", "text")
    iTipo.setAttribute("id", "tipoProfesor")
    iTipo.setAttribute("placeholder", "Tipo Profesor")

    form.appendChild(iTipo)

    let bAddProfesor = document.createElement("input")
    bAddProfesor.setAttribute("type", "button")
    bAddProfesor.setAttribute("id", "addProfesor2")
    bAddProfesor.setAttribute("value", "Añadir")

    form.appendChild(bAddProfesor)

    document.body.appendChild(form)

    let bAddProfesor2 = document.getElementById("addProfesor2")
    bAddProfesor2.addEventListener("click", addProfesor)

  }
  let bAddProfesor = document.getElementById("addProfesor")
  bAddProfesor.addEventListener("click", muestraAddProfesor)

  function addProfesor(){
    let selectorEscuelas = document.getElementById("selectorEscuelas") 
    let seleccionEscuelas = document.forms["elegirEscuelas"].selectorEscuelas

    let selectorProfesor = document.getElementById("selectorProfesor")
    let seleccionProfesor = document.forms["elegirProfesor"].selectorProfesor

    let nombre = document.getElementById("nombreProfesor").value
    let tipo = document.getElementById("tipoProfesor").value
    let profesor = new Profesor(nombre, tipo)

    for (let i = 0; i < escuelas.length; i++) {
      if(escuelas[i].getNombre() == seleccionEscuelas.value){
        let profesorado = escuelas[i].getProfesorado()
        profesorado.push(profesor)
        let opcion = document.createElement("option")
        opcion.setAttribute("value", nombre)
        opcion.setAttribute("id", nombre)
        let texto = document.createTextNode(nombre)
        opcion.appendChild(texto)
        selectorProfesor.appendChild(opcion)    
      } 
    }
  }

  let bDeleteprofesor = document.getElementById('deleteProfesor')
  bDeleteprofesor.addEventListener('click', deleteProfesor)

  function deleteProfesor(){
    let selectorProfesor = document.getElementById("selectorProfesor")
    let profesorQueBorrar = document.forms["elegirProfesor"].selectorProfesor
    let selectorEscuelas = document.getElementById("selectorEscuelas")
    let escuelaQueBorrar = document.forms["elegirEscuelas"].selectorEscuelas
    
    for (let i = 0; i < escuelas.length; i++) {
      let profesorado = escuelas[i].getProfesorado()
      if(escuelas[i].getNombre() == escuelaQueBorrar.value){
        for (let x = 0; x < profesorado.length; x++) {
          profesorado.splice(x, 1)
          let opcionQueBorrar = document.getElementById(profesorQueBorrar.value)
          selectorProfesor.removeChild(opcionQueBorrar)
          
        }
        
      }
      
    }
  }
let bMostrarModificarProfesor = document.getElementById('modificarProfesor')
bMostrarModificarProfesor.addEventListener('click', mostrarModificarProfesor)

function mostrarModificarProfesor(){
  let form = document.createElement("form")
    form.setAttribute("id", "modificarProfesor")
    
    let iNombre = document.createElement("input")
    iNombre.setAttribute("type", "text")
    iNombre.setAttribute("id", "modificarNombreProfesor")
    iNombre.setAttribute("placeholder", "Modificar Nombre Profesor")
  
    form.appendChild(iNombre)

    let iTipo = document.createElement("input")
    iTipo.setAttribute("type", "text")
    iTipo.setAttribute("id", "modificarTipoProfesor")
    iTipo.setAttribute("placeholder", "Modificar Tipo Profesor")

    form.appendChild(iTipo)

    let bModProfesor = document.createElement("input")
    bModProfesor.setAttribute("type", "button")
    bModProfesor.setAttribute("id", "modProfesor2")
    bModProfesor.setAttribute("value", "Modificar")

    form.appendChild(bModProfesor)

    document.body.appendChild(form)

    let bModProfesor2 = document.getElementById("modProfesor2")
    bModProfesor2.addEventListener("click", modProfesor)
}

function modProfesor(){
  let nombre = document.getElementById("modificarNombreProfesor").value
  let tipo = document.getElementById("modificarTipoProfesor").value

  let selectorEscuelas = document.getElementById("selectorEscuelas")    
  let seleccion = document.forms["elegirEscuelas"].selectorEscuelas
  let selectorProfesor = document.getElementById("selectorProfesor")
  let profesorQueBorrar = document.forms["elegirProfesor"].selectorProfesor
  
  for (let i = 0; i < escuelas.length; i++) {
    if(escuelas[i].getNombre() == seleccion.value){
      let profesorado = escuelas[i].getProfesorado()
      for (let x = 0; x < profesorado.length; x++) {
        profesorado[x].setNombre(nombre)
        profesorado[x].setTipo(tipo)
        let opcion = document.createElement("option")
        opcion.setAttribute("id", nombre)
        opcion.setAttribute("value", nombre)
        let texto = document.createTextNode(nombre)
        opcion.appendChild(texto)
        selectorProfesor.replaceChild(opcion, selectorProfesor.childNodes[x])
        break
      }
    }
     
  }

}
function listaAlumnos(){
  let selectorEscuelas = document.getElementById("selectorEscuelas") 
  let seleccion = document.forms["elegirEscuelas"].selectorEscuelas

  let form = document.createElement("form")
  form.setAttribute("id", "elegirAlumno")

  let selector = document.createElement("select")
  selector.setAttribute("name", "selectorAlumno")
  selector.setAttribute("id", "selectorAlumno")

  for (let i = 0; i < escuelas.length; i++) {
    if(escuelas[i].getNombre() == seleccion.value){
      let alumnado = escuelas[i].getAlumnado()
      for (let x = 0; x < alumnado.length; x++) {
        let opcion = document.createElement("option")
        opcion.setAttribute("value", alumnado[x].getNombre())
        opcion.setAttribute("id", alumnado[x].getNombre())
        let texto = document.createTextNode(alumnado[x].getNombre())
        opcion.appendChild(texto)
        selector.appendChild(opcion)
        form.appendChild(selector)
        document.body.appendChild(form)
        
      } 
    } 
  }
}

window.addEventListener('load', listaAlumnos)

let bMostrarAddAlumno = document.getElementById("addAlumno")
bMostrarAddAlumno.addEventListener('click', mostrarAddAlumno)

function mostrarAddAlumno(){
  let form = document.createElement("form")
    form.setAttribute("id", "addAlumno")
    
    let iNombre = document.createElement("input")
    iNombre.setAttribute("type", "text")
    iNombre.setAttribute("id", "nombreAlumno")
    iNombre.setAttribute("placeholder", "Nombre Alumno")
  
    form.appendChild(iNombre)

    let iCurso = document.createElement("input")
    iCurso.setAttribute("type", "text")
    iCurso.setAttribute("id", "cursoAlumno")
    iCurso.setAttribute("placeholder", "Curso Alumno")

    form.appendChild(iCurso)

    let bAddAlumno = document.createElement("input")
    bAddAlumno.setAttribute("type", "button")
    bAddAlumno.setAttribute("id", "addAlumno2")
    bAddAlumno.setAttribute("value", "Añadir")

    form.appendChild(bAddAlumno)

    document.body.appendChild(form)

    let bAddAlumno2 = document.getElementById("addAlumno2")
    bAddAlumno2.addEventListener("click", addAlumno)
}

function addAlumno(){
  let selectorEscuelas = document.getElementById("selectorEscuelas") 
    let seleccionEscuelas = document.forms["elegirEscuelas"].selectorEscuelas

    let selectorProfesor = document.getElementById("selectorProfesor")
    let seleccionProfesor = document.forms["elegirProfesor"].selectorProfesor

    let selectorAlumno = document.getElementById("selectorAlumno")

    let nombre = document.getElementById("nombreAlumno").value
    let curso = document.getElementById("cursoAlumno").value
    let profesor = seleccionProfesor.value
    let alumno = new Alumno(nombre, curso, profesor)

    for (let i = 0; i < escuelas.length; i++) {
      if(escuelas[i].getNombre() == seleccionEscuelas.value){
        let alumnado = escuelas[i].getAlumnado()
        alumnado.push(alumno)
        let opcion = document.createElement("option")
        opcion.setAttribute("value", nombre)
        opcion.setAttribute("id", nombre)
        let texto = document.createTextNode(nombre)
        opcion.appendChild(texto)
        selectorAlumno.appendChild(opcion)    
      } 
    }
}

let bDeleteAlumno = document.getElementById('deleteAlumno')
bDeleteAlumno.addEventListener('click', deleteAlumno)

function deleteAlumno(){
  let selectorAlumno = document.getElementById("selectorAlumno")
  let alumnoQueBorrar = document.forms["elegirAlumno"].selectorAlumno
  let selectorEscuelas = document.getElementById("selectorEscuelas")
  let escuelaQueBorrar = document.forms["elegirEscuelas"].selectorEscuelas
  
  for (let i = 0; i < escuelas.length; i++) {
    let alumnado = escuelas[i].getAlumnado()
    if(escuelas[i].getNombre() == escuelaQueBorrar.value){
      for (let x = 0; x < alumnado.length; x++) {
        alumnado.splice(x, 1)
        let opcionQueBorrar = document.getElementById(alumnoQueBorrar.value)
        selectorAlumno.removeChild(opcionQueBorrar)
      }
    }
  }
}

let bMostrarModificarAlumno = document.getElementById('modificarAlumno')
bMostrarModificarAlumno.addEventListener('click', mostrarModificarAlumno)

function mostrarModificarAlumno(){
  let form = document.createElement("form")
    form.setAttribute("id", "modificarAlumno")
    
    let iNombre = document.createElement("input")
    iNombre.setAttribute("type", "text")
    iNombre.setAttribute("id", "modificarNombreAlumno")
    iNombre.setAttribute("placeholder", "Modificar Nombre Alumno")
  
    form.appendChild(iNombre)

    let iCurso = document.createElement("input")
    iCurso.setAttribute("type", "text")
    iCurso.setAttribute("id", "modificarCursoAlumno")
    iCurso.setAttribute("placeholder", "Modificar Tipo Alumno")

    form.appendChild(iCurso)

    let bModAlumno = document.createElement("input")
    bModAlumno.setAttribute("type", "button")
    bModAlumno.setAttribute("id", "modAlumno2")
    bModAlumno.setAttribute("value", "Modificar")

    form.appendChild(bModAlumno)

    document.body.appendChild(form)

    let bModAlumno2 = document.getElementById("modAlumno2")
    bModAlumno2.addEventListener("click", modAlumno)
}

function modAlumno(){
  let nombre = document.getElementById("modificarNombreAlumno").value
  let curso = document.getElementById("modificarCursoAlumno").value

  let selectorEscuelas = document.getElementById("selectorEscuelas")    
  let seleccion = document.forms["elegirEscuelas"].selectorEscuelas
  let selectorAlumno = document.getElementById("selectorAlumno")
  let profesorQueBorrar = document.forms["elegirProfesor"].selectorProfesor
  
  for (let i = 0; i < escuelas.length; i++) {
    if(escuelas[i].getNombre() == seleccion.value){
      let alumnado = escuelas[i].getAlumnado()
      for (let x = 0; x < alumnado.length; x++) {
        alumnado[x].setNombre(nombre)
        alumnado[x].setCurso(curso)
        let opcion = document.createElement("option")
        opcion.setAttribute("id", nombre)
        opcion.setAttribute("value", nombre)
        let texto = document.createTextNode(nombre)
        opcion.appendChild(texto)
        selectorAlumno.replaceChild(opcion, selectorAlumno.childNodes[x])
        console.log(opcion)
        break
      }
    }
     
  }
}


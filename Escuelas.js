import { Alumno } from '/Alumno.js'
import { Profesor } from '/Profesor.js'
import { Escuela } from '/Escuela.js'

export class Escuelas {
    constructor(){
        let escuela1 = new Escuela('Norte', 'Donosti', 'Petritegui')
        let escuela2 = new Escuela('Sur', 'Málaga', 'Enrique Montilla')
        let escuela3 = new Escuela('Este', 'Valencia', 'Rita Barberà')
        let escuela4 = new Escuela('Oeste', 'Extremadura', 'Robe Iniesta')

        this.escuelas = []

        this.escuelas.push(escuela1)
        this.escuelas.push(escuela2)
        this.escuelas.push(escuela3)
        this.escuelas.push(escuela4)

        let profesor1 = new Profesor('Samuel Vimes', 'Mixto')
        let profesor2 = new Profesor('Steven Armstrong', 'Ciencias')
        escuela1.addProfesor(profesor1)
        escuela1.addProfesor(profesor2)

        let profesor3 = new Profesor('Funko Pop', "Letras")
        let profesor4 = new Profesor('Denji Power', "Mixto")
        escuela2.addProfesor(profesor3)
        escuela2.addProfesor(profesor4)

        let profesor5 = new Profesor('Elon Musk', "Ciencias")
        let profesor6 = new Profesor('Jeffrey Besos', "Letras")
        escuela3.addProfesor(profesor5)
        escuela3.addProfesor(profesor6)

        let profesor7 = new Profesor('La Hierbas', "Letras")
        let profesor8 = new Profesor('Profesor Oak', 'Ciencias')
        escuela4.addProfesor(profesor7)
        escuela4.addProfesor(profesor8)

        let alumno1 = new Alumno('Pepe Villuela', '1ºA', 'Samuel Vimes')
        let alumno2 = new Alumno('Aida Martinez', '2ºA', 'Steven Armstrong')
        escuela1.addAlumno(alumno1)
        escuela1.addAlumno(alumno2)

        let alumno3 = new Alumno('Marc Rebillet', '3ºA', 'Funko Pop')
        let alumno4 = new Alumno('Mikasa Ackerman', '4ºA', 'Denji Power')
        escuela2.addAlumno(alumno3)
        escuela2.addAlumno(alumno4)

        let alumno5 = new Alumno('Jovial Culoalegre', '3ºB', 'Elon Musk')
        let alumno6 = new Alumno('Capitán Zanahoria', '4ºB', 'Jeffrey Besos')
        escuela3.addAlumno(alumno5)
        escuela3.addAlumno(alumno6)

        let alumno7 = new Alumno('Taichi Yagami', '1ºB', 'La Hierbas')
        let alumno8 = new Alumno('Sovereign of Dawn', '2ºB', 'Profesor Oak')
        escuela4.addAlumno(alumno7)
        escuela4.addAlumno(alumno8)

    }

}





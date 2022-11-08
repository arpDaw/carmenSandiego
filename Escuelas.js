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

    }

}





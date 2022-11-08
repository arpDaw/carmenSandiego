import { Alumno } from '/Alumno.js'
import { Profesor } from '/Profesor.js'
import { Escuela } from '/Escuela.js'

let escuela1 = new Escuela('Norte', 'Donosti', 'Petritegui')
let escuela2 = new Escuela('Sur', 'Málaga', 'Enrique Montilla')
let escuela3 = new Escuela('Este', 'Valencia', 'Rita Barberà')
let escuela4 = new Escuela('Oeste', 'Extremadura', 'Robe Iniesta')

export let escuelas = []

escuelas.push(escuela1)
escuelas.push(escuela2)
escuelas.push(escuela3)
escuelas.push(escuela4)

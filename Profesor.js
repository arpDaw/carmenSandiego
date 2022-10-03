class Profesor{
    constructor(nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }

    getNombre() {
        return this.nombre;
    }

    getTipo() {
        return this.tipo;
    }

    setNombre(nombre) {
        this.nombre=nombre;
    }

    setTipo(tipo) {
        this.tipo=tipo;
    }
}
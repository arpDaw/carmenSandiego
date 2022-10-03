class Escuela{
    constructor(nombre, localidad, responsable){
        this.nombre = nombre;
        this.localidad = localidad;
        this.responsable = responsable;
        this.profesorado = [];
        this.alumnado = [];
    }
    getNombre() {
        return this.nombre;
    }

    getLocalidad() {
        return this.localidad;
    }

    getResponsable() {
        return this.responsable;
    }

    getProfesorado(){
        return this.profesorado;
    }

    getAlumnado(){
        return this.alumnado;
    }

    setNombre(nombre) {
        this.nombre=nombre;
    }
    setLocalidad(localidad) {
        this.localidad=localidad;
    }
    setResponsable(responsable) {
        this.responsable=responsable;
    }

    setProfesorado(profesorado){
        this.profesorado = profesorado;
    }

    setAlumando(alumnado){
        this.alumnado = alumnado;
    }
}
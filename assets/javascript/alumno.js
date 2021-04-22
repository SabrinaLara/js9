class Alumno{
    constructor(nombre, edad, curso, nota) {
        this.nombre = nombre;
        this.edad   = edad;
        this.curso  = curso;
        this.nota = parseFloat(nota);
    }
    
    get obtenerNombre () {
        return this.nombre;
    }

    get obtenerCurso() {
        return this.curso;
    }

    set cambioCurso(nuevoCurso) {
        this.curso = nuevoCurso;
    }

    paso() {
        console.log("El alumno: " + this.nombre + " esta en curso");
    }

    agregar () {
        console.log("Al alumno: " + this.nombre + " se agregaron 2 puntos a su nota por asistencia");
    }

    notaMateria () {
        console.log(this.nota = this.nombre + " obtuvo un total de nota: " + (this.nota + 2));
    }
  
}

const alumnos = [];
alumnos.push(new Alumno("Carolina", 24, 3, 6));
alumnos.push(new Alumno("Daniel", 19, 3, 8));
alumnos.push(new Alumno("Maria", 20, 2, 5));

for (const alumno of alumnos)
    alumno.notaMateria ();

function orden(a,b) {
    return a.edad - b.edad;
}

let ordenEdad = alumnos.sort(orden);
console.log(ordenEdad);


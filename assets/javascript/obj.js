
let sara = new Alumno("Sara", 19, 1, 7);
let andres = new Alumno("Andres", 23, 1, 7);

sara.paso();
andres.paso();
sara.agregar();
sara.notaMateria();
andres.agregar();
andres.notaMateria();

console.log(sara.obtenerNombre + " obtuvo el curso: " + sara.obtenerCurso);
console.log(andres.obtenerNombre + " obtuvo el curso: " + andres.obtenerCurso);

sara.cambioCurso = "2";
console.log(sara.obtenerNombre + " cambió al curso: " + sara.obtenerCurso);
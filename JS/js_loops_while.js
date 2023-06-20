var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}
while(estudiantes.length > 0){
    console.log(estudiantes);
    var estudiante = estudiantes.shift();/* .shift es un elemento de mutacion que estara sacando elementos de el array*/
    saludarEstudiantes(estudiante);
}
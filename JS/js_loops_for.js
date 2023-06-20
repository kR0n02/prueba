var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"]; //Realizamos un Array//

function saludarEstudiantes (estudiante)/*parametro*/{
    console.log(`Hola, ${estudiante}`);/*la funcion es la tarea*/
}
for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

/*forma dos*/

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes (estudiante){
    console.log(`Hola, ${estudiante}`);
}

for (var estudiante of estudiantes)/*utilizamos el singular para hacer referencia al array en plural*/{
    saludarEstudiantes(estudiante);
}
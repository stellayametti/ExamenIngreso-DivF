/*Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los
 datos solicitados son:  while
nombre
situcación laboral ("buscando" , "trabajando" o "solo estudiante")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no no sea estudiante
b) El nombre del mas viejo de los alumnos que solo sea estudiantes
c) El promedio de nota por situacion laboral
d) La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo*/


function mostrar() {

  let continuar = "si";
  let nomreIngresado;
  let situacionLaboral;
  let cantidadIngresada;
  let sexoIngresado;
  let NotaPromedio;
  let edadIngresada;
  let nombreMejorPromedioNoEstudiante;
  let banderaPuntoA = 0;
  let notaMejorPromedioNoEstudiante;
  let edadAlumnoMasViejo;
  let banderaPuntoB;
  let nombreAlumnoMasViejo;
  let promedioBus;
  let sumBus = 0;
  let contBus = 0;
  let promedioTra;
  let sumtra = 0;
  let contTrab = 0;
  let promedioEst;
  let sumEst = 0;
  let contEst = 0;
  let banderaPuntoD;
  let menorCantidadDeMaterias;
  let edadMenorCantidadMaterias;
  let nombreMenorCantidadMaterias;


  while (continuar == "si") {

    nombreIngresado = prompt("Ingrese el nombre");

    while (isNaN(nomreIngresado) == false) {
      nomreIngresado = prompt("Error# Ingrese el nombre");
    }

    situacionLaboral = prompt("Ingrese su situacion laboral buscando/trabajando/estudiante");

    while (isNaN(situacionLaboral) == false) {
      situacionLaboral = prompt("Error# Ingrese su situacion laboral buscando/trabajando/estudiante");
    }

    cantidadIngresada = prompt("Ingrese la cantidad  requerida (0-8)");
    cantidadIngresada = parseInt(cantidadIngresada);

    while (isNaN(cantidadIngresada) == true || cantidadIngresada < 0 || cantidadIngresada > 8) {
      cantidadIngresada = prompt("Error# Ingrese una cantidad  valida  (0-8)");
      cantidadIngresada = parseInt(cantidadIngresada)
    }

    sexoIngresado = prompt("Ingrese el sexo femenino/masculino/no binario");

    while (isNaN(sexoIngresado) == false || sexoIngresado != "femenino" && sexoIngresado != "masculino" && sexoIngresado != "quatno binario");
    {
      sexoIngresado = prompt("Error# Ingrese el sexo femenino/masculino/no binario");
    }


    NotaPromedio = prompt("Ingrese la nota promedio");
    NotaPromedio = parseInt(NotaPromedio);

    while (isNaN(NotaPromedio) == true || NotaPromedio < 0 || NotaPromedio > 10) {
      NotaPromedio = prompt("Error# Ingrese la nota promedio");
      NotaPromedio = parseInt(NotaPromedio)
    }

    edadIngresada = prompt("Ingrese la edad");
    edadIngresada = parseInt(edadIngresada);

    while (isNaN(edadIngresada) == true) {
      edadIngresada = prompt("Error# Ingrese la edad");
      edadIngresada = parseInt(edadIngresada)
    }

    if (situacionLaboral != "estudiante") {


      if (banderaPuntoA == 0 || NotaPromedio > notaMejorPromedioNoEstudiante) {

        notaMejorPromedioNoEstudiante = NotaPromedio;
        nombreMejorPromedioNoEstudiante = nombreIngresado;

        banderaPuntoA = 1;

      }

    }
    switch (situacionLaboral) {
      case "buscando":
        sumBus = sumBus + NotaPromedio;
        contBus++;
        if (banderaPuntoD == 0 || cantidadIngresada < menorCantidadDeMaterias) {
          menorCantidadDeMaterias = cantidadIngresada;
          nombreMenorCantidadMaterias = nombreIngresado;
          edadMenorCantidadMaterias = edadIngresada;

          banderaPuntoD = 1;
        }

        break;

      case "trabajando":
        sumtra = sumtra + NotaPromedio;
        contTrab++;
        break;

      case "estudiante":
        sumEst = sumEst + NotaPromedio;
        contEst++;
        if (banderaPuntoB == 0 || edadIngresada > edadAlumnoMasViejo) {
          edadAlumnoMasViejo = edadIngresada;
          nombreAlumnoMasViejo = nombreIngresado;

          banderaPuntoB = 1;
        }
        break;
    }

  } continuar = prompt("¿desea ingresar otro alumno?");
  //cierre while

  if (bandera > 0) {
    console.log("el nombre del mejor promedio que no es estudiante es: " + nombreMejorPromedioNoEstudiante);
  }
  else {
    console.log("no se ingreso datos");
  }

  if (banderaPuntoB > 0) {
    console.log("El nombre del mas viejo de los estudiantes es: " + nombreAlumnoMasViejo);
  }
  else {
    console.log("no se ingreso datos")
  }

  if (contBus > 0) {
    promedioBus = sumBus / contBus;
    console.log("El promedio de nota los que estan buscando es: " + promedioBus);

  }
  else {
    console.log("no se ingreso datos")
  }
  if (contTrab > 0) {
    promedioTra = sumtra / contTrab;
    console.log("El promedio de nota los que estan buscando es: " + promedioTra);
  }
  else {
    console.log("no se ingreso datos")
  }

  if (contEst > 0) {
    promedioEst = sumEst / contEst;
    console.log("El promedio de nota los que estan buscando es: " + promedioEst);
  }
  else {
    console.log("no se ingreso datos")
  }
  if (banderaPuntoD > 0) {
    console.log("la edad del que cursa menos materias es:" + edadMenorCantidadMaterias + "Y su nombre es: " + nombreMenorCantidadMaterias);
  }
  else {
    console.log("no se ingreso datos")
  }
}//fin ejerci

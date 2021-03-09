/*debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas, 
de cada persona debemos optener los siguientes datos:
Nombre,
Obra Social ("PAMI", "OSDE" o "otras"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con OSDE de mas de 60 años.
b) el nombre y temperatura de la mujer CON OTRA mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% de los pasajeros que pertenecen a PAMI, el precio final tiene un descuento del 25%, 
que solo mostramos si corresponde.*/

function mostrar() {
	let continuar = "si";
	let nombreIngresado;
	let obraSocial;
	let edadIngresada;
	let temperaturaCorporal;
	let sexo;
	//a
	let contPersonasMasSesenta = 0;
	//b
	let edadMujerMenor;
	let nombreDeLaMenor;
	let banderaPuntoB;
	//c 
	let precioTotal;
	let contPersonas = 0;
	//d
	let contAfiPAMI = 0;
	let porcentajeAfiPAMI;
	let precioFinal25Desc;

	while (continuar == "si") {



		nombreIngresado = prompt("Ingrese el nombre");

		while (isNaN(nombreIngresado) == false) {
			nombreIngresado = prompt("Error# Ingrese el nombre");
		}

		obraSocial = prompt("Ingrese la obra social PAMI/OSDE/OTRAS");

		while (isNaN(obraSocial) == false || obraSocial != "PAMI" && obraSocial != "OSDE" && obraSocial != "OTRAS") {
			obraSocial = prompt("Error# Ingrese la obra social PAMI/OSDE/OTRAS");
		}

		edadIngresada = prompt("Ingrese la edad mayor a 17");
		edadIngresada = parseInt(edadIngresada);

		while (isNaN(edadIngresada) == true || edadIngresada < 17 || edadIngresada > 100) {
			edadIngresada = prompt("Error# Ingrese la edad mayor a 17");
			edadIngresada = parseInt(edadIngresada)
		}


		temperaturaCorporal = prompt("Ingrese la temperatura corporal");
		temperaturaCorporal = parseFloat(temperaturaCorporal);

		while (isNaN(temperaturaCorporal) == true || temperaturaCorporal < 25 || temperaturaCorporal > 45) {
			temperaturaCorporal = prompt("Error# Ingrese la temperatura corporal");
			temperaturaCorporal = parseFloat(temperaturaCorporal)
		}

		sexo = prompt("Ingrese el sexo F/M");

		while (isNaN(sexo) == false || sexo != "F" && sexo != "M") {
			sexo = prompt("Error# Ingrese el sexo F/M");
		}





		switch (obraSocial) {
			case "OSDE":
				if (edadIngresada > 60) {

					contPersonasMasSesenta++;
				}

				break;

			case "PAMI":

				contAfiPAMI++

				break;

			case "OTRAS":
				if (sexo == "F") {


					if (banderaPuntoB == 0 || edadIngresada < edadMujerMenor) {
						edadMujerMenor = edadIngresada;
						nombreDeLaMenor = nombreIngresado;
						temperaturaDeLaMenor = temperaturaCorporal;

						banderaPuntoB = 1;
					}
				}

				break;
		}

		contPersonas++;
		continuar = prompt("¿desea ingresar otra persona?");
	}//cierre while
	if (contPersonasMasSesenta > 0) {


		console.log("LA CANTIDAD DE PERSONAS MAYORES DE 60 Y QUE TIENEN OSDE ES: " + contPersonasMasSesenta);
	}
	else {
		console.log("no se registran datos");
	}

	if (banderaPuntoB > 0) {

		console.log("el nombre de la mujer mas joven con otra obra social es: " + nombreDeLaMenor + "y su temperatura es: " + temperaturaDeLaMenor);
	}
	else {
		console.log("no se registran datos");
	}

	porcentajeAfiPAMI = (contAfiPAMI * 100 / contPersonas);
	if (contPersonas > 0) {

		console.log("el precio del viaje sin descuento es: " + precioTotal);
	}
	else {
		console.log("no se registran datos");
	}

	porcentajeAfiPAMI = (contAfiPAMI * 100 / contPersonas);
	if (porcentajeAfiPAMI > 0.50) {
		precioFinal25Desc = (precioTotal * 25 / 100) - precioTotal;
		console.log("el precio del viaje con descuento es: " + precioFinal25Desc);
	}
	else {
		console.log("no se aplica descuento");
	}

}//fin ejercicio

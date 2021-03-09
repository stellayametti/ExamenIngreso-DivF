/*Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
Categoria ("desinfectante", "bactericida", "detergente" ) y el fabricante.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto // pormedio contador sumadorn shitc 
b) La categoria con mas cantidad de unidades en total de la compra
c) Cuántas unidades de detergente con precios menos a 200 (inclusive) se compraron en total
d) el fabricante y Categoria del más caro de los productos*/
function mostrar() {
	let tipoProductoIngresado;
	let cantidad;
	let precio;
	let categoria;
	let fabricante;
	let contador = 0;
	let promedioA;
	let contA = 0;
	let sumA = 0;
	let promedioI;
	let contI = 0;
	let sumI = 0;
	let promedioQ;
	let contQ = 0;
	let sumQ = 0;
	let banderaPuntoB = 0;
	let cantidadMayor;
	let categoriaMayor;
	let acumDet200 = 0;
	let banderaPuntoD = 0;
	let productoMasCaro;
	let categoriaMasCara;
	let fabricanteMasCaro;




	for (contador = 0; contador < 5; contador++) {

		tipoProductoIngresado = prompt("Ingrese el  tipoProductoIngresado producto ALCOHOL/IAC/QUAT");

		while (isNaN(tipoProductoIngresado) == false || tipoProductoIngresado != "ALCOHOL" && tipoProductoIngresado != "IAC" && tipoProductoIngresado != "QUAT") {

			tipoProductoIngresado = prompt("Error# Ingrese el  tipoProductoIngresado producto  ALCOHOL/IAC/QUAT");
		}

		cantidad = prompt("Ingrese la cantidad  requerida (0-1000)");
		cantidad = parseInt(cantidad);

		while (isNaN(cantidad) == true || cantidad < 0 || cantidad > 1000) {
			cantidad = prompt("Error# Ingrese una cantidad  valida  (0-1000)");
			cantidad = parseInt(cantidad)
		}

		precio = prompt("Ingrese el precio(100-300)");
		precio = parseInt(precio);

		while (isNaN(precio) == true || precio < 100 || precio > 300) {
			precio = prompt("Error# Ingrese una cantidad  valida  (0-1000)");
			precio = parseInt(precio)
		}

		categoria = prompt("Ingrese la categoria desinfectante/bactericida/detergente");
		while (isNaN(categoria) == false || categoria != "desinfectante" && categoria != "bactericida" && categoria != "detergente") {
			categoria = prompt("Error# Ingrese el  tipo producto  nuevamente desinfectante/bactericida/detergente ");
		}

		fabricante = prompt("Ingrese el fabricante");
		while (isNaN(fabricante) == false) {
			fabricante = prompt("Error# Ingrese el fabricante");
		}

		switch (tipoProductoIngresado) {

			case "ALCOHOL":
				sumA = sumA + cantidad;
				contA++;

				break;

			case "IAC":
				sumI = sumI + cantidad;
				contI++;

				break;

			case "QUAT":
				sumQ = sumQ + cantidad;
				contQ++;
				break;
		}

		if (banderaPuntoB == 0 || cantidad > cantidadMayor) {
			cantidadMayor = cantidad;
			categoriaMayor = categoria;

			banderaPuntoB = 1;
		}
		if (tipoProductoIngresado == "DETERGENTE" && precio < 200) {
			acumDet200 = acumDet200 + cantidad;

		}

		if (banderaPuntoD == 0 || precio > productoMasCaro) {
			productoMasCaro = precio;
			fabricanteMasCaro = fabricante;
			categoriaMasCara = categoria;

			banderaPuntoD = 1;
		}


	}//cierre de for

	if (contA > 0) {
		promedioA = sumA / contA;
		console.log("el promedio de alcohol es: " + promedioA);
	}
	else {
		console.log("no se vendio alcohol");
	}
	if (contI > 0) {
		promedioI = sumI / contI;
		console.log("el promedio de IAC es: " + promedioI);
	}
	else {
		console.log("no se vendio IAC");
	}
	if (contQ > 0) {
		promedioQ = sumQ / contQ;
		console.log("El promedio de QUAT es: " + promedioQ);
	} else {
		console.log("no se vendio QUAT");
	}
	if (banderaPuntoB > 0) {
		console.log("la categoria con mas cantidad de unidades es:" + categoriaMayor);
	}
	else {
		console.log("no existen datos");
	}

	if (acumDet200 > 0) {
		console.log("Se compraron en total: " + acumDet200 + "detergentes con valor menor a 200");
	}
	else {
		console.log("No ingreso producto");
	}
	console.log("el fabricante del producto mas caro es: " + fabricanteMasCaro + "Yla categoria es: " + categoriaMasCara);


}//FIN EJERCICIO7777final
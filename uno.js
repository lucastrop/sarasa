function mostrar() {
let nombreIngresado;
let tipoIngresado;
let sangreIngresada;
let edadIngresada;
let sexoIngresado;
let edadMasJoven;
let tipoMasJoven;
let promedioEdadRep = 0;
let sexoMasJoven;
let porcentajeAves = 0;
let mayorCantidad;

let contAves = 0;
let contReptiles = 0;
let contMamiferos = 0;
let contTotalMascotas = 0;
let acumEdadRept = 0;
let flagJoven = 1;
let respuesta;

  do{
nombreIngresado = prompt("Ingrese el nombre de su mascota (entre 3 y 8 caracteres)").toLowerCase();
while (!isNaN(nombreIngresado) || nombreIngresado.length < 3 && nombreIngresado.length > 8){
  nombreIngresado = prompt("ERROR. longitud de nombre inválida. Ingrese el nombre de su mascota (entre 3 y 8 caracteres)").toLowerCase();
  }
  tipoIngresado = prompt("Ingrese tipo (mamifero/ave/reptil)").toLowerCase();
while (tipoIngresado != "mamifero" && tipoIngresado != "ave" && tipoIngresado != "reptil"){
tipoIngresado=prompt("ERROR. Ingrese un tipo válido (mamifero/ave/reptil)").toLowerCase;
}
if (tipoIngresado == "reptil"){
  sangreIngresada = "fria";
}
else{
  sangreIngresada = prompt("Ingrese tipo de snagre (fria/calida").toLowerCase;
  while(!isNaN(sangreIngresada) || sangreIngresada != "fria" && sangreIngresada != "calida"){
    sangreIngresada = prompt("ERROR. Ingrese tipo de sangre válido (fria/calida").toLowerCase;
  }
}
edadIngresada = parseInt(prompt("Ingrese la edad de su mascota."));
while(edadIngresada = 0 || isNaN(edadIngresada)){
  edadIngresada = parseInt(prompt("ERROR. Por favor ingrese un número mayor que 0."));
}

sexoIngresado = prompt("Ingrese el sexo de su mascota (m de macho o h de hembra)").toLowerCase;
while(!isNaN(sexoIngresado) || sexoIngresado != "m" && sexoIngresado != "h"){
  sexoIngresado = prompt("ERROR. Ingrese el sexo de su mascota, solo se acepta m de macho o h de hembra").toLowerCase;
}
switch(tipoIngresado){
  case "mamifero":
    contMamiferos++;
    contTotalMascotas++;
    break;
  case "reptil":
    contReptiles++;
    contTotalMascotas++;
    acumEdadRept += edadIngresada;
    break;
  case "ave":
    contAves++;
    contTotalMascotas++;
    break;
}
if(flagJoven == 1){
edadMasJoven = edadIngresada;
sexoMasJoven = sexoIngresado;
tipoMasJoven = tipoIngresado;
flagJoven = 0;
}
else if (flagJoven == 0 && edadIngresada < edadMasJoven){
  edadMasJoven = edadIngresada;
  sexoMasJoven = sexoIngresado;
  tipoMasJoven = tipoIngresado;
}
respuesta = prompt("Desea registrar mas mascotas? (si/no)").toLowerCase;
while (!isNaN(respuesta) || respuesta != "si" || respuesta != "no");{
  respuesta= prompt ("ERROR. Por favor responda. Desea registrar mas mascotas? (si/no)").toLowerCase;
}
} while( respuesta != "no");

// punto a
promedioEdadRep = acumEdadRept /contReptiles;
document.write("El promedio de edad de los reptiles es "+ promedioEdadRep + "</br>" );
//punto b
document.write(" La edad de la mascota mas joven es " + edadMasJoven + " y su sexo es " + sexoMasJoven + "</br>");
//punto c
porcentajeAves = contAves*100/contTotalMascotas;
document.write("El porcentaje de aves es "+ porcentajeAves + "</br>" );
// punto d
if( contAves >= contMamiferos && contMamiferos > contReptiles)
mayorCantidad = "aves";
else if ( contMamiferos > contAves && contMamiferos > contReptiles){
  mayorCantidad = "Mamiferos";
}
else{
  mayorCantidad = "Reptiles";
}
document.write("La mayor cantidad fueron "+ mayorCantidad + "</br>" );
}
function mostrar() {
  let nombre;
  let carrera;
  let sexo;
  let cantMaterias = 0;
  let notaPromedio=0;
  let edad;
  

  let flagMasMaterias = 1;
  let flagAlumnajoven =1;
  let FlagmejorPromedio=1;
  let cantmasmaterias;
  let mejorpromedio;
  let alumnaMasJoven;
  let edadmasjoven;
  let contquimica;
  let contfisica;
  let contsistemas;
  let porcQuimica;
  let porcFisica;
  let porcSistemas;
  let edadmasmaterias;
  let nombremasmaterias;
  let nombreMejorPromedio;

 for( let i = 1; i <= 500 ; i++){
nombre = prompt("Ingrese nombre");
carrera = prompt ("Ingrese carrera. (Quimica/Fisica/Sistemas)").toLowerCase;
while( !isNan(carrera) || carrera != "quimica" && carrera != "fisica" && carrera != "sistemas"){
carrera = prompt ("ERROR. Ingrese carrera válida (quimica/fisica/sistemas").toLowerCase;
 }
 sexo= prompt("Ingrese sexo (masculino - femenino  - no binario").toLowerCase;
 while(!isNan(sexo) || sexo != "masculino" && sexo != "femenino" && sexo != "no binario"){
   sexo= prompt("ERROR. Inrgese sexo valido (masculino-femenino- no binario).").toLowerCase;
 }
cantMaterias= parseInt(prompt("Ingrese cantidad de materias (entre 1 y 5"));
while(isNaN(cantMaterias) || cantMaterias < 1 || cantMaterias > 5){
  cantMaterias = prompt("ERROR. Solo puede hacer entre 1 y  5 materias, ingrese un número válido.");
}
notaPromedio = parseInt(prompt ("Ingrese nota promedio del alumno (entre 0 y 10)"));
while(isNaN(notaPromedio) || notaPromedio < 0 || notaPromedio > 10){
  notaPromedio = parseInt(prompt("ERROR. Ingrese un promedio válido (entre 1 y 10)"));
}
edad = parseInt(prompt("Ingrese edad del alumno."));
while (isNaN(edad) || edad <= 0 || edad > 130){
  edad=parseInt(prompt("ERROR. Ingrese edad del alumno."));
}

switch (carrera){
  case "quimica":
    contquimica++
  break;
  case "fisica":
    contfisica++;
    break;
  case "sistemas":
    contsistemas++;
    break;
}

if ( FlagmejorPromedio = 1 && carrera == "fisica"){
  nombreMejorPromedio = nombre;
  mejorpromedio=promedio;
  FlagmejorPromedio = 0; }
else if (FlagmejorPromedio = 0 && carrera == "fisica" && promedio > mejorpromedio){
  nombreMejorPromedio = nombre;
  mejorpromedi o= promedio;
}

if(flagAlumnajoven == 1 && sexo == "femenino"){
  alumnaMasJoven = nombre;
  edadmasjoven = edad;
  flagAlumnajoven = 0;
}
else if ( flagAlumnajoven == 0 && sexo == "femenino" && edad < edadmasjoven){
edadmasjoven = edad;
alumnaMasJoven = nombre;
}
if(flagMasMaterias == 1 && carrera != "quimica"){
  edadmasmaterias = edad;
  nombremasmaterias = nombre;
  cantmasmaterias= cantMaterias;
  nombremasmaterias = nombre;
  flagMasMaterias = 0;
}
else if(flagMasMaterias == 0 && carrera != "quimica" && cantMaterias > cantmasmaterias){
  edadmasmaterias = edad;
  nombremasmaterias = nombre;
  cantmasmaterias= cantMaterias;
  nombremasmaterias = nombre;
}
}
porcFisica = contfisica * 100 /500;
porcQuimica = contquimica*100/500;
porcSistemas = contsistemas*100/500;

// Punto a
document.write("El nombre del mejor estudiante de fisica es" + nombreMejorPromedio + "</br>");
// Punto b
document.write("El nombre de la alumna mas joven es " + alumnaMasJoven + "</br>");
// Punto c
document.write("El porcentaje de alumnos de fisica es %" + porcFisica + " de quimica es %" + porcQuimica + " y de sistemas es %" + porcSistemas +  "</br>");
// Punto d
document.write("El nombre del que cursa mas materias es " + nombremasmaterias + " y tiene " + edadmasmaterias + "</br>");
}
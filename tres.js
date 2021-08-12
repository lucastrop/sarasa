function mostrar() {

  let juguete;
  let origen;
  let precio;
let contmuñeca;
let contrompec;
let contpelota;
let recaudacion;
let preciorompenacmasbarato;
let promedioprecioimportados;


  do{
juguete =prompt("Ingrese juguete (muñeca, rompecabezas o pelota)");
while(juguete != "muñeca" && juguete != "pelota" && juguete != "rompecabezas")
juguete = prompt("ERROR. Ingrese juguete valido (muñeca, rompecabezas, pelota)");

origen=prompt("Ingrese origen (nacional o importado)")
while( origen != "nacional" && origen != "importado"){
  origen = prompt( "ERROR, ingrese origen nacional o importado");
}
precio = parseFloat(prompt("Ingrese precio entre 1000 y 5000"));
while(precio < 1000 || precio > 5000){
  precio = prompt("ERROR, ingrese precio valido entre 1000 y 5000");
}
  }
// no llegué a terminar pero sé que puedo hacerlo :(
  }

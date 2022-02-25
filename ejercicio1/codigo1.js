var metros;
metros = prompt(
  "Ingrese la distancia a recorrer en metros para saber el medio de transporte adecuado."
);

var transporte;
transporte = metros;
if (metros <= 1000) {
  document.write("Es conveniente ir a pie");
} else if (metros <= 10000) {
  document.write("Es conveniente ir en bicicleta");
} else if (metros <= 30000) {
  document.write("Es conveniente ir en colectivo");
} else if (metros <= 100000) {
  document.write("Es conveniente ir en auto");
} else {
  document.write("Es conveniente ir en avión");
}

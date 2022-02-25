var lista = [1,-9,12,123,-54,345,33,76,147]

var mayorNum = 0
console.log("lista de números: ");

for(var i = 0; i<lista.length;i++) {

console.log(lista[i])

if(mayorNum < lista[i]){
  mayorNum = lista[i];
  }
}
console.log("el número mayor es:" + mayorNum);
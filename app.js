var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];
var ex = [".com", ".net", ".us", ".io"];

//Metodo Resumido:
var dominios = [];
for (let l1 of pronoun) {
  for (let l2 of adj) {
    for (let l3 of noun) {
      for (let l4 of ex) {
        dominios.push([l1 + " " + l2 + " " + l3 + " " + l4]);
      }
    }
  }
}
/* console.log(dominios); */



//Metodo Resumido aprobechando la extensión:
var dominios1 = [];
for (let l1 of pronoun) {
  for (let l2 of adj) {
    for (let l3 of noun) {
      for (let l4 of ex) {
        dominios1.push(
          l1 + " " + l2 + " " + l3.slice(0, l3.length - 2) + "." + l3.slice(l3.length -2, l3.length)
        );
      }
    }
  }
}
/* console.log(dominios1);  */





//Metodo Extenso con el aprobechando la extensión :
var combinacion = [];
for (let i = 0; i < pronoun.length; i++) {
  var a1 = pronoun[i];
  for (let a = 0; a < adj.length; a++) {
    var a2 = adj[a];
    for (let b = 0; b < noun.length; b++) {
      var a3 = noun[b];
      for (let c = 0; c < ex.length; c++) {
        var a4 = ex[c];
        combinacion.push(
          a1 + " " + a2 + " " + a3.slice(0, a3.length - 2) + "." + a3.slice(a3.length -2, a3.length)
        );
      }
    }
  }
}
/* console.log(combinacion);  */



//Metodo Extenso con el [".com", ".net", ".us", ".io"];:
var combinacion1 = [];
for (let i = 0; i < pronoun.length; i++) {
  var a1 = pronoun[i];
  for (let a = 0; a < adj.length; a++) {
    var a2 = adj[a];
    for (let b = 0; b < noun.length; b++) {
      var a3 = noun[b];
      for (let c = 0; c < ex.length; c++) {
        var a4 = ex[c];
        combinacion1.push(
          a1 + " " + a2 + " " + a3 + a4 
        );
      }
    }
  }
}
/* console.log(combinacion1); */
const a = 60;
const b = 60;
const c = 80; 
let soma = a+b+c;
if (a<0 || b<0 || c<0) {
    console.log ("Ângulo inválido. Confira os valores novamente!");
}
else if (soma===180) {
    console.log ("true");
}
else {
    console.log ("false");
}

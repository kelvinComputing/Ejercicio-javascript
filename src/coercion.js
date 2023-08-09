//coercion implicito

let valor1=100;
let Valor2="50";

let resultado1=valor1+Valor2; //10050
let resultado2=valor1-Valor2; //50
let resultado3=valor1*Valor2; //5000 
let resultado4=valor1/Valor2; //2

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);

//coercion explicita

let valor3=100;
let Valor4="50";

let calcular=  valor3+Number(Valor4);

console.log (calcular);


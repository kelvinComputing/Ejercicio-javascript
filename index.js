let valor1=prompt('Ingrese el primer numero');
let valor2=prompt('Ingrese el segundo numero');


function numeroMayor(a,b){
if(valor1>valor2){
    console.log('el numero mayor es: '+valor1);
} else if (valor2>valor1){
    console.log('el numero mayor es: '+valor2);
} 
}

numeroMayor(valor1,valor2); 


function suma (a,b){
    console.log('la suma es :',parseInt(a)+parseInt(b));
}

suma(valor1,valor2);  

function resta(a,b){

    console.log('La resta es: ',a-b);
    
}

resta(valor1,valor2);

function multiplicacion(a,b){
    console.log('la multiplicacion es :',a*b);
}

multiplicacion(valor1,valor2);

function raizcuadrada (a,b){
    console.log('la raiz cuadrada del valor uno es :',Math.sqrt(a));
    console.log('la raiz cuadrada del valor dos es :',Math.sqrt(b)); 
}

raizcuadrada(valor1,valor2);

let nombre=prompt('Ingrese un nombre');

function longitud(a){
    console.log('la longitud del nombre es :',nombre.length);
}

longitud(nombre);

let nombre2= nombre.split("").reverse().join("");
console.log ('el nombre invertido es :' +nombre2);

let repetir=prompt('Cuantas veces quiere repetir');

let nombre3= nombre2.repeat(repetir);

console.log ('repetir cadena :'+nombre3);

let fruta= new Array ('manzana','pera', 'cambur', 'aguacate');
console.log ('el arreglo son :',fruta);

let fruta2= fruta.reverse().join("");

console.log ('el narreglo de las frutas invertido es :' ,fruta2);

let  numa=  ['1','2','3'];
let sum=0;

for (let i= 0; i < numa.length; i++) {
    sum += parseInt (numa[i]);
}
console.log(sum);













    
    






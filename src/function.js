//  funcion declarativa
function saludar(nombre){
    console.log("Hola " + nombre);
}

saludar('kelvin');

// funcion de expresión o anonima

let funcionExpresion = function (queSoy){
    console.log ('Yo soy una funcion de expresion ' +queSoy);
}

// arrow function

const funcionFlecha = () => {
    console.log ('soy una funcion flecha');
}


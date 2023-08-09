var soyunavariableglobal= 'Soy global';

function context(){
    let soyunavariablelocal='Soy una variable local';
    console.log('Variable llamada dentro del scope local '+soyunavariableglobal);
    console.log('Variable local llamada desde un scope local ' +soyunavariablelocal);
}

console.log (soyunavariablelocal);
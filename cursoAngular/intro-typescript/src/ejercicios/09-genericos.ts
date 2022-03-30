/*
    ===== Código de TypeScript =====
*/
//genericos :
// con la T indicamos que el dato sera de cualquier tipo generico, cualquier tipo de dato que se especifique
//puede ser T como F o otra letra pero por convencion se usa la T

function queTipoSoy<T>(argumento: T){
    return argumento;
}

let soyString = queTipoSoy('Hola mundo');
let soyNumero = queTipoSoy( 100 );
let soyArreglo = queTipoSoy([1,2,3,4,5,6,7,8,9,10]);

let soyExplicito = queTipoSoy<number>( 100 );

// CLASE 26 GENERICOS






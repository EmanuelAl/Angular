/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
    nombre: string;
    hijos?: string[];//opcional
}

//pasajero sin hijos
const pasajero1: Pasajero = {
    nombre: 'Fernando'
}
//pasajero con hijos
const pasajero2: Pasajero = {
    nombre:'Melissa',
    hijos: ['Natalia', 'Mateo']
}

function imprimirHijos( pasajero: Pasajero): void{
    //encadenamiento opcional
    const cuantosHijos = pasajero.hijos?.length || 0;//si no tiene hijos devolvera undifined solamente ó 0

    console.log( cuantosHijos);
}


imprimirHijos( pasajero1 );

//CLASE 28 

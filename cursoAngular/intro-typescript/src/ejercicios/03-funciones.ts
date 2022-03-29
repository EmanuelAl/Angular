/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number {
    return a + b;
}
//funcion fecla clasica
const sumarFecha = (a: number, b: number): number => {
    return a + b;
}
//            parametros: obligatorio,      opcional,     con valor por defecto
function multiplicar(numero: number, otroNumero?: number, base: number = 2): number{
    return numero * base;
}


// const resultado = multiplicar( 5, 10 );//imprime 10
const resultado = multiplicar( 5, 0, 10);//imprime 50

// console.log(resultado);



interface PersonajeLOR {
    nombre: string;
    puntosVida: number;
    mostrarHp: () => void;
}

//definimos una funcion para curar al personaje
function curar( personaje: PersonajeLOR, curarX: number): void {
    personaje.puntosVida += curarX;

    // console.log( personaje );
}
//creamos un objeto
const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    puntosVida: 50,
    mostrarHp(){
        console.log('Puntos de vida:', this.puntosVida)
    }
}

curar(nuevoPersonaje, 20);

nuevoPersonaje.mostrarHp();
/*
    ===== Código de TypeScript =====
*/
interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}
//desestructuracion de objetos
// es la forma de extraer ciertas propiedades de un objeto para crear variables
    // asi le ponemos un nombre distinto al propiedad volumen si quieramos:
    // const { volumen: vol, segungo, cancion, detalles} = reproductor
const { volumen : vol, segundo, cancion, detalles } = reproductor;//objeto
const { autor } = detalles;//objeto

//en vez de escribir el codigo de la sig forma(no esta malpero puede ser pesado de leer), 
//podemos usar la desesctruracion para crear variables desde las propiedades y escribir menos
// console.log('El volumen actual de: ',reproductor.volumen);
// console.log('El segundo actual de: ',reproductor.segundo);
// console.log('La cancion actual de: ',reproductor.cancion);
// console.log('El autor es: ',reproductor.detalles.autor);

//usando variables creadas con desestructuracion:
console.log('El volumen actual de: ',vol);
console.log('El segundo actual de: ',segundo);
console.log('La cancion actual de: ',cancion);
console.log('El autor es: ',autor);


//desestructuracion de arreglos (importa su posicion y no el nombre que se crea para obtener el elemento del arreglo)
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
// const [p1, p2, p3] = dbz;
const [, , p3] = dbz;//si solo necesitara crear una variable para el tercer elemento('Trunks)

// console.log('Persnaje 1:',dbz[0]);
// console.log('Persnaje 2:',dbz[1]);
// console.log('Persnaje 3:',dbz[2]);

// console.log('Persnaje 1:',p1);
// console.log('Persnaje 2:',p2);
console.log('Persnaje 3:',p3);
/*
    ===== Código de TypeScript =====
*/

interface SuperHeroe {
    nombre: string;
    edad: number;
    //en vez de hacer esto en caso de declara un objeto anidado y sus tipos
    // direccion: {
    //     calle: string;
    //     pais: string;
    //     ciudad: string;
    // };
    //se crea otra interfaz llamada Direccion y se agrega asi:
    direccion: Direccion;
    mostrarDireccion: () => void;
}
//creamos la interfaz para indicar los tipos del objeto anidado que hay dentro de direccion, por separado
//lo hacemos asi para que sea mas ordenado y limpio el codigo
interface Direccion {
    calle: string;
    pais: string;
    ciudad: string;
}

const superHeroe: SuperHeroe = {
    nombre:'Spiderman',
    edad: 30,
    direccion: {
        calle:'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion() {
        return this.nombre +', '+ this.direccion.ciudad +', '+ this.direccion.pais;
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);

if(superHeroe.nombre.indexOf('Spiderman')){
    console.log('existe');
}
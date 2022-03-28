/*
    ===== Código de TypeScript =====
*/

// let habilidades: (string | number | boolean)[] = ['string', 10, true];
let habilidades: string[] = ['Bash','Counter', 'Heading'];


//se usa para definir como un objeto debe lucir o debe tener
interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string; // propiedad opcional por tener el ?:
}

//               interface implementada
const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash','Counter', 'Heading']
}

personaje.puebloNatal = 'Pueblo Paleta';//propiedad agregada al objeto

console.table(personaje);// muestra el objeto en consola en forma de tabla
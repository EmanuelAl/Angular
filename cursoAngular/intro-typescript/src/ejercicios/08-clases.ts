/*
    ===== Código de TypeScript =====
*/
//diferencias entre clases y interfaces
/*
no puedes instanciar un objeto de una interface
no puedes implementar metodos getters and setters
ni tampoco declarar visibilidad a las propiedades

la interface solo sirve para obligar a una clase u objeto
a que tengan definidos ciertas propiedades y metodos , y 
que esos metodos y propiedades sean 
de un tipo de datos especifico
*/


/*
private se accede dentro de la clase
public se accede desde dentro y fuera de la clase
static se accede sin tener que instanciar primero la clase

sino se especifica el nivel de visibilidad de la propiedad, por defecto son publicas
*/


class PersonaNormal {

    constructor( 
        public nombre: string, 
        public direccion: string
        ) {}

}




class Heroe extends PersonaNormal {
    //asi declaradas las propiedades por defecto son publicas
    // alterEgo: string;
    // edad: number;
    // nombreReal: string;

    // constructor( alterEgo: string) {//funcion que es llamada cuando se instancia la clase
    //     this.alterEgo = alterEgo;
    // }
    // forma facil
    constructor(
        public alterEgo: string,
        public edad?: number,//opcional
        public nombreReal?: string//opcional
        ) {
            super(nombreReal, 'New York, USA');//super() hace referencia al constructor de la clase extendida en este caso es PersonaNormal
        }
}

const ironman = new Heroe('Iroman', 45, 'Tony');

console.log(ironman);
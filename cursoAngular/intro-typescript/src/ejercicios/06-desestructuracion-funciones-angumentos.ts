/*
    ===== Código de TypeScript =====
*/
interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 150
}

const tableta: Producto = {
    desc: 'iPad Air',
    precio: 350
}
//funcion calcula impuesto sobre venta
function calculaISV(productos: Producto[]): [number, number]{

    let total = 0;
//desestructuracion de argumento objeto
                        //aqui
    productos.forEach( ({precio}) => {
        total += precio;
    });
    return [total, total * 0.15];//devuelve array de tipos number, number
}

const articulos = [ telefono, tableta];

//desestructutamos el arreglo que devuelve la funcion,y creamos variables total y isv
const [ total, isv] = calculaISV(articulos);
console.log('Total',total);
console.log('ISV',isv);



// const isv = calculaISV(articulos);
// console.log('ISV',isv);
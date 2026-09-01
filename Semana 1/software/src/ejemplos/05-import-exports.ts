import {type Producto, calcularImpuesto,  type ImpuestoOpciones} from './04-desestructurador-objectos';

const carritoCompras: Producto[] = [
    {
        descripcion: 'Samsung',
        precio: 200
    },
    {
        descripcion: 'Xiaomi',
        precio: 300
    }
];

const opciones: ImpuestoOpciones =  {
        impuesto: 0.2,
        productos: carritoCompras
    }
const [total, impuesto] = calcularImpuesto(opciones);
console.log({total, impuesto});

- Crear un archivo con 2 interfaces, 
- Otro archivo con una funcion que reciba por parametro un objeto de 
tipo de una interfaz y retorne un string con un datos del objeto 
- otro archivo que haga el llamado de la funcion y muestra en Consola
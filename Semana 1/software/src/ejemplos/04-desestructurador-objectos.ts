interface DetalleI {
    autor: String;
    anio: number;
}

interface ReproductorAudioI {
    volumen: number;
    duracionCancion: number;
    cancion: String;
    detalle: DetalleI
}

const reproductorAudio: ReproductorAudioI = {
    volumen: 70,
    duracionCancion: 23,
    cancion: 'Nombre cancion',
    detalle: {
        autor: 'Pepito perez',
        anio: 2023
    }
}
const autors: String = reproductorAudio.detalle.autor;
//const cancion = 'Otro uso';

const { cancion, duracionCancion, detalle:{ autor } } = reproductorAudio;
//const {autor} = detalle;
console.log({ cancion, duracionCancion, autor });

//Arrays

const frutas = ['Peras', 'Manazanas', 'Fresas', 'Duraznos', 'Arandanos']
console.log('Fruta Nº 3 -> ' + frutas[4]);

const [, , f3, , f5 = 'No hay nada'] = frutas;
console.log('Fruta Nº 3 -> ' + f3);
console.log('Fruta Nº 3 -> ' + f5);

// Desestructurar funciones

export interface Producto {
    descripcion: String;
    precio: number;
}

const celular: Producto = {
    descripcion: 'Samsung',
    precio: 200
}
const computador: Producto = {
    descripcion: 'Xiaomi',
    precio: 150
}

const carrito: Producto[] = [celular, computador];
const impuesto = 0.19;

export interface ImpuestoOpciones {
    impuesto: number;
    productos: Producto[];
}

export function calcularImpuesto (opciones: ImpuestoOpciones): [number,number] {
    const {impuesto, productos} = opciones;
    let total = 0;
    productos.forEach(({precio}) => {
        total += precio;
    });
    return [total, total * impuesto]
}

const opciones: ImpuestoOpciones = {
        impuesto,
        productos: carrito
    };

const resultado = calcularImpuesto(opciones)

console.log('Total ->', resultado[0]);
console.log('Impuesto ->', resultado[1])


hola

{contenido: "Hola"}
{contenido: 5}
{contenido: {nombre: "aaaa"}}
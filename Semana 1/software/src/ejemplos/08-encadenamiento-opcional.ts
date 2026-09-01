export interface Pasajero {
    nombre: string;
    hijos?: string[];
}
const pasajero1: Pasajero = {
    nombre: 'Pepito',
    hijos: []
}

const pasajero2: Pasajero = {
    nombre: 'Juanito',
    hijos: ['Andres', 'Camilo']
}

const mostrarHijos = (pasajero: Pasajero) => {
    const cantidadHijos = pasajero.hijos?.length ?? 0
    console.log(cantidadHijos);
}

mostrarHijos(pasajero1)
mostrarHijos(pasajero2)

https://shorturl.at/5e52h

321 394 5466
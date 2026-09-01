function multiplar(primerNumero: number, SegundoNumero?: number, base: number = 0) {
    return primerNumero * base;
}

const resultado = multiplar(5);

//console.log(resultado);

//// ------

interface JugadorI {
    nombre: String;
    vida: number;
    mostrarResumen: () => void
}

const vidaJugador = (jugador:JugadorI, valor:number) => {
   jugador.vida += valor;
} 

const jugadroUno: JugadorI = {
    nombre: 'Pepito',
    vida: 30,
    mostrarResumen() {
        console.log(`Jugador ${this.nombre} con ${this.vida} puntos de vida`);
    }
}

jugadroUno.mostrarResumen();
vidaJugador(jugadroUno, 22);
jugadroUno.mostrarResumen();

const jugadroDos: JugadorI = {
    nombre: 'Perez',
    vida: 21,
    mostrarResumen() {
        console.log(`Señor ${this.nombre} con ${this.vida} puntos adicionales`);
    }
}

jugadroDos.mostrarResumen();
vidaJugador(jugadroDos, 22);
jugadroDos.mostrarResumen();


const jugadores:JugadorI[] = [jugadroDos, jugadroUno];

interface DireccionI {
    ciudad: String;
    pais: String;   
}

interface Usuario {
    id: number;
    nombre: String;
    email: String;
    activo: Boolean;
    roles: String[];
    direccion: DireccionI;
    saludar: () => String;
    actualizarEmail: (nuevoEmail: string) => void
}

const usuario1: Usuario = {
    id: 1,
    nombre: "Ana Pérez",
    email: "ana@example.com",
    activo: true,
    roles: ["admin", "editor"],
    direccion: {
        ciudad: "Bogotá",
        pais: "Colombia"
    },
    saludar () {
        return `Hola, mi nombre es ${this.nombre}`;
    },
    actualizarEmail(nuevoEmail: string) {
        this.email = nuevoEmail;
    }
};

export class Persona {

    constructor(
        public nombre: string,
       private direccion: string,
       public identificacion: string
    ){}
}


// console.log(persona.direccion);

// Extender 

export class Trabajador {

    constructor(
        public persona: Persona,
        public cargo: string,
        public empresa: string,
        public direccionEmpresa: string
    ){
     }
}
const persona = new Persona('Pepito','Unillanos', '111');
console.log(persona);
console.log(persona.nombre);

const trabajador = new Trabajador(persona,'Dev', 'Unillanos', 'san antonio');
console.log(trabajador);

//. Composicion

https://shorturl.at/n0ei3
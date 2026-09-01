let caracteristicas: String[] = ['Alto', 'Veloz'];
console.log(caracteristicas);

let apellido: String = 'Perez';

interface PersonaI {
    nombre: String;
    edad: number;
    caracteristicas: String[];
    ciudad?: String;
}

const persona: PersonaI = {
    edad: 20,
    nombre: 'Pepito',
    
    caracteristicas:['Alto', 'Veloz'],
}
persona.ciudad = 'Villavicencio';
console.log(persona.nombre);
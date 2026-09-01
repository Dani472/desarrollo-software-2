
export function verTipo<T>(argumento: T) : { contenido: T} {
    return {contenido: argumento};
}

const tipoString = verTipo('aaaaa');
const tipoNumber = verTipo(2);
const tipoBooleano = verTipo(false);
console.log(tipoString);
console.log(tipoNumber);
console.log(tipoBooleano);


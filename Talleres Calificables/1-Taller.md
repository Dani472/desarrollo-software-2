# Taller práctico de TypeScript
## Sistema de Gestión de Vehículos

### Modalidad
Individual — Trabajo en casa.

## Objetivo

Desarrollar una pequeña aplicación utilizando **Vite + Vanilla TypeScript** que permita aplicar los principales conceptos vistos durante las sesiones de TypeScript:

- Tipos de datos.
- Arrays y objetos.
- Interfaces.
- Propiedades opcionales.
- Funciones.
- Desestructuración.
- Importaciones y exportaciones.
- Clases.
- Genéricos.
- Encadenamiento opcional `?.`.
- Operador Nullish Coalescing `??`.

---

# Contexto

Una empresa necesita desarrollar un pequeño sistema para administrar información sobre los vehículos disponibles en su inventario.

Cada vehículo tendrá información como marca, modelo, año, precio, tipo de combustible, estado, características e información del propietario cuando exista.

El objetivo es construir la lógica del sistema utilizando **TypeScript**, separando correctamente las responsabilidades en diferentes archivos.

> No es necesario desarrollar una interfaz gráfica elaborada. Los resultados pueden mostrarse utilizando `console.log()`.

---

# 1. Creación del proyecto

Crear un proyecto utilizando **Vite + Vanilla TypeScript**:

```bash
npm create vite@latest
```

Seleccionar:

```text
Vanilla
TypeScript
```

Instalar las dependencias y ejecutar el proyecto:

```bash
npm install
npm run dev
```

Eliminar del proyecto los archivos y recursos que no sean necesarios.

---

# 2. Estructura del proyecto

Dentro de `src` crear una estructura similar a la siguiente:

```text
src/
│
├── interfaces/
│   ├── vehiculo.interface.ts
│   └── propietario.interface.ts
│
├── clases/
│   └── vehiculo.class.ts
│
├── funciones/
│   └── vehiculos.ts
│
├── data/
│   └── vehiculos.data.ts
│
└── main.ts
```

Cada archivo deberá utilizar correctamente `import` y `export`.

---

# 3. Interfaces

Crear una interfaz llamada `Vehiculo` que contenga como mínimo:

- `id`
- `marca`
- `modelo`
- `anio`
- `precio`
- `combustible`
- `estado`
- `caracteristicas`
- `propietario`

Defina correctamente el tipo de cada propiedad.

## Reglas

`combustible` solamente puede contener alguno de los siguientes valores:

- `Gasolina`
- `Diesel`
- `Electrico`
- `Hibrido`

`estado` solamente puede contener:

- `Disponible`
- `Vendido`
- `Mantenimiento`

`caracteristicas` debe ser un arreglo de strings.

La propiedad `propietario` debe ser **opcional**.

---

# 4. Interfaz Propietario

Crear una segunda interfaz llamada `Propietario`.

Debe contener:

- `nombre`
- `documento`
- `telefono`
- `email`
- `direccion`

La propiedad `direccion` debe ser opcional.

Posteriormente utilice esta interfaz para definir correctamente la propiedad `propietario` de `Vehiculo`.

---

# 5. Datos iniciales

En `data/vehiculos.data.ts` crear un arreglo con mínimo **6 vehículos**.

Ejemplo de la estructura esperada:

```ts
{
  id: 1,
  marca: 'Renault',
  modelo: 'Kwid',
  anio: 2026,
  precio: 65000000,
  combustible: 'Gasolina',
  estado: 'Disponible',
  caracteristicas: [
    'Aire acondicionado',
    'Pantalla multimedia'
  ]
}
```

El arreglo debe estar correctamente tipado.

Agregue diferentes marcas, precios, años y estados.

Por lo menos **dos vehículos deben tener propietario**.

---

# 6. Funciones

Crear las siguientes funciones dentro de `funciones/vehiculos.ts`.

## Función 1 — Mostrar vehículo

Crear:

```ts
mostrarVehiculo(...)
```

Debe recibir un vehículo y retornar un `string` similar a:

```text
Kia Cerato - 2022 - $65.000.000
```

## Función 2 — Calcular descuento

Crear:

```ts
calcularDescuento(...)
```

Debe recibir un vehículo y un porcentaje de descuento.

Debe retornar el precio final del vehículo.

Ejemplo:

```text
Precio: 80.000.000
Descuento: 10%
Resultado: 72.000.000
```

Defina correctamente los tipos de los parámetros y del retorno.

## Función 3 — Buscar vehículo

Crear:

```ts
buscarVehiculo(...)
```

Debe recibir un arreglo de vehículos y un `id`.

Debe retornar el vehículo encontrado.

Tenga en cuenta que **es posible que el vehículo no exista**.

## Función 4 — Vehículos disponibles

Crear:

```ts
obtenerDisponibles(...)
```

Debe recibir el arreglo de vehículos y retornar únicamente aquellos cuyo estado sea `Disponible`.

## Función 5 — Vehículos por marca

Crear:

```ts
buscarPorMarca(...)
```

Debe recibir los vehículos y una marca, y retornar todos los vehículos pertenecientes a esa marca.

La búsqueda no debe importar si el usuario utiliza mayúsculas o minúsculas.

Por ejemplo, ambas búsquedas deben funcionar:

```ts
buscarPorMarca(vehiculos, 'renault');
buscarPorMarca(vehiculos, 'RENAULT');
```

---

# 7. Desestructuración

Crear una función:

```ts
mostrarResumen(...)
```

Debe recibir un vehículo y utilizar **desestructuración** para obtener:

- `marca`
- `modelo`
- `anio`
- `precio`

La función debe retornar un resumen del vehículo.

---

# 8. Clases

Crear una clase:

```ts
VehiculoService
```

La clase debe almacenar internamente un arreglo de vehículos.

Debe tener como mínimo los siguientes métodos:

```ts
listar()
buscar(id)
agregar(vehiculo)
eliminar(id)
```

### `listar()`
Retorna todos los vehículos.

### `buscar(id)`
Busca un vehículo por su identificador.

### `agregar(vehiculo)`
Agrega un nuevo vehículo al arreglo.

### `eliminar(id)`
Elimina un vehículo utilizando su identificador.

Todos los parámetros y retornos deben estar correctamente tipados.

---

# 9. Encadenamiento opcional

Utilizando uno de los vehículos encontrados, mostrar el teléfono de su propietario.

Utilice obligatoriamente el operador:

```ts
?.
```

El programa no debe generar error si el vehículo no tiene propietario.

---

# 10. Operador `??`

Mostrar la dirección del propietario.

Si no tiene dirección registrada, mostrar:

```text
Dirección no registrada
```

Debe utilizar obligatoriamente el operador:

```ts
??
```

---

# 11. Genéricos

Crear una función genérica:

```ts
obtenerPrimero<T>(...)
```

Esta función debe recibir un arreglo de cualquier tipo y retornar su primer elemento.

Debe probarse con:

```ts
const numeros = [10, 20, 30];
const nombres = ['Ana', 'Carlos', 'Pedro'];
const vehiculos = [...]
```

La misma función debe funcionar correctamente con los tres arreglos.

---

# 12. Integración en `main.ts`

Desde `main.ts` importar los elementos necesarios y realizar las siguientes operaciones:

1. Mostrar todos los vehículos.
2. Mostrar únicamente los disponibles.
3. Buscar un vehículo por `id`.
4. Buscar vehículos por marca.
5. Calcular el descuento de un vehículo.
6. Mostrar el propietario de un vehículo.
7. Mostrar la dirección utilizando `??`.
8. Crear una instancia de `VehiculoService`.
9. Agregar un nuevo vehículo.
10. Eliminar un vehículo.
11. Mostrar nuevamente la lista resultante.
12. Probar la función genérica con números, nombres y vehículos.

Los resultados pueden visualizarse mediante `console.log()`.

---

# Entregables

Se deberá entregar:

- Proyecto completo de Vite + TypeScript.
- Código organizado en diferentes archivos.
- Interfaces correctamente definidas.
- Funciones solicitadas.
- Clase `VehiculoService`.
- Uso de `import` y `export`.
- Uso de `?.` y `??`.
- Función genérica.
- Archivo `main.ts` ejecutando las operaciones solicitadas.

El proyecto deberá ejecutar correctamente mediante:

```bash
npm install
npm run dev
```

---

# Condiciones

- No utilizar `any` para solucionar problemas de tipado.
- Utilizar `"strict": true` en TypeScript.
- No colocar toda la solución dentro de `main.ts`.
- Utilizar interfaces para modelar los datos solicitados.
- Utilizar correctamente `const` y `let`.
- Todas las funciones deben tener parámetros correctamente tipados.
- Los nombres de variables y funciones deben ser descriptivos.
- El proyecto debe compilar sin errores.
- Se debe cargar el proyecto comprimido a un drive y compartir el enlace al correo daniel.munoz.melendez@unillanos.edu.co antes de la clase del dia 28 de Agosto

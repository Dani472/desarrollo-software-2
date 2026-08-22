# Ejercicio: Sistema de Comidas con Modificación y Notificación

## Enunciado

Vas a crear un pequeño sistema en TypeScript que maneje información de comidas y permita modificarlas.

---

### 1. Define la interfaz `Comida`

Debe tener las siguientes propiedades:
- `nombre: string`
- `calorias: number`
- `esVegana: boolean`

---

### 2. Crea algunos objetos que implementen la interfaz `Comida`
Por ejemplo: `pizza`, `ensalada`, `hamburguesa`.

---

### 3. Implementa la clase `ComidaService`

Debe incluir:
- Un método `mostrarInfo(comida: Comida)` que muestre en consola los datos de la comida usando desestructuración.
- Un método `modificarCalorias(comida: Comida, nuevasCalorias: number): Comida` que devuelva una nueva comida con las calorías modificadas.

---

### 4. Implementa la clase `NotificadorComida`

- Recibe en su constructor una instancia de `ComidaService` (inyección de dependencias).
- Debe tener un método `notificar(comida: Comida)` que muestre un mensaje en consola y luego llame a `mostrarInfo` del servicio.

---

### 5. Prueba tu sistema

- Notifica todas las comidas originales (`pizza`, `ensalada`, `hamburguesa`).
- Usa el método `modificarCalorias` para cambiarle las calorías a una de ellas (por ejemplo, pizza).
- Notifica la comida modificada.

---

## Ejemplo de salida esperada en consola

```text
Notificando comida...
Nombre: Pizza, Calorías: 800, ¿Vegana?: false

Notificando comida...
Nombre: Ensalada, Calorías: 150, ¿Vegana?: true

Notificando comida...
Nombre: Hamburguesa, Calorías: 600, ¿Vegana?: false

Notificando comida...
Nombre: Pizza, Calorías: 500, ¿Vegana?: false
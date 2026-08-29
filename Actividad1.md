# Actividad: Signals en Angular

## Objetivo
Poner en práctica la creación de componentes, rutas y el uso de **signals** en Angular, aplicando lo aprendido hasta ahora.

---

## Instrucciones paso a paso

### 1. Agregar Bootstrap
En el archivo `index.html`, dentro de la carpeta `src`, agrega la siguiente importación en la sección `<head>`:

```html
<link 
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" 
  rel="stylesheet" 
  integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" 
  crossorigin="anonymous">
```

### 2. Crear el componente
Crea el componente de Angular correspondiente para este archivo: `src/app/pages/car/car.component.html`

### 3. Configurar la ruta
En el archivo `app.routes.ts`, agrega una nueva ruta para acceder al componente:

```typescript
{
  path: 'car',
  component: CarComponent
}
```

No olvides importar el `CarComponent` en este archivo.

### 4. Crear señales en el componente
Dentro del componente `CarComponent`, crea tres señales con valores iniciales:

- `brand => string = 'Renault'`
- `year => number = 2020`
- `student => string = aqui nombre del estudiante en minuscula`

### 5. Crear el método `getCarDescription`
Debe regresar la concatenación de la marca y el año:

```typescript
getCarDescription() {
  return `${this.brand} - ${this.year}`;
}
```

### 6. Implementar el método `changeCar`
No recibe argumentos y debe cambiar los valores a:

- `brand = 'Kia'`
- `year = 2021`

### 7. Implementar el método `resetForm`
Establece los valores a:

- `brand = 'Renault'`
- `year = 2020`

### 8. Implementar el método `changeYear`
Asigna este método al evento click del botón respectivo. Debe cambiar el año a `2025`.

### 8. Intenta mostrar el nombre del estudiante en mayuscula 
Muestra el nombre del estudiante en mayúscula sin crear una nueva señal.

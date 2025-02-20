# Ejercicios de Fetch API y Manipulación de Datos 🚀

Este conjunto de ejercicios está diseñado para practicar el uso de la Fetch API y la manipulación de datos en JavaScript, utilizando la API de Random User Generator.

## 🎯 Objetivos de Aprendizaje

- Realizar peticiones a una API usando fetch
- Trabajar con datos en formato JSON
- Extraer información específica de objetos complejos
- Transformar y combinar datos
- (Opcional) Integrar datos dinámicos en HTML

## 📚 Contenido

El proyecto contiene 7 ejercicios principales y 1 ejercicio opcional:

1. **Datos Básicos**: Obtener nombre, email y foto
2. **Información de Contacto**: Extraer datos de contacto
3. **Datos de Localización**: Trabajar con información geográfica
4. **Información de Login**: Manejar credenciales
5. **Datos Personales**: Formatear información personal
6. **Información Combinada**: Combinar múltiples tipos de datos
7. **Datos para Red Social**: Crear perfiles completos
8. **[Opcional] Integración con HTML**: Mostrar datos en una página web

## 🛠️ Tecnologías Utilizadas

- JavaScript (ES6+)
- Fetch API
- Random User Generator API

## 🚦 Primeros Pasos

1. Clona este repositorio
2. Abre el archivo `exercises.js` en tu editor de código
3. Completa cada ejercicio siguiendo las instrucciones en los comentarios
4. Descomenta las llamadas a las funciones para probar tu código
5. Usa la consola del navegador para ver los resultados

## 📡 API Utilizada

Estos ejercicios utilizan la API de Random User Generator:

- URL: https://randomuser.me/api/
- Documentación: https://randomuser.me/documentation

## 💡 Consejos

- Lee la documentación de la API antes de empezar
- Usa `console.log()` para depurar tu código
- Presta atención a la estructura de los datos en los comentarios
- Completa los ejercicios en orden, ya que la dificultad es progresiva

## ✨ Ejemplo de Uso

```javascript
// Ejercicio 1: Obtener datos básicos
async function getBasicInfo() {
  const res = await fetch("https://randomuser.me/api/?results=6");
  const finalRes = await res.json();
  const results = finalRes.results.map((result) => {
    return {
      name: `${result.name.first} ${result.name.last}`,
      email: result.email,
      picture: result.picture.medium,
    };
  });
  console.log(results);
}

getBasicInfo();
```

## 🎯 Resultados Esperados

Cada ejercicio especifica la estructura de datos esperada en los comentarios. Por ejemplo:

```javascript
// Resultado esperado del Ejercicio 1:
[
  {
    name: "Ana García",
    email: "ana.garcia@example.com",
    picture: "https://randomuser.me/api/portraits/med/women/1.jpg",
  },
  // ... más usuarios
];
```

## 🌟 Ejercicio Opcional

Como bonus, se incluye un ejercicio que integra los datos obtenidos con una plantilla HTML. Este ejercicio te permitirá:

- Ver cómo se usan los datos en un contexto real
- Practicar la manipulación del DOM
- Crear una interfaz visual para mostrar los datos

## 📝 Notas

- Todos los ejercicios usan async/await para manejar las promesas
- La API puede tener límites de velocidad, así que no hagas demasiadas peticiones seguidas
- Recuerda manejar posibles errores en tus peticiones fetch

# formacion-web-javascript-basic-algorithm

Este repositorio contiene una práctica básica de algoritmos en JavaScript destinada a repasar conceptos fundamentales (funciones, tipos, condicionales y arrays) y verificar soluciones mediante tests en el navegador.

## Objetivo

Completar las funciones que están inicialmente declaradas en `src/index.js` para que pasen los tests que están definidos en `src/test.js`. La página `index.html` ejecuta los tests y muestra qué ejercicios pasan o fallan.

## Requisitos

- Un navegador moderno (Chrome, Edge, Firefox).  
- Un editor de código (VS Code, Sublime, etc.).  
- No se necesitan dependencias ni servidor; puede abrirse el archivo `index.html` directamente.

## Estructura del proyecto

- `index.html` — Página que carga los scripts y muestra los resultados.  
- `src/index.js` — Archivo con los ejercicios (funciones a implementar).  
- `css/style.css` — `NO TOCAR` Estilos para la página de resultados.  
- `src/test.js` — `NO TOCAR` Conjunto de tests y el runner que muestra resultados en la página.

## Cómo hacer la práctica (paso a paso)

1. Abre el proyecto en tu editor y localiza `src/index.js`. Allí verás una lista de funciones vacías con comentarios que indican lo que deben hacer (ej.: `swapValues`, `greet`, `triangleArea`, ...).
2. Implementa cada función siguiendo la intención de los tests. Mantén tus funciones simples y con nombres claros.
3. Guarda los cambios y abre `index.html` en tu navegador.
4. La página ejecuta los tests automáticamente y mostrará una lista de ejercicios con conteos: ✅ (pasados) y ❌ (fallados). Cada ejercicio se puede desplegar para ver `Expected` y `Received`.
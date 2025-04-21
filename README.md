# Trabajo Práctico - [Nombre de la Materia]

Este repositorio contiene el desarrollo del trabajo práctico asignado por los profesores de la cátedra. El objetivo es organizar el trabajo colaborativo entre los integrantes del grupo de manera estructurada, utilizando ramas específicas para cada consigna o ejercicio.

## 💡 Estructura de trabajo

Cada consigna o ejercicio se desarrollará en una **rama individual**. Cada integrante del grupo será responsable de una rama específica. Esto permitirá trabajar en paralelo, revisar los avances de forma independiente y fusionarlos a la rama principal (`main`) una vez finalizados y revisados.

## 🌱 Nomenclatura de ramas

Las ramas deben nombrarse siguiendo este formato:
### Ejemplos:

- `consigna-1`
- `consigna-2`
- `consigna-3`

> ✅ Usar solo letras minúsculas y guiones para separar palabras.

## 🧑‍💻 Flujo de trabajo

1. **Crear una rama** a partir de `main`:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b consigna-[número]

2. **Desarrollar la consigna asignada en tu rama.** Realizá commits frecuentes y descriptivos.

3. **Sincronizar periódicamente** con la rama main para evitar conflictos:
    ```bash
    git checkout main
    git pull origin main
    git checkout consigna-[número]
    git merge main

4. Una vez finalizada tu parte:
* Asegurate de que el código esté limpio y funcione correctamente.
* Crear un Pull Request (PR) para fusionar tu rama con main.
* Solicitar revisión a tus compañeros.

5. Cuando el PR sea aprobado, se podrá fusionar a main.

## 👥 Integrantes y consignas asignadas

| Nombre completo             | Usuario GitHub       | Consigna/sasignadas    | 
|-----------------------------|----------------------|------------------------|
| Matias Gabriel Ortega       | `@MatiasGOrtega`     | Consigna 1 - 2 - 3 - 4 | 
| Salim Farid Quintar         | `@safaqui00`         | Consigna 1 - 2 - 3 - 4 |
| Lucas Enrique Cari          | `@CariLucky`         | Consigna 1 - 2 - 3 - 4 |
| Rodrigo Alexis Guanactolay  | `@GuanactolayRodrigo`| Consigna 1 - 2 - 3 - 4 | 
| Balcazar Victor Fernando    | `@vfbalcazar08`      | Consigna 1 - 2 - 3 - 4 |

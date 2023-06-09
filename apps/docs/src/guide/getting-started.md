# Comenzar

## Requisitos previos

- **Node.js**: Es necesario contar con la versión 18 o superior de Node.js. La última versión estable de Node.js puede descargarse desde el sitio web oficial [nodejs.org](https://nodejs.org/).

- **PNPM**: Jinen utiliza PNPM como gestor de paquetes predeterminado. Para instalar PNPM, es necesario seguir las instrucciones disponibles en [pnpm.io](https://pnpm.io/es/installation#using-npm).

- **Docker**: Jinen hace uso de Docker para construir imágenes de las aplicaciones e instalar servicios que se utilizan en la plataforma. Docker puede descargarse desde el sitio web oficial [docker.com](https://www.docker.com/get-started/).

- **Editor de texto**: Se recomienda utilizar un editor de texto con soporte de sintaxis markdown como [Visual Studio Code](https://code.visualstudio.com/) junto con las extensiones recomendadas ([Jinen extensions](https://github.com/JinenGroup/platform-next/blob/main/.vscode/extensions.json)).

- **Terminal**: Es necesario disponer de un terminal para acceder a la lista de scripts de Jinen. Se puede utilizar la terminal predeterminada del sistema operativo o una terminal integrada en un editor de texto.

## Iniciar desarrollo

1. Instalar `node_modules`.

   ```sh
   pnpm install
   ```

2. Ejecutar aplicaciones.

```sh
pnpm dev
```

## Entornos de desarrollo

### Docs

- local: <http://localhost:3000>
- dev: <https://docs.dev.jinen.com>
- prod: <https://docs.jinen.com>

### Cms

- local: <http://localhost:3001>
- dev: <https://docs.dev.jinen.com>
- prod: <https://docs.jinen.com>

### Web

- local: <http://localhost:3002>
- dev: <https://dev.jinen.com>
- prod: <https://jinen.com>

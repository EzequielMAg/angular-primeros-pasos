- Fuente: https://www.npmjs.com/package/uuid

- Gracias a esta herramienta podremos crear ID's unicos para nuestros personajes de DBZ en este caso.
<br>

## Pasos a seguir:
- Para poder instalar este paquete externo, debemos ingresar en consola de comandos lo siguiente: "npm i uuid".
  Enter, luego se instala. 

- Aun debemos ingresar otro comando mas: "npm i --save-dev @types/uuid" que instalará una dependencia de desarrollo.
  Ya que de otra forma, no podremos importar el paquete. Al querer importarlo Angular no lo encuentra.

- Luego nos tendria que desaparecer el error, de otra forma actualizamos el VS Code con: "ctrl + shift + p" y ">reload window".

- Dentro del UUID, del paquete, tenemos diferentes versiones de funciones (v1, v2, v3, v4) que son los que generan el id unico.

- Importamos lo siguiente en nuestro file "dbz.service.ts": ``import { v4 } from "uuid";``

- Le cambiamos el nombre de la siguiente forma: ``import { v4 as uuid } from "uuid";``

- v4, ahora renombrado: uuid, como dijimos, es una funcion. Solo tenemos que invocarla y nos retorna un id unico, el cual asignaremos al atributo id de nuestras interfaces que la necesiten.


 

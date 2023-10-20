## Servicios 
- Asi como pensamos en componentes y en modulos, tenemos que empezar a pensar en donde es el lugar correcto o mas conveniente mantener nuestra informacion, es decir, la data o el estado que se va generando a lo largo que las personas estan usando nuestra aplicacion.

- +INFO: https://angular.io/guide/singleton-services 

- Al igual que los componentes y modulos, podemos clearlo con la extension angular schematics o con Angular CLI o con un sniped.

 - Sniped para crear un servicio: a-service (tab):
 import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ServiceNameService {
  constructor() { }
  
}
<br>
- Por el momento vamos a trabajar con servicios publicos.
  Inyectaremos un servicio publico de la siguiente forma:
  ``constructor(private dbzService: DbzService) {}``
    Esto lo realizamos en el archivo "main-page.component.ts", Inyectando el servicio en el componente "MainPageComponent"
<br>
- Recordar que un servicio, que como casi todo en angular, es una clase comun y corriente que puede tener sus propiedades publicas/privadas/estaticas, sus setters y getters, metodos etc, a la que le agregamos un decorador.

- El decorador en particular @Injectable le va a decir a Angular, "a esta clase tratala como un servicio".
<br>
## "providedIn: 'root'"
- A partir de Angular 6, se implemento esta funcionalidad de **"providedIn: 'root'"** que viene por defecto al crear el servicio.  De otra forma, si no trabajaramos con tal "provdedIn: 'root'" tendriamos que definir el servicio en la parte de los "providers" en el modulo principal.
- Entonces al trabajar de esta manera, con el "providedIn: 'root'", el servicio va a ser un Singleton en toda la aplicacion, Angular lo trabaja asi. Significaria que va a ser una unica instancia para toda la app.
<br>

## Servicios privados
- Es una buena practica. Es lo que debemos implementar.
- Una de las razones principales por la que tenemos que hacer los servicios privados es que , si usamos el componente MaingPage Component en otra parte de la app, expondriamos la informacion almacenada en el servicio. Ya que es publico, y se podria modificar algo, se puede perder informacion, o acceso a datos que no queremos que se accedan.
- Si el servicio es private, el servicio esta protegido, la info del servicio esta protegida!
- Debemos agregar metodos getters y otros metodos necesarios que se conecten con el servicio para poder utilizarlo correctamente, en el file "main-page.component.html". 


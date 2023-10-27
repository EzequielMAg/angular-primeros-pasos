import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  //* Inyectando un servicio.
  constructor(private dbzService: DbzService) {

  }

  get characters(): Character[] {
    return [...this.dbzService.characters]; // Usualmente esta es la forma con la que se trabaja. Usando el Spread operator
                                            // para crear otra instancia del arreglo.
                                            // Aunque no es obligatorio, porque muchas veces la informacion que va a obtener el servicio
                                            // va a ser info que viene de una BD, o de un servicio REST,
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.onDeleteCharacterById( id );
  }

  //* Metodo que va a recibir el personaje emitido por el componente hijo
  onNewCharacter(character: Character): void {
    this.dbzService.addCharacter( character );
  }

}

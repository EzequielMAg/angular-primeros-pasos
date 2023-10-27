import { Injectable } from '@angular/core';

//* Aca estamos renombrando la funcion importada (con el as, al igual que en BD, va, en BD era un apodo, no renombramiento)
import { v4 as uuid } from "uuid";

import { Character } from '../interfaces/character.interface';


@Injectable({
  providedIn: 'root'
})
export class DbzService {
  /*
  *   Queremos mandar este arreglo de personajes, al componente "hijo": 'list.component.ts'

       Antes todo lo que esta aca dentro de este servicio estaba en el componente "maing-page".
       Pero lo movimos aqui, ya que es la forma correcta de trabajarlo. ya que debemos tener toda la data en los servicios.
  */
  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 2500
  }, {
    id: uuid(),
    name: 'Goku',
    power: 9500
  }, {
    id: uuid(),
    name: "Vegeta",
    power: 7500
  }, {
    id: uuid(),
    name: "Yancha",
    power: 3000
  }, {
    id: uuid(),
    name: "Piccolo",
    power: 6000
  }, {
    id: uuid(),
    name: "Ten Shin Han",
    power: 5000
  }];

  //* Metodo que va a agregar el nuevo personaje emitido por el componente add-character, que se lo paso al
  //* componente padre main-page y este lo mando para aca, ya que tiene el servicio inyectado.
  addCharacter(character: Character): void {

    const newCharacter: Character = { id: uuid(), ...character }; //* Spread operator. Se exparsen los atributos del obj original.

    this.characters.push(newCharacter);
  }

/*   onDeleteCharacter(index: number): void {
    this.characters.splice(index, 1);
  }  */

  onDeleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }
}

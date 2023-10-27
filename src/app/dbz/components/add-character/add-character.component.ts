import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  /* styleUrls: ['./add-character.component.css'] */
})
export class AddCharacterComponent {

  //* De esta forma tenemos el poder de EMITIR este atributo al exterior (entre componentes)
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();


  //* Se crea este objeto para guardar aqui los datos que se van a ingresar por el formulario
  public character: Character = {
    name: "",
    power: 0
  }

  emitCharacter(): void {

    if (this.character.name.length === 0) return;  // Esto si el nombre no tiene longitud>0, no lo mando

    this.onNewCharacter.emit(this.character);

    this.character = { name: "", power: 0 };
  }
}

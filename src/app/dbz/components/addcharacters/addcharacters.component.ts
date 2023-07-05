import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-characters',
  templateUrl: './addcharacters.component.html',
  styleUrls: ['./addcharacters.component.css']
})
export class AddcharactersComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character ={

    name: '',
    power: 0
  }


  emitCharacter():void{

    if (this.character.name.length === 0 ) return;

    this.onNewCharacter.emit(this.character);
    this.character = {name:'', power:0};

  }
}

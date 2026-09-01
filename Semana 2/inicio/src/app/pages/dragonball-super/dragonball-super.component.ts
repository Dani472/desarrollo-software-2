import { Component, signal, computed } from '@angular/core';
import {NgClass, NgIf} from '@angular/common';
import {CharacterListComponent} from '../../components/dragonball/character-list/character-list.component';
import {Character} from '../../interfaces/character.interfaces';

@Component({
  selector: 'app-dragonball',
  imports: [
    NgClass,
    NgIf,
    CharacterListComponent
  ],
  templateUrl: './dragonball-super.component.html',
  styleUrl: './dragonball-super.component.css'
})
export class DragonballSuperComponent {
  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 8100},
    { id: 2, name: 'Vegeta', power: 7100},
    { id: 3, name: 'Piccolo', power: 4000},
    { id: 4, name: 'Yamcha', power: 500},
  ]);

  powerClass = computed(() => {
    return {
      'text-danger':  true,
    }
  })

  addCharacter() {
    if(this.name() && this.power() > 0 ){ // si tiene valores y es != 0 agrega
      const newCharater: Character = {
        id: this.characters().length + 1, // no ideal
        name: this.name(),
        power: this.power()
      }
      this.characters.update((list) => [...list,newCharater]);
      this.reset();
    }
  }

  reset(){
    this.name.set('');
    this.power.set(0);
  }
}

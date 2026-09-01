import { Component, signal, computed } from '@angular/core';
import {NgClass, NgIf} from '@angular/common';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball',
  imports: [
    NgClass,
    NgIf
  ],
  templateUrl: './dragonball.component.html',
  styleUrl: './dragonball.component.css'
})
export class DragonballComponent {
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

import {Component, input, signal} from '@angular/core';
import {Character} from '../../../interfaces/character.interfaces';

@Component({
  selector: 'dragonball-character-list',
  imports: [],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent {
  characters = input.required<Character[]>();

}

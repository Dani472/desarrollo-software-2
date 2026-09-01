import {Component, signal, WritableSignal, computed} from '@angular/core';
import {UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-car',
  imports: [
    UpperCasePipe
  ],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
  brand: WritableSignal<string> = signal<string>('Renault')
  year: WritableSignal<number> = signal<number>(2020)
  student:WritableSignal<string> = signal<string>('Pepito perez')

  studentUpper = computed(() => this.student().toUpperCase());
  carDescription = computed(() => `${this.brand()} - ${this.year()}`);
/*
  getCarDescription() {
    return `${this.brand()} - ${this.year()}`;
  }*/

  changeCar() {
    this.brand.set('Kia');
    this.year.set(2021);
  }

  resetForm() {
    this.brand.set('Renault');
    this.year.set(2020);
  }
}

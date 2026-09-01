import {ChangeDetectionStrategy, Component, signal} from '@angular/core';

@Component(
  {
    templateUrl: './counter.component.html',
    styleUrl: './counter.component.css',
   // changeDetection: ChangeDetectionStrategy.OnPush
  }
)
export class CounterComponent {
  counter = 0;
  counterSignal = signal(0);

  /*constructor() {
    setInterval(() => {
      this.counter += 1;
      this.counterSignal.update((current) => current + 1);
      console.log(this.counter);
    }, 1000);
  } */

  add(value: number){
    this.counter += value;
    this.counterSignal.update((current) => current + value)
  }

  decrease(value: number) {
    this.counter -= value;
    this.counterSignal.update((current) => current - value)
  }

  reset() {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
// https://rb.gy/gvn1d8
// https://github.com/Dani472/desarrollo-software-2/blob/main/Actividad2.md




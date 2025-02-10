import { Component } from '@angular/core';
@Component({
  selector: 'app-counter',
  standalone: false,
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  counter: number =10;

  increaseBy():void{
    this.counter+=1;
  }

  decreaseBy():void{
    this.counter-=1;
  }

  reset():void{
    this.counter=10;
  }
}

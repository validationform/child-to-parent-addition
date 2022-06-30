import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  
  @Output() notify:EventEmitter<number> = new EventEmitter<number>();
  firstNumber : string;
  secondNumber : string;
  result : number;
  addNumber(){
      this.result = parseInt(this.firstNumber) + parseInt(this.secondNumber);
      console.log(typeof this.firstNumber)
      console.log(typeof this.secondNumber)
      console.log(typeof this.result)
      console.log(this.result)
   
      this.notify.emit(this.result);
  }
  constructor() { }
  ngOnInit(): void {
  }
}

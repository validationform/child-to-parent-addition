import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
 
  childData:number;
  addNumber(data){
       this.childData=data;
  }
  constructor() { }

  ngOnInit(): void {
  }

}

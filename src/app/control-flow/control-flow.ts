import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  imports: [],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {
  friendArrays : string[] = ['Mariam' , 'Alaa' , 'Ahmed' , 'Mohamed'];

  flag :  boolean = true;

  num : number = 0;

  toggleFlag(){
    this.flag = ! this.flag;
  }
}

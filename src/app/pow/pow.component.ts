import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pow',
  templateUrl: './pow.component.html',
  styleUrls: ['./pow.component.css']
})
export class PowComponent implements OnInit {
    power:number;
    constructor(){ }
    ngOnInit(){this.power=1;}

}

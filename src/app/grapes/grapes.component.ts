import { Component, OnInit } from '@angular/core';

declare const grapes: any;
declare const webpage: any;

@Component({
  selector: 'app-grapes',
  templateUrl: './grapes.component.html',
  styleUrls: ['./grapes.component.scss']
})
export class GrapesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    webpage.default.init()
  }
}

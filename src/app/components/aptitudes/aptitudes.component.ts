import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css']
})
export class AptitudesComponent implements OnInit {
  ingles=90;
  progress = 20;
  constructor() { }

  ngOnInit(): void {
  }

}

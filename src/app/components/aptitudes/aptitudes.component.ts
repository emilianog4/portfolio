import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css']
})
export class AptitudesComponent implements OnInit {
  ingles=55;
  angular=40;
  java=35;
  teamwork=90;
  selfStarter=90;
  lifelongLearning=90;

constructor() { }

  ngOnInit(): void {
  }

}

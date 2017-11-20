import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  title = "Welcome to Weasley's!";
  firstName = "Harry";
  birthDate : Date = new Date(1980, 6, 31);
  now : Date = new Date();


  constructor() { }

  ngOnInit() {
  }

}

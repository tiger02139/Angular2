import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Angular!';
  firstName = "Harry";
  birthDate : Date = new Date(1980, 6, 31);
}

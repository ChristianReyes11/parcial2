import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parcial2';
  link: any;
  constructor(){
    this.link= "ui/ui.component.html";
  }
}

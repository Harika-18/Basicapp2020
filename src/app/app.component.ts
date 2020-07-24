import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Temperature Converter';
  constructor(){
    this.started=false;
  }
  started:boolean=false;
getstarted(){
  this.started=!this.started;
}
}

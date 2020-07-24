import {Component, Input, OnInit, OnChanges} from '@angular/core';
@Component({
  selector: 'temperature-converter',
  templateUrl: './temperatureConverter.component.html',
  styleUrls: ['./temperatureConverter.component.css']
})

export class TemperatureConverter implements OnInit {
celsius:number;
fahrenheit:number;
fahrenheitvalue:number;
  ngOnInit() {}
  get(){
    if(this.celsius==null)
    {
      console.log(this.celsius);
    }
  }
refresh(){
  location.reload();
}
}
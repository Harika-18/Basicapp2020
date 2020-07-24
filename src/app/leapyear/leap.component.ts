import {Component} from "@angular/core";

@Component({
selector:'app-leap',
templateUrl:'./leap.component.html',
styleUrls:['./leap.component.css']
})
export class LeapComponent{
year:number;
yseorno="";
ststus:boolean=false;
getyear(){
    this.ststus=true;
    if(this.year%4==0)
    {
        if(this.year%100==0)
        {
            if(this.year%400==0)
            {
            this.yseorno=this.year+" is a leap year";
            }
            else{
                this.yseorno=this.year+" is not leap year";
            }
        }
        else{
            this.yseorno=this.year+" is a leap year";
        }
    }
    else{
        this.yseorno=this.year+" is not leap year";
    }   
}
}
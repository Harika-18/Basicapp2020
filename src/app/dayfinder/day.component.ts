import { Component } from '@angular/core';

import weekname from '../models/weekname';
import mcode from '../models/monthcode';
import monthname from '../models/monthname';
@Component({
selector:'app-day',
templateUrl:'./day.component.html',
styleUrls:['./day.component.css']
})
export class DayComponent{
dategiven=null;
dategot:number[];
finaldate:number[];
yearcode:number=0;
year:number=0;
yearrem:number=0;
noofleap:number=0;
daycode:number=0;
monthcode:number=0;
finalweekname='';
flag=false;
incorrect=false;
message='';
incmessage='';
getdate(){
    if(this.dategiven===null)
    {
        this.incorrect=true;
        this.incmessage="Date is not valid";
        return;
    }
    this.dategot=(this.dategiven.split('-'));
}      
getyear(){
    if(Number(this.dategot[0])>=2000)
    {
        this.yearcode=6;
        this.yearrem=Number(this.dategot[0])-2000;
    }
    if(Number(this.dategot[0])>=1900&&Number(this.dategot[0])<2000)
    {
        this.yearcode=0;
        this.yearrem=Number(this.dategot[0])-1900;
    }
    if(Number(this.dategot[0])>=1800&&Number(this.dategot[0])<=1899)
    {
        this.yearcode=2;
        this.yearrem=Number(this.dategot[0])-1800;
    }
    if(this.yearrem>4)
    {
        this.noofleap=this.yearrem/4;
    }
}
getmonth()
{
    if(Number(this.dategot[1])<10)
    {
        this.monthcode=mcode[(Number(this.dategot[1])%10)-1];
    }
    else
    {
        this.monthcode=mcode[(Number(this.dategot[1]))-1];   
    }
}
getday(){
    this.getdate();
    this.getyear();
    this.getmonth();
    this.daycode=(this.yearcode+this.yearrem+this.noofleap+this.monthcode+Number(this.dategot[2]));
    this.daycode=this.daycode%7;
    console.log(this.daycode);
    this.daycode=Math.floor(this.daycode);
    if(this.daycode===0)
    {
        this.finalweekname=weekname[6];
    }
    else{
        this.finalweekname=weekname[this.daycode-1];
    }
    if(this.finalweekname===undefined)
    {
       this.incorrect=true;
       this.incmessage="*Entered date is not valid";
        this.flag=false;
        console.log(this.yearcode);
        console.log(this.yearrem);
        console.log(this.noofleap);
        console.log(this.monthcode);
        console.log(this.dategot[2]);
        console.log(this.daycode);
        return;
    }
    this.flag=true;
this.message="Hey day on "+this.dategot[0]+" "+monthname[Number(this.dategot[1]-1)]+" , "+this.dategot[2]+" is "
    +this.finalweekname;
    console.log(this.yearcode);
    console.log(this.yearrem);
    console.log(this.noofleap);
    console.log(this.monthcode);
    console.log(this.dategot[2]);
    console.log(this.daycode);
    
}
}
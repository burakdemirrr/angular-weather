import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private dataservice:DataService) { }
  mydata:any;
  city:any;
  ngOnInit(): void {
  }
  
  handleClick(){
    this.dataservice.getData(this.city,"224ad222d6ebd6d836e88139602d28fd").subscribe((data)=>{
      this.mydata=data
    })

    
  }

}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-onlinerequest',
  templateUrl: './onlinerequest.component.html',
  styleUrls: ['./onlinerequest.component.css']
})
export class OnlinerequestComponent implements OnInit {
  ReceivedData:any[]=[];
  constructor(private ds:DataService) { }

  ngOnInit(): void {
    this.ds.makeAHttpReq().subscribe((result)=>{
      console.log(result);
      this.ReceivedData=result;
    })
     
  }

}

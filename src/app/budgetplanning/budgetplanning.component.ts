import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-budgetplanning',
  templateUrl: './budgetplanning.component.html',
  styleUrls: ['./budgetplanning.component.css']
})
export class BudgetplanningComponent implements OnInit {
   imageData:any[]=[];
  constructor(private img:ImageService) { }

  ngOnInit(): void {
    this.img.getImageData().subscribe((result)=>{
      this.imageData=result["data"];
    })
  }

}

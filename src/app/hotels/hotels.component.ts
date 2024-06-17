import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent {
  public userInput:any;
  public recommendations: any[] | undefined;
constructor(private dataService:DataService){

}
ngOnInit(){
  this.dataService.getHotels()
  .subscribe((response: any) => {

    console.log(response)  
  });
}
  getRecommendations() {
    this.dataService.getHotelRecommendations(this.userInput)
      .subscribe((data:any) => {
        console.log(data)
        this.recommendations = data.recommendations;
      });
  }
}

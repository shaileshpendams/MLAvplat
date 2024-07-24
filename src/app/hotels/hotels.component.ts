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
  message: string = '';
constructor(private dataService:DataService){

}
ngOnInit(){
  this.dataService.getHotels()
  .subscribe((response: any) => {

    console.log(response)  
  });
}
  getRecommendations() {
    if(this.userInput){
      this.dataService.getHotelRecommendations(this.userInput)
      .subscribe((data:any) => {
        console.log(data)
        this.recommendations = data;
        console.log(this.recommendations)

      },);
  
    }else{
      this.recommendations = [];
      this.message = 'Please enter a location or hotel name';
    }
  }

}

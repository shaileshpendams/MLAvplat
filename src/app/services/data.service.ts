import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = environment.apiUrl; // Use the environment variable for API URL
  private firebaseConfig = environment.firebaseConfig; // Use the environment variable for Firebase config
  constructor(private http:HttpClient) { }
  getFeedbackData() {
    return this.http.get(`${this.apiUrl}/feedback`);
  }
  getSentimentResults() {
    return this.http.get(`${this.apiUrl}/send_sentiment_results`);
  }

  getRatingResults() {
    return this.http.get(`${this.apiUrl}/send_rating_results`);
  }

  getAccuracyResults() {
    return this.http.get(`${this.apiUrl}/send_accuracy_results`);
  }
 

  getHotels() {
    return this.http.get(`${this.apiUrl}/hotelsList`);
  }
  getHotelRecommendations(userInput:any) {
    return this.http.post<any[]>(`${this.apiUrl}/recommend_hotels`, {  inputText: userInput  });
  }
}

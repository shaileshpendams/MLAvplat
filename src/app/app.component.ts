import { Component, ElementRef, ViewChild } from '@angular/core';

import { DataService } from './services/data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private dataService: DataService) {}
  public feedbackList: any;

  ngOnInit(): void {
    this.fetchData();
  }
  fetchData(): void {
    this.dataService.getFeedbackData()
      .subscribe((response: any) => {
        this.feedbackList = response; // Handle the received data as needed
        console.log( this.feedbackList )
  //  this.feedbackList = [response.Negative, response.Neutral, response.Positive];
      });
  }


}


/*
Eg:- Lets cosider there are 29 classrooms in a collage and lets say you have calected the ages of students in one class.

- Ages class :{19,20,21,18,34,22,21,25,24}

Cases like or question like
==========
Descriptive Staststics 

 what is the common age in your stasts class ?
            > common age means (Mean) means Central Tendancy

Inferential Statstics 

Are the ages of Students in the classroom similer to the ages of the students in the University. 

Papulation and Sample
======================

Papulation: The Group that we are intrested in study
Sample:Subset of the Population

Example: Exit poll

  {Media} ==> Which Party will win ?

  For this they collect some people  openion from different-different regions in state.

  Sample techniques Types
  ========================
The goal of sampling is to create a sample that is represent of the entire population

population (N)  sample(n)
Sample techniques Types
========================
Simple random sampling

when performing  simple Random sampling , every member of the Population (N) has an equal chance of been selected for your sampling for your sample (n).


2) Stratified Sampling
-----------------------


*/
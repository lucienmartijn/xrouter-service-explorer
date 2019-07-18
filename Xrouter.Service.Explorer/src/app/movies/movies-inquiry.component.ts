import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-inquiry',
  templateUrl: './movies-inquiry.component.html',
  styleUrls: ['./movies-inquiry.component.css']
})
export class MoviesInquiryComponent implements OnInit {

  public title: string;

  constructor() { 
    this.title = "Movie Inquiry 2";
  }

  ngOnInit() {
  }

}

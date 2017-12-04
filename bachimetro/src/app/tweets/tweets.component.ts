import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.styl']
})

/* Get latest tweets about 'baches' */

export class TweetsComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {
  }

}

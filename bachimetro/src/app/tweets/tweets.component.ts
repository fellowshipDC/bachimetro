import { Component, OnInit } from '@angular/core';
import { Http, HttpModule, Response } from '@angular/http';
declare const google : any;
declare const map: any;

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.styl']
})

/* Get latest tweets about 'baches' & displays on Google Map*/

export class TweetsComponent implements OnInit {

  constructor() {  
  }
  
  ngOnInit() {
    function initMap() {
      var center = {lat: 19.432608, lng: -99.133209};
      var bounds = new google.maps.LatLngBounds();
      var map = new google.maps.Map(document.getElementById('gmap'), {
        zoom: 5,
        center: center
      });
    }
    initMap();0
  }
}  
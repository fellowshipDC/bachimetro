import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var $: any;
declare var google: any;


@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.styl']
})

/* Get latest tweets about 'baches' & displays on Google Map*/

export class TweetsComponent implements OnInit {

  url = 'http://localhost:3000/tweets';

  constructor(private http: HttpClient) {
  }

  initMap() {
    var cdmx = { lat: 19.4286973, lng: -99.156051 };
    var light_grey_style = [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}];
    var options = {
      zoom: 5,
      center: cdmx,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.LEFT_BOTTOM
      },
      styles: light_grey_style
    };
    var map = new google.maps.Map(document.getElementById('map'), options);

    return map;
  }

  addMarker(map, lat, lng) {
    var location = { lat: lat, lng: lng };
    var image = "css/marker_bachimetro.png";
    var marker = new google.maps.Marker({
      position: location,
      map: map,
      icon: image
    });
  }

  ngOnInit() {

    this.http
    .get(this.url)
    .subscribe(
      (res: any) => {
        console.log(res, 'ok');
        let map = this.initMap();

        res.body.statuses.map(status => {
          if (status.geo !== null) {
            this.addMarker(map, status.geo.lng, status.geo.lat);
          }
        });

      },
      err => {
        console.log('error');
      }
    );

  }
}

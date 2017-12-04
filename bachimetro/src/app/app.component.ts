import { Component, OnInit } from '@angular/core';
import { Http, Response} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'Bachimetro';
  private apiUrl = 'https://twitter.com/search?src=typd&q=baches';
  data : any = {};

  constructor(private http : Http){
    this.http
      .get('https://api.twitter.com/1.1/search/tweets.json?q=baches'
      /* 
      Consumer Key (API Key)	yAXoXCoZvZZUmUWs0p2GTNH2s
Consumer Secret (API Secret)	vp0y26xc1HhWVmIsFTAzEDAoEGzhtzVUsJw3hGY2xJ4ohbzKrp

      */
    )
  }

  ngOnInit(){

  }
}

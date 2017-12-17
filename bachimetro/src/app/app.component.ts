import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})

export class AppComponent {
  title = 'Bachimetro';

  constructor(private http : Http){

  }

  ngOnInit(){

  }
}

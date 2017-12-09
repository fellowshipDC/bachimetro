import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})

export class AppComponent {
  title = 'Bachimetro';
  data : any = null;

  constructor(private http : Http){
    this.getTweets();
  }

  private bearclaws = {"access_token":"<Bearer> AAAAAAAAAAAAAAAAAAAAANxN3QAAAAAASPfkYaEsbzos4GzCvdR9tLQV%2BXU%3DZ9rsMl6Fy4U9VvpauaMFDKBLr2ViBHy2QFQxlJuVEgw0ZAZYR1"};

  private getTweets(){
    return this.http.get('https://api.twitter.com/1.1/search/tweets.json?q=%23bachimetro',)
    .map((res : Response) => res.json())
      .subscribe(data => {
        this.data = data;
        console.log(this.data);
      });
  }
//  .get('https://api.twitter.com/1.1/search/tweets.json?q=%23bachimetro')

  

  ngOnInit(){

  }
}

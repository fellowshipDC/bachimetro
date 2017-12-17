import { Component, OnInit } from '@angular/core';

declare var twttr : any;

@Component({
  selector: 'app-tweetit',
  templateUrl: './tweetit.component.html',
  styleUrls: ['./tweetit.component.styl']
})
export class TweetitComponent implements OnInit {
  
  
  constructor() { }
  
  ngOnInit() {
//    twttr.ready(function(){
//        twttr.widgets.createShareButton(
//        "https:\/\/dev.twitter.com\/web\/tweet-button",
//        document.getElementById("tweet-container"),
//          {
//            size: "large",
//            via: "JLu_Puente",
//            related: "twitterapi,twitter",
//            text: "Bache en:",
//            hashtags: "baches,bachimetro"
//          }
//      );
//    twttr.widgets.load();
//    })
  }  
}

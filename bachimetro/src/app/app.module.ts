import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { InfoComponent } from './info/info.component';
import { AboutComponent } from './about/about.component';
import { TweetsComponent } from './tweets/tweets.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MapComponent } from './map/map.component';
import { ContactComponent } from './contact/contact.component';
import { GraphBarComponent } from './graph-bar/graph-bar.component';
import { DefinitionComponent } from './definition/definition.component';
import { StreetsComponent } from './streets/streets.component';
import { LastTweetsComponent } from './last-tweets/last-tweets.component';
import { TweetitComponent } from './tweetit/tweetit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    InfoComponent,
    AboutComponent,
    TweetsComponent,
    NavbarComponent,
    MapComponent,
    ContactComponent,
    GraphBarComponent,
    DefinitionComponent,
    StreetsComponent,
    LastTweetsComponent,
    TweetitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'info',
        component: InfoComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

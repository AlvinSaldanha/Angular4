import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common'

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { Player2Component } from './player2/player2.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { MyHighlightDirective } from './my-highlight.directive';
import { StructuralComponent } from './structural/structural.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { HandedPipe } from './handed.pipe';
import { PlayerDataComponent } from './player-data/player-data.component';
import { PlayerData2Component } from './player-data2/player-data2.component';
import { PlayerService } from './player.service';
import { ObservableExampleComponent } from './observable-example/observable-example.component';
import { BookShowComponent } from './book-show/book-show.component';
import { TheatreWindowComponent } from './theatre-window/theatre-window.component'
import { BookingService } from './booking.service';
import { HttpExampleComponent } from './http-example/http-example.component'
import { HttpService } from './http.service';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { RouterModule, Route } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AnimationsComponent } from './animations/animations.component'

const routes: Route[] = [
  {path:'page1',component:FirstComponent},
  {path:'page2',component:SecondComponent},
  {path:'animation',component:AnimationsComponent},
  {path:'',component:PlayerComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    Player2Component,
    ParentComponent,
    ChildComponent,
    MyHighlightDirective,
    StructuralComponent,
    PipeExampleComponent,
    HandedPipe,
    PlayerDataComponent,
    PlayerData2Component,
    ObservableExampleComponent,
    BookShowComponent,
    TheatreWindowComponent,
    HttpExampleComponent,
    FirstComponent,
    SecondComponent,
    NotFoundComponent,
    AnimationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PlayerService, BookingService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {routes} from './app.routes';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import {HomeResults} from "./home/home-results.component";
import reducer from "./reducers";
import {StoreModule, provideStore} from "@ngrx/store";
import {MovieService} from "./movie-service.service";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    HomeResults
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, {
      useHash: true
    }),
    StoreModule.provideStore(reducer)
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
